import { Card } from "./ui/card";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "./ui/dialog";
import { Button } from "./ui/button";

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

const DataTable = ({ data, audit = false, onAuditAction }) => {
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
        metadata: "10%",
        audit: "15%",
        default: `${40 / (columns.length - 3)}%`,
    };

    return (
        <Card className="m-5 w-[90%] p-6 overflow-x-auto">
            {/* Table Header */}
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
                        {audit && (
                            <th
                                className="pb-3 text-sm font-medium text-gray-600 capitalize"
                                style={{ width: columnWidths.audit }}
                            >
                                Actions
                            </th>
                        )}
                    </tr>
                </thead>
            </table>

            {/* Table Body */}
            <div className="max-h-64 overflow-y-auto">
                <table className="w-full table-fixed border-collapse">
                    <tbody>
                        {data.map((row) => (
                            <tr key={row.id} className="border-b last:border-none">
                                {columns.map((col) => (
                                    <td
                                        key={col}
                                        className="py-3 text-sm truncate align-middle"
                                        style={{
                                            width: columnWidths[col] || columnWidths.default,
                                            maxWidth: columnWidths[col] || columnWidths.default,
                                        }}
                                    >
                                        {col === "status" ? (
                                            <span
                                                className={`max-w-22 flex justify-center ${statusStyles[row[col]]}`}
                                            >
                                                {statusLabels[row[col]]}
                                            </span>
                                        ) : col === "metadata" ? (
                                            <Dialog>
                                                <DialogTrigger asChild>
                                                    <Button
                                                        variant="outline"
                                                        size="sm"
                                                        className="text-xs"
                                                    >
                                                        View
                                                    </Button>
                                                </DialogTrigger>
                                                <DialogContent className="max-w-lg">
                                                    <DialogHeader>
                                                        <DialogTitle>Metadata</DialogTitle>
                                                    </DialogHeader>
                                                    <div className="bg-gray-100 p-3 rounded max-h-80 overflow-y-auto text-xs font-mono whitespace-pre-wrap">
                                                        {(() => {
                                                            try {
                                                                const parsed = JSON.parse(row[col] || "{}");
                                                                return Object.entries(parsed).map(([key, value]) => (
                                                                    <div key={key} className="mb-1 text-base">
                                                                        <span className="text-blue-600 font-medium">{key}:</span>{" "}
                                                                        <span className="text-gray-800">
                                                                            {typeof value === "object"
                                                                                ? JSON.stringify(value, null, 2)
                                                                                : String(value)}
                                                                        </span>
                                                                    </div>
                                                                ));
                                                            } catch {
                                                                return <div className="text-red-600">Invalid JSON</div>;
                                                            }
                                                        })()}
                                                    </div>
                                                </DialogContent>
                                            </Dialog>

                                        ) : (
                                            <span
                                                className={col === "amount" ? "font-semibold" : "block truncate"}
                                                title={row[col]}
                                            >
                                                {row[col]}
                                            </span>
                                        )}
                                    </td>
                                ))}

                                {/* ✅ Actions column inside row */}
                                {audit && (
                                    <td
                                        className="py-3 text-sm align-middle text-center"
                                        style={{ width: columnWidths.audit }}
                                    >
                                        <div className="inline-flex gap-2">
                                            <Button
                                                size="sm"
                                                variant="default"
                                                onClick={() => onAuditAction?.(row, "accept")}
                                            >
                                                Accept
                                            </Button>
                                            <Button
                                                size="sm"
                                                variant="destructive"
                                                onClick={() => onAuditAction?.(row, "reject")}
                                            >
                                                Reject
                                            </Button>
                                        </div>
                                    </td>
                                )}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </Card>
    );
};

export default DataTable;
