import CreditBalanceCard from "@/components/CreditBalanceCard";
import DataTable from "@/components/DataTable";
import DisplayCard from "@/components/DisplayCard";
import IoTDataFeedCard from "@/components/IoTDataFeedCard";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const IndustryDashboard = () => {
    const [username, setUsername] = useState("undefined");
    const navigate = useNavigate();

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
                    values={{
                    "date": "2025-08-30",
                    "hydrogenConsumed": 100,
                    "timePeriod": "08:00 - 16:00",
                    "energySource": "Solar",
                    "location": "23.456, 72.345",
                    "deviceId": "DEVICE-002"
                    }}
                    onAction={() => alert("Credits Retired!")}
                    actionLabel="Retire Credits"
                />
                <CreditBalanceCard />
            </div>

            <div className="ml-[1.25%]">
            <IoTDataFeedCard
                requirements="date, hydrogenTransferred, transferStartTime, transferEndTime, transportMethod, trackingId, location (from,to), deviceId"
                values={{
                "date": "2025-08-30",
                "hydrogenTransferred": 200,
                "transferStartTime": "09:00",
                "transferEndTime": "12:00",
                "transportMethod": "Pipeline",
                "trackingId": "TRACK-123",
                "location": {
                    "from": "23.456,72.345",
                    "to": "23.567,72.456"
                },
                "deviceId": "DEVICE-003"
                }}
                onAction={() => alert("Credits Transferred!")}
                actionLabel="Transfer Credits"
            />

            </div>

            <h1 className="pl-[2.5%] mt-5 text-4xl font-bold w-[90%]">Credit Retiration History</h1>

            <div className="flex justify-center">
                <DataTable />
            </div>

            <h1 className="pl-[2.5%] mt-5 text-4xl font-bold w-[90%]">Recent Transactions</h1>

            <div className="flex justify-center">
                <DataTable />
            </div>


            <div className="bg-gray-50 border-t-gray-200 border-1 mt-8 w-full p-5 text-gray-500">
                © {new Date().getFullYear()} HydroChain
            </div>
        </div>
    );
}

export default IndustryDashboard;