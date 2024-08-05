import { Handle, Position } from "@xyflow/react";

interface CustomNodeProps {
  data: {
    type: "hero" | "film" | "starship";
    label: string;
    details?: string;
  };
}

// Custom component for rendering nodes with specific styles and handles
export default function CustomNode({ data }: CustomNodeProps) {
  // Function to determine styles based on the node type
  const getTypeStyles = () => {
    switch (data.type) {
      case "hero":
        return "bg-blue-500 text-white"; // Styles for hero nodes
      case "film":
        return "bg-orange-500 text-white"; // Styles for film nodes
      case "starship":
        return "bg-gray-700 text-white"; // Styles for starship nodes
      default:
        return ""; // Default styles (if any)
    }
  };

  return (
    <div
      className={`px-4 py-2 shadow-md rounded-md border-4 ${getTypeStyles()}`}
    >
      <p className="font-semibold text-lg">{data.label}</p>
      {data.details && <p className="text-sm mt-1 italic">{data.details}</p>}

      {/* Handle for connecting nodes (input) */}
      <Handle
        type="target"
        position={Position.Top}
        className="w-16 h-16 bg-teal-900 rounded-full border border-white"
      />
      {/* Handle for connecting nodes (output) */}
      <Handle
        type="source"
        position={Position.Bottom}
        className="w-16 h-16 bg-teal-600 rounded-full border border-white"
      />
    </div>
  );
}
