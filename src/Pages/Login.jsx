import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
    const [role, setRole] = useState("Plant");
    const navigate = useNavigate();

    return (
        <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-50 to-gray-100">
            {/* Navbar / Header */}
            <div className="p-4 cursor-pointer" onClick={() => navigate("/")}>
                <h1 className="text-green-600 font-bold text-xl flex items-center space-x-2">
                    <span className="bg-green-600 text-white p-2 rounded-md">🌱</span>
                    <span>HydroChain</span>
                </h1>
            </div>

            {/* Centered Login Card */}
            <div className="flex flex-1 justify-center items-center">
                <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-md">
                    <h2 className="text-2xl font-semibold text-center">Welcome Back</h2>
                    <p className="text-gray-500 text-center mb-6">
                        Select your role and sign in to continue
                    </p>

                    {/* Role Selector */}
                    <div className="flex justify-between bg-gray-100 rounded-lg mb-6">
                        {["Plant", "Industry", "Auditor"].map((item) => (
                            <button
                                key={item}
                                onClick={() => setRole(item)}
                                className={`flex-1 py-2 text-sm font-medium rounded-lg ${role === item
                                    ? "bg-white border border-gray-300 shadow-sm text-green-600"
                                    : "text-gray-600"
                                    }`}
                            >
                                {item}
                            </button>
                        ))}
                    </div>

                    {/* Form */}
                    <form className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium mb-1">User Name</label>
                            <input
                                type="text"
                                placeholder="Enter your username"
                                className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-green-500 focus:outline-none"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium mb-1">Password</label>
                            <input
                                type="password"
                                placeholder="Enter your password"
                                className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-green-500 focus:outline-none"
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700"
                        >
                            {role} Login
                        </button>
                    </form>

                    {/* Register */}
                    <p className="text-sm text-center mt-4">
                        New Plant/Industry?{" "}
                        <Link to="/register" className="text-green-600 font-medium hover:underline">
                            Register here
                        </Link>
                    </p>

                    <p className="text-xs text-gray-400 text-center mt-2">
                        By continuing, you agree to our Terms of Service and Privacy Policy
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;
