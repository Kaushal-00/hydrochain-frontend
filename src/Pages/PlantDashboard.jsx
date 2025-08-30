import { client } from "../../config";
import CreditBalanceCard from "../components/CreditBalanceCard";
import DataTable from "../components/DataTable";
import DisplayCard from "../components/DisplayCard";
import IoTDataFeedCard from "../components/IoTDataFeedCard";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const PlantDashboard = () => {
    const [username, setUsername] = useState("loading...");
    const [userData, setUserData] = useState();
    const navigate = useNavigate();

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const res = await client.get('/me');
                const fetchedUsername = res.data.data.username;

                setUsername(fetchedUsername);

                const temp = await client.get(`/users/${fetchedUsername}`);
                setUserData(temp.data.data);
            } catch (err) {
                console.log("Failed to fetch user: ", err);
            }
        }
        fetchUser();
    }, []);

    function creditHistroy(e) {
        return e.filter(item => item.type === "ISSUE");
    }

    function recentTransactions(e) {
        return e.filter(item => item.type !== "ISSUE");
    }

    const getUtilizationRate = () => {
        const generated = parseInt(userData?.creditSummary?.lifeTimeGeneratedCredits) || 0;
        const transferred = parseInt(userData?.creditSummary?.lifeTimeTransferredCredits) || 0;

        if (generated === 0) return "0%"; // avoid divide by zero
        const percentage = (transferred / generated) * 100;
        return `${percentage.toFixed(2)}% utilization rate`;
    };

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
                <DisplayCard variant="numerical" title="Total Credit Generated" number={userData?.creditSummary?.lifeTimeGeneratedCredits ?? '--'} />
                <DisplayCard variant="numerical" title="Total Credit Transferred" number={userData?.creditSummary?.lifeTimeTransferredCredits ?? '--'} msg={`${getUtilizationRate()} utilization rate`} />
                <DisplayCard variant="nameDisplay" title="Assigned Auditor" displayName="Environmental Audit Corp" subMsg="Verified & Active" />
            </div>

            <h1 className="pl-[2.5%] mt-5 text-4xl font-bold w-[90%]">Credit Management</h1>

            <div className="flex justify-center">
                <IoTDataFeedCard
                    requirements="date, hydrogenProduced, purity, electricityConsumed, electrolyzerEfficiency, deviceId"
                    values={{
                        date: "2025-08-30",
                        hydrogenProduced: 100,
                        purity: 99,
                        electricityConsumed: 500,
                        electrolyzerEfficiency: 75,
                        deviceId: "DEVICE-001"
                    }}
                    onAction={() => alert("Credits Generated!")}
                    actionLabel="Generate Credits"
                />
                <CreditBalanceCard current={userData?.creditSummary?.activeAmount ?? '-'} pending={userData?.creditSummary?.pendingAmount ?? '-'} lifetime={userData?.creditSummary?.lifeTimeGeneratedCredits ?? '-'} />
            </div>

            <h1 className="pl-[2.5%] mt-5 text-4xl font-bold w-[90%]">Credit Generation History</h1>
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
};

export default PlantDashboard;
