import React from "react";
import { ReactFlow, Edge, Node } from "@xyflow/react";
import "@xyflow/react/dist/style.css";

interface FlowProps {
  nodes: Node[];
  edges: Edge[];
}

export default function Flow({ nodes, edges }: FlowProps) {
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <ReactFlow nodes={nodes} edges={edges} />
    </div>
  );
}
