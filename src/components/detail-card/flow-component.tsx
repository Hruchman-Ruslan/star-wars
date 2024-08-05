"use client";

import { useState, useCallback } from "react";

import {
  ReactFlow,
  Edge,
  Node,
  Controls,
  Background,
  BackgroundVariant,
  applyEdgeChanges,
  applyNodeChanges,
  OnNodesChange,
  OnEdgesChange,
} from "@xyflow/react";

import "@xyflow/react/dist/style.css";

import CustomNode from "./custom-node";

interface FlowProps {
  initialNodes: Node[];
  initialEdges: Edge[];
}

// Component for rendering the flow diagram with interactive nodes and edges
export default function FlowComponent({
  initialNodes,
  initialEdges,
}: FlowProps) {
  const [nodes, setNodes] = useState(initialNodes);
  const [edges, setEdges] = useState(initialEdges);

  // Callback function to handle node changes
  const onNodesChange: OnNodesChange = useCallback(
    (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
    []
  );

  // Callback function to handle edge changes
  const onEdgesChange: OnEdgesChange = useCallback(
    (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
    []
  );

  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <ReactFlow
        nodes={nodes} // List of nodes to display in the flow diagram
        onNodesChange={onNodesChange} // Callback to handle node changes (e.g., drag and drop)
        edges={edges} // List of edges connecting the nodes
        onEdgesChange={onEdgesChange} // Callback to handle edge changes (e.g., connecting/disconnecting)
        fitView // Automatically fit the view to show all nodes and edges
        nodeTypes={{ custom: CustomNode }} // Customized component
      >
        {/*  Controls for zooming and panning */}
        <Controls />

        {/* Background with dotted pattern */}
        <Background variant={BackgroundVariant.Dots} gap={12} size={1} />
      </ReactFlow>
    </div>
  );
}
