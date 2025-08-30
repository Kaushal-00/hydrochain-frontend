import { Card } from "./ui/card";

const IoTDataFeedCard = ({
    date,
    hydrogenProduced,
    purity,
    electricityConsumed,
    electrolyzerEfficiency,
    deviceId,
    onGenerate,
}) => {
    return (
        <Card className="m-5 w-[47.5%] p-6">
            {/* Title */}
            <div className="mb-4">
                <h2 className="text-xl font-bold flex items-center gap-2">
                    ⚙️ IoT-based Data Feed
                </h2>
                <p className="text-sm text-gray-500">For verification by auditor</p>
            </div>

            {/* Form Grid */}
            <div className="grid grid-cols-2 gap-6">
                <div>
                    <label className="block text-sm font-medium">Date</label>
                    <input
                        type="text"
                        value={date}
                        readOnly
                        className="w-full mt-1 p-2 border rounded-md bg-gray-50"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium">Hydrogen Produced (kg)</label>
                    <input
                        type="number"
                        value={hydrogenProduced}
                        readOnly
                        className="w-full mt-1 p-2 border rounded-md bg-gray-50"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium">Purity (%)</label>
                    <input
                        type="number"
                        value={purity}
                        readOnly
                        className="w-full mt-1 p-2 border rounded-md bg-gray-50"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium">Electricity Consumed (kWh)</label>
                    <input
                        type="number"
                        value={electricityConsumed}
                        readOnly
                        className="w-full mt-1 p-2 border rounded-md bg-gray-50"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium">Electrolyzer Efficiency (%)</label>
                    <input
                        type="number"
                        value={electrolyzerEfficiency}
                        readOnly
                        className="w-full mt-1 p-2 border rounded-md bg-gray-50"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium">Device ID</label>
                    <input
                        type="text"
                        value={deviceId}
                        readOnly
                        className="w-full mt-1 p-2 border rounded-md bg-gray-50"
                    />
                </div>
            </div>

            {/* Button */}
            <div className="mt-6">
                <button
                    onClick={onGenerate}
                    className="cursor-pointer w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition"
                >
                    Generate Credits
                </button>
            </div>
        </Card>
    );
};

export default IoTDataFeedCard;
