import { Card } from "./ui/card";

const statusStyles = {
    PENDING: "bg-gray-700 text-white px-3 py-1 rounded-full text-sm flex items-center gap-1",
    TRANSFERRED_ISSUED: "bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm flex items-center gap-1",
    TRANSFERRED: "bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm flex items-center gap-1",
    REJECTED: "bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm flex items-center gap-1",
};

const statusLabels = {
    PENDING: "Pending",
    TRANSFERRED_ISSUED: "Approved",
    TRANSFERRED: "Approved",
    REJECTED: "Rejected",
};

const DataTable = ({ data }) => {
    if (!data || data.length === 0) {
        return (
            <Card className="m-5 w-[95%] p-6">
                <p className="text-gray-500">No records available</p>
            </Card>
        );
    }

    const columns = Object.keys(data[0]).filter((key) => key !== "id");

    const columnWidths = {
        amount: "8%",
        status: "12%",
        txnHash: "40%",
        default: `${40 / (columns.length - 3)}%`,
    };

    return (
        <Card className="m-5 w-[90%] p-6 overflow-x-auto">
            <table className="w-full table-fixed border-collapse">
                <thead>
                    <tr className="text-left border-b">
                        {columns.map((col) => (
                            <th
                                key={col}
                                className="pb-3 text-sm font-medium text-gray-600 capitalize"
                                style={{ width: columnWidths[col] || columnWidths.default }}
                            >
                                {col}
                            </th>
                        ))}
                    </tr>
                </thead>
            </table>

            <div className="max-h-64 overflow-y-auto">
                <table className="w-full table-fixed border-collapse">
                    <tbody>
                        {data.map((row) => (
                            <tr key={row.id} className="border-b last:border-none">
                                {columns.map((col) => (
                                    <td
                                        key={col}
                                        className="py-3 text-sm truncate"
                                        style={{
                                            width: columnWidths[col] || columnWidths.default,
                                            maxWidth: columnWidths[col] || columnWidths.default
                                        }}
                                    >
                                        {col === "status" ? (
                                            <span
                                                className={`max-w-22 flex justify-center ${statusStyles[row[col]]}`}
                                            >
                                                {statusLabels[row[col]]}
                                            </span>
                                        ) : (
                                            <span
                                                className={
                                                    col === "amount" ? "font-semibold" : "block truncate"
                                                }
                                                title={row[col]}
                                            >
                                                {row[col]}
                                            </span>
                                        )}
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </Card>
    );
};

export default DataTable;
