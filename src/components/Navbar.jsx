import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="bg-gray-50 shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">

                    {/* Left: Logo + tagline */}
                    <div className="flex items-center space-x-2">
                        <div className="bg-green-600 p-2 rounded-md">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6 text-white"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth="2"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M12 4v16m8-8H4"
                                />
                            </svg>
                        </div>
                        <div>
                            <h1 className="text-lg font-bold">HydroChain</h1>
                            <p className="text-xs text-gray-500">Green Hydrogen Credits</p>
                        </div>
                    </div>

                    {/* Middle: Nav links */}
                    <div className="hidden md:flex space-x-6">
                        <a href="#" className="text-gray-700 hover:text-green-600">
                            Home
                        </a>
                        <a href="#" className="text-gray-700 hover:text-green-600">
                            About
                        </a>
                        <a href="#" className="text-gray-700 hover:text-green-600">
                            Features
                        </a>
                        <a href="#" className="text-gray-700 hover:text-green-600">
                            Workflow
                        </a>
                        <a href="#" className="text-gray-700 hover:text-green-600">
                            Contact
                        </a>
                    </div>

                    {/* Right: Login + Register */}
                    <div className="flex items-center space-x-4">
                        <Link to="/login" className="text-gray-700 hover:text-green-600">
                            Login
                        </Link>
                        <Link
                            to="/register"
                            className="bg-green-600 text-white px-4 py-2 rounded-full hover:bg-green-700"
                        >
                            Register Now
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
