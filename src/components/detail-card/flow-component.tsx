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

export default function FlowComponent({
  initialNodes,
  initialEdges,
}: FlowProps) {
  const [nodes, setNodes] = useState(initialNodes);
  const [edges, setEdges] = useState(initialEdges);

  const onNodesChange: OnNodesChange = useCallback(
    (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
    []
  );

  const onEdgesChange: OnEdgesChange = useCallback(
    (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
    []
  );

  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <ReactFlow
        nodes={nodes}
        onNodesChange={onNodesChange}
        edges={edges}
        onEdgesChange={onEdgesChange}
        fitView
        nodeTypes={{ custom: CustomNode }}
      >
        <Controls />
        <Background variant={BackgroundVariant.Dots} gap={12} size={1} />
      </ReactFlow>
    </div>
  );
}
