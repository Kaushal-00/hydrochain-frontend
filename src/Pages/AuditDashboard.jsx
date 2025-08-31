import DisplayCard from "@/components/DisplayCard";
import { client } from "../../config";
import { useEffect, useState } from "react";
import DataTable from "@/components/DataTable";
import { useNavigate } from "react-router-dom";

const AuditDashboard = () => {
    const [username, setUsername] = useState("loading...");
    const [requests, setRequests] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    // fetch user info + requests
    useEffect(() => {
        const fetchData = async () => {
            try {
                // get logged-in user info
                const res = await client.get("/me");
                const fetchedUsername = res.data.data.username;
                setUsername(fetchedUsername);

                // fetch issue, buy, retire requests
                const [issues, buys, retires] = await Promise.all([
                    client.get("/request/issues"),
                    client.get("/request/buy"),
                    client.get("/request/retire"),
                ]);

                const combined = [
                    ...issues.data.data.map((r) => ({
                        id: r.id,
                        amount: r.amount,
                        issuedAt: r.createdAt,
                        status: r.status,
                        type: "ISSUE",
                        metadata: r.metadata,
                    })),
                    ...buys.data.data.map((r) => ({
                        id: r.id,
                        amount: r.amount ?? 0,
                        issuedAt: r.createdAt ?? null,
                        status: r.status,
                        type: "BUY",
                        creditId: r.creditId,
                        metadata: r.metadata,
                    })),
                    ...retires.data.data.map((r) => ({
                        id: r.id,
                        amount: 0,
                        issuedAt: null,
                        status: r.status,
                        type: "RETIRE",
                        creditId: r.creditId,
                        metadata: r.metadata,
                    })),
                ];

                setRequests(combined);
            } catch (err) {
                console.error("Failed to fetch requests:", err);
                alert("Failed to fetch requests");
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    // handle Accept/Reject actions
    const handleAuditAction = async (row, action) => {
        try {
            let endpoint = "";

            if (row.type === "ISSUE") {
                endpoint = `/request/issues/${row.id}/${action}`;
            } else if (row.type === "BUY") {
                endpoint = `/request/buy/${row.id}/${action}`;
            } else if (row.type === "RETIRE") {
                endpoint = `/request/retire/${row.id}/${action}`;
            }

            await client.post(endpoint, {});
            alert(`${action === "accept" ? "Accepted" : "Rejected"} request`);

            // refresh list locally
            setRequests((prev) =>
                prev.map((r) =>
                    r.id === row.id ? { ...r, status: action === "accept" ? "APPROVED" : "REJECTED" } : r
                )
            );
        } catch (err) {
            console.error("Action failed:", err);
            alert("Action failed");
        }
    };

    return (
        <div className="bg-gray-100 min-h-screen">
            {/* Navbar / Header */}
            <div
                className="p-4 cursor-pointer bg-[#507464]"
                onClick={() => navigate("/")}
            >
                <h1 className="text-white font-bold text-xl flex items-center space-x-2">
                    <img src="../logo.png" width={40} alt="logo" />
                    <span>HydroChain</span>
                </h1>
            </div>

            <h1 className="pl-[2.5%] mt-5 text-4xl font-bold w-[90%]">
                Welcome, {username} 🌱
            </h1>

            <div className="flex justify-center gap-4 mt-4">
                <DisplayCard
                    variant="numerical"
                    title="Total Pending Generate Requests"
                    number={requests.filter((r) => r.type === "ISSUE" && r.status === "PENDING").length}
                />
                <DisplayCard
                    variant="numerical"
                    title="Total Pending Retire Requests"
                    number={requests.filter((r) => r.type === "RETIRE" && r.status === "PENDING").length}
                />
                <DisplayCard
                    variant="numerical"
                    title="Total Pending Transfer Requests"
                    number={requests.filter((r) => r.type === "BUY" && r.status === "PENDING").length}
                />
            </div>

            <h1 className="pl-[2.5%] mt-5 text-3xl font-bold w-[90%]">
                Requests Table
            </h1>

            <div className="flex justify-center">
                {loading ? (
                    <p className="m-5 text-gray-500">Loading requests...</p>
                ) : (
                    <DataTable data={requests} audit onAuditAction={handleAuditAction} />
                )}
            </div>

            <div className="flex flex-col min-h-[35dvh]">
                {/* Main content */}
                <main className="flex-grow">
                    {/* Your page content here */}
                </main>

                {/* Footer */}
                <footer className="bg-gray-50 border-t border-t-gray-200 w-full p-5 text-gray-500 text-center">
                    © {new Date().getFullYear()} HydroChain
                </footer>
            </div>
        </div>
    );
};

export default AuditDashboard;
