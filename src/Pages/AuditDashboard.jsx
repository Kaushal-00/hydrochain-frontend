import DisplayCard from "@/components/DisplayCard";
import { client } from "../../config";
import { useEffect, useState } from "react";
import DataTable from "@/components/DataTable";
import { useNavigate } from "react-router-dom";

const AuditDashboard = () => {
    const [username, setUsername] = useState("loading...");
    const [userData, setUserData] = useState();
    const navigate = useNavigate();

    const data = [
        {
            id: "bf478ffb-0f96-4c9c-b776-2075073acbe7",
            amount: 1,
            issuedAt: "2025-08-30T17:12:58.470Z",
            status: "PENDING",
            type: "ISSUE",
            metadata: JSON.stringify({ note: "First issue", priority: "high" })
        },
        {
            id: "c2e116d8-1385-4176-a079-eafc854ff67b",
            amount: 1,
            issuedAt: "2025-08-30T17:06:33.788Z",
            status: "PENDING",
            type: "ISSUE",
            metadata: JSON.stringify({ reason: "manual request" })
        },
        {
            id: "9e2db754-0cda-4f31-b68c-e317e8ffd9b6",
            amount: 5,
            issuedAt: "2025-08-30T13:25:37.518Z",
            status: "TRANSFERRED",
            recipient: "fire",
            txnHash: "0x7f1781230e428c6623d703665dac8b6650cecccd7abfdc2a9797647432037f24",
            type: "TRANSFER_OUT",
            metadata: JSON.stringify({ approvedBy: "system", batch: 42 })
        }
    ]


    useEffect(() => {
        const fetchUser = async () => {
            try {
                const res = await client.get('/me');
                const fetchedUsername = res.data.data.username;

                setUsername(fetchedUsername);

                const temp = await client.get(`/users/${fetchedUsername}`);
                setUserData(temp.data.data);
            } catch (err) {
                console.log(err);
            }
        }

        fetchUser();
    }, []);

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
                <DisplayCard variant="numerical" title="Total Pending Generate Requests" number={1120} />
                <DisplayCard variant="numerical" title="Total Pending Retire Requests" number={890} />
                <DisplayCard variant="numerical" title="Total Pending Transfer Requests" number={780} />
            </div>

            <h1 className="pl-[2.5%] mt-5 text-4xl font-bold w-[90%]">Requests Table</h1>

            <div className="flex justify-center">
                <DataTable data={data} audit />
            </div>

            <h1 className="pl-[2.5%] mt-5 text-4xl font-bold w-[90%]">Transaction History</h1>
            <div className="flex justify-center">
                <DataTable data={[]} />
            </div>

            <div className="bg-gray-50 border-t-gray-200 border-1 mt-8 w-full p-5 text-gray-500">
                © {new Date().getFullYear()} HydroChain
            </div>

        </div>
    );
}

export default AuditDashboard;