import { Card } from "./ui/card";

const IoTDataFeedCard = ({ requirements, values = {}, onAction, actionLabel }) => {
  // Convert comma-separated string to array
  const fields = typeof requirements === "string" ? requirements.split(",").map(f => f.trim()) : requirements;

  function getInputType(field, value) {
    if (typeof value === "number") return "number";
    return "text"; // fallback
  }

  return (
    <Card className="m-5 w-[47.5%] p-6">
      {/* Title */}
      <div className="mb-4">
        <h2 className="text-xl font-bold flex items-center gap-2">
          ⚙️ IoT-based Data Feed
        </h2>
        <p className="text-sm text-gray-500">For verification by auditor</p>
      </div>

      {/* Dynamic Form Grid */}
      <div className="grid grid-cols-2 gap-6">
        {fields.map((field) => (
          <div key={field}>
            <label className="block text-sm font-medium">
              {field
                .replace(/([A-Z])/g, " $1") // Add space before capital letters
                .replace(/^./, str => str.toUpperCase())} {/* Capitalize first letter */}
            </label>

            <input
              type={getInputType(field, values[field])}
              value={values[field] || ""}
              readOnly
              className="w-full mt-1 p-2 border rounded-md bg-gray-50"
            />
          </div>
        ))}
      </div>

      {/* Button */}
      {onAction && (
        <div className="mt-6">
          <button
            onClick={onAction}
            className="cursor-pointer w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition"
          >
            {actionLabel || "Submit"}
          </button>
        </div>
      )}
    </Card>
  );
};

export default IoTDataFeedCard;
