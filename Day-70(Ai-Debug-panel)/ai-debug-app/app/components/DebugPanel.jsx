"use client";

const suggestions = {
  VALIDATION_ERROR: "Please fill all required fields",
  UNKNOWN_ERROR: "Please try again.",
};
const getSuggestion = (type) => {
  return suggestions[type] || "Unknown error occurred.";
};
export default function DebugPanel({ logs = [] }) {
  return (
    <div className="mt-8 p-4 border rounded bg-gray-100">
      <h2 className="text-lg  text-black font-bold mb-3">AI Debug Panel</h2>
      {logs.length === 0 ? (
        <p className="text-green-600">No errors</p>
      ) : (
        logs.map((log, i) => (
          <div key={i} className="mb-2 p-2 bg-white shadow">
            <p className="text-red-500">{log.message}</p>
            <p className="text-sm text-gray-600">{getSuggestion(log.type)}</p>
          </div>
        ))
      )}
    </div>
  );
}
