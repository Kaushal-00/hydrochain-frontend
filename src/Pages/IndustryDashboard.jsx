import CreditBalanceCard from "../components/CreditBalanceCard";
import DataTable from "../components/DataTable";
import IoTDataFeedCard from "../components/IoTDataFeedCard";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import DisplayCard from "../components/DisplayCard";
import { client, NPOINT_URL } from "../../config";
import axios from "axios";

const IndustryDashboard = () => {
    const [username, setUsername] = useState("loading...");
    const [userData, setUserData] = useState();
    const [retireIndex, setRetireIndex] = useState();
    const [transferIndex, setTransferIndex] = useState();
    const navigate = useNavigate();

    const retireData = [
        {
            "date": "2005-08-30",
            "hydrogenConsumed": 900,
            "timePeriod": "08:00 - 8:00",
            "energySource": "Solar",
            "location": "23.456, 72.345",
            "deviceId": "DEVICE-009"

        },
        {
            "date": "2025-08-30",
            "hydrogenConsumed": 100,
            "timePeriod": "08:00 - 16:00",
            "energySource": "Solar",
            "location": "23.456, 72.345",
            "deviceId": "DEVICE-002"

        }
    ];

    const transferData = [
        {
            "date": "2005-08-30",
            "hydrogenTransferred": 900,
            "transferStartTime": "91:00",
            "transferEndTime": "12:00",
            "transportMethod": "Pipeline",
            "trackingId": "TRACK-123",
            "location (from)": "23.456,72.345",
            "location (to)": "23.567,72.456",
            "deviceId": "DEVICE-008"
        },
        {
            "date": "2025-08-30",
            "hydrogenTransferred": 200,
            "transferStartTime": "09:00",
            "transferEndTime": "12:00",
            "transportMethod": "Pipeline",
            "trackingId": "TRACK-123",
            "location (from)": "23.456,72.345",
            "location (to)": "23.567,72.456",
            "deviceId": "DEVICE-003"
        }
    ]

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const res = await client.get('/me');
                const fetchUsername = res?.data?.data?.username ?? '';

                setUsername(fetchUsername);

                const temp = await client.get(`/users/${fetchUsername}`);
                setUserData(temp.data.data);

                const index = await axios.get(NPOINT_URL);
                setRetireIndex(index?.data?.industryRetire);
                setTransferIndex(index?.data?.industryTransfer);
            } catch (err) {
                console.log("Failed to fetch user: ", err);
            }
        }
        fetchUser();
    }, [])

    async function retireCredit() {
        try {
            await client.post('/request/issues', {
                amount: 1, // or compute based on hydrogenProduced / credits
                metadata: JSON.stringify(retireData[retireIndex]) // stringify object
            });
        } catch (err) {
            console.error("Request failed:", err.response?.data || err.message);
        }
    }

    async function transferCredit() {
        try {
            await client.post('/request/issues', {
                amount: 1, // or compute based on hydrogenProduced / credits
                metadata: JSON.stringify(transferData[transferIndex]) // stringify object
            });
        } catch (err) {
            console.error("Request failed:", err.response?.data || err.message);
        }

    }

    function creditHistroy(e) {
        return e.filter(item => item.type == "ISSUE");
    }

    function recentTransactions(e) {
        return e.filter(item => item.type != "ISSUE");
    }

    return (
        <div>
            <div className="p-4 cursor-pointer" onClick={() => navigate("/")}>
                <h1 className="text-green-600 font-bold text-xl flex items-center space-x-2">
                    <span className="bg-green-600 text-white p-2 rounded-md">🌱</span>
                    <span>HydroChain</span>
                </h1>
            </div>

            <h1 className="pl-[2.5%] mt-5 text-4xl font-bold w-[90%]">Welcome, {username} 🌱</h1>

            <div className="flex justify-center">
                <DisplayCard variant="numerical" title="Total Credit Retired" number={2450} msg="+12% from last month" />
                <DisplayCard variant="numerical" title="Total Credit Transfered" number={1890} msg="77% utilization rate" />
                <DisplayCard variant="nameDisplay" title="Assigned Auditor" displayName="Environmental Audit Corp" subMsg="Verified & Active" />
            </div>

            <h1 className="pl-[2.5%] mt-5 text-4xl font-bold w-[90%]">Credit Management</h1>

            <div className="flex justify-center">
                <IoTDataFeedCard
                    requirements="date, hydrogenConsumed, timePeriod, energySource, location, deviceId"
                    values={retireData[retireIndex]}
                    onAction={() => retireCredit()}
                    actionLabel="Retire Credits"
                />
                <CreditBalanceCard current={userData?.creditSummary?.activeAmount ?? '-'} pending={userData?.creditSummary?.pendingAmount ?? '-'} />
            </div>

            <div className="ml-[1.25%] w-full">
                <IoTDataFeedCard
                    requirements="date, hydrogenTransferred, transferStartTime, transferEndTime, transportMethod, trackingId, location (from), location (to), deviceId"
                    values={transferData[transferIndex]}
                    onAction={() => transferCredit()}
                    actionLabel="Transfer Credits"
                />

            </div>

            <h1 className="pl-[2.5%] mt-5 text-4xl font-bold w-[90%]">Credit Retiration History</h1>

            <div className="flex justify-center">
                <DataTable data={creditHistroy(userData?.transactions ?? [])} />
            </div>

            <h1 className="pl-[2.5%] mt-5 text-4xl font-bold w-[90%]">Recent Transactions</h1>

            <div className="flex justify-center">
                <DataTable data={recentTransactions(userData?.transactions ?? [])} />
            </div>


            <div className="bg-gray-50 border-t-gray-200 border-1 mt-8 w-full p-5 text-gray-500">
                © {new Date().getFullYear()} HydroChain
            </div>
        </div>
    );
}

export default IndustryDashboard;