'use client';

import * as React from 'react';
import { Card, Button } from '@om/ui';
import { Compass, Info, RefreshCw } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface Node {
  id: string;
  label: string;
  type: string;
  desc: string;
  x: number;
  y: number;
}

interface Edge {
  source: string;
  target: string;
  relation: string;
}

export function GraphPreview() {
  const nodes: Node[] = [
    { id: 'gita', label: 'Bhagavad Gita', type: 'Scripture', desc: 'A 700-verse scripture containing philosophical discourse.', x: 150, y: 150 },
    { id: 'krishna', label: 'Sri Krishna', type: 'Deity', desc: 'Avatar of Vishnu; Arjuna\'s guide and charioteer.', x: 80, y: 70 },
    { id: 'arjuna', label: 'Arjuna', type: 'Person', desc: 'Pandava prince and archer experiencing spiritual crisis.', x: 220, y: 70 },
    { id: 'dharma', label: 'Dharma', type: 'Concept', desc: 'Cosmic duty, order, righteousness and moral law.', x: 60, y: 220 },
    { id: 'karma', label: 'Karma Yoga', type: 'Concept', desc: 'The philosophy of selfless action without attachment.', x: 240, y: 220 },
  ];

  const edges: Edge[] = [
    { source: 'krishna', target: 'gita', relation: 'SPOKEN_BY' },
    { source: 'arjuna', target: 'gita', relation: 'HEARD_BY' },
    { source: 'gita', target: 'dharma', relation: 'TEACHES' },
    { source: 'gita', target: 'karma', relation: 'EXPOUNDS' },
    { source: 'krishna', target: 'arjuna', relation: 'GUIDES' },
  ];

  const [selectedNode, setSelectedNode] = React.useState<Node | null>(nodes[0]);
  const [activeEdges, setActiveEdges] = React.useState<Edge[]>(edges);

  const handleNodeClick = (node: Node) => {
    setSelectedNode(node);
    // Highlight edges connected to the selected node
    const connectedEdges = edges.filter(e => e.source === node.id || e.target === node.id);
    setActiveEdges(connectedEdges);
  };

  const handleReset = () => {
    setSelectedNode(nodes[0]);
    setActiveEdges(edges);
  };

  return (
    <section className="py-20 bg-neutral-gray-100/50 dark:bg-neutral-gray-100/10 border-y border-neutral-gray-300 dark:border-neutral-gray-700">
      <div className="max-w-5xl mx-auto px-4 space-y-12">
        
        {/* Title */}
        <div className="text-center space-y-4">
          <span className="text-xs font-bold uppercase tracking-wider text-secondary-base">
            Ontology Visualization
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-black dark:text-neutral-white">
            Interactive Knowledge Graph
          </h2>
          <p className="max-w-xl mx-auto text-sm text-neutral-gray-500">
            Interactive demonstration mapping relationships between deities, scriptures, events, and cognitive concepts. Click a node to resolve connections.
          </p>
        </div>

        {/* Visualizer Frame */}
        <div className="grid gap-8 md:grid-cols-3 items-stretch">
          
          {/* Graph Interactive Board */}
          <Card className="md:col-span-2 p-6 glass-panel min-h-[350px] flex flex-col justify-between border border-neutral-gray-300 dark:border-neutral-gray-700 relative">
            <div className="flex justify-between items-center z-10">
              <span className="text-xs font-mono text-neutral-gray-500 flex items-center gap-1.5">
                <Compass className="h-4 w-4 text-primary-base animate-pulse" />
                Live Node Mesh Simulator
              </span>
              <Button variant="ghost" size="sm" onClick={handleReset} className="p-1">
                <RefreshCw className="h-3.5 w-3.5" />
              </Button>
            </div>

            {/* SVG Visual Canvas */}
            <div className="flex-1 flex items-center justify-center min-h-[250px] relative overflow-hidden">
              <svg viewBox="0 0 300 300" className="w-full max-w-[280px] h-auto">
                {/* Connecting Lines */}
                {edges.map((edge, idx) => {
                  const srcNode = nodes.find(n => n.id === edge.source);
                  const tgtNode = nodes.find(n => n.id === edge.target);
                  if (!srcNode || !tgtNode) return null;

                  const isActive = activeEdges.some(
                    ae => (ae.source === edge.source && ae.target === edge.target)
                  );

                  return (
                    <g key={idx}>
                      <line
                        x1={srcNode.x}
                        y1={srcNode.y}
                        x2={tgtNode.x}
                        y2={tgtNode.y}
                        stroke={isActive ? 'var(--secondary-base)' : 'var(--neutral-gray-300)'}
                        strokeWidth={isActive ? '1.5' : '0.8'}
                        className="transition-colors duration-300"
                      />
                    </g>
                  );
                })}

                {/* Nodes circles */}
                {nodes.map((node) => {
                  const isSelected = selectedNode?.id === node.id;
                  return (
                    <g
                      key={node.id}
                      className="cursor-pointer"
                      onClick={() => handleNodeClick(node)}
                    >
                      <circle
                        cx={node.x}
                        cy={node.y}
                        r={isSelected ? '22' : '16'}
                        fill={isSelected ? 'var(--secondary-base)' : 'var(--neutral-gray-100)'}
                        stroke={isSelected ? 'var(--secondary-light)' : 'var(--primary-base)'}
                        strokeWidth="1.5"
                        className="transition-all duration-300"
                      />
                      <text
                        x={node.x}
                        y={node.y + 4}
                        textAnchor="middle"
                        className={`text-[8px] font-bold pointer-events-none select-none transition-colors duration-300 ${
                          isSelected ? 'fill-white' : 'fill-neutral-black dark:fill-white'
                        }`}
                      >
                        {node.label.split(' ')[0]}
                      </text>
                    </g>
                  );
                })}
              </svg>
            </div>
          </Card>

          {/* Node Meta Details Card */}
          <div className="flex flex-col">
            <AnimatePresence mode="wait">
              {selectedNode ? (
                <motion.div
                  key={selectedNode.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="flex-1 flex"
                >
                  <Card className="p-6 h-full border border-neutral-gray-300 dark:border-neutral-gray-700 flex flex-col justify-between">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-bold bg-primary-base/10 text-primary-base px-2 py-0.5 rounded uppercase">
                          {selectedNode.type}
                        </span>
                        <Info className="h-4 w-4 text-neutral-gray-500" />
                      </div>
                      <h3 className="text-xl font-bold text-neutral-black dark:text-neutral-white">
                        {selectedNode.label}
                      </h3>
                      <p className="text-xs text-neutral-gray-500 leading-relaxed">
                        {selectedNode.desc}
                      </p>
                    </div>

                    <div className="border-t border-neutral-gray-300 dark:border-neutral-gray-700 pt-4 mt-6">
                      <span className="text-[10px] font-bold text-neutral-gray-500 uppercase tracking-wider block mb-2">
                        Active Connections
                      </span>
                      <div className="space-y-1.5">
                        {activeEdges
                          .filter(e => e.source === selectedNode.id || e.target === selectedNode.id)
                          .map((edge, idx) => {
                            const otherId = edge.source === selectedNode.id ? edge.target : edge.source;
                            const otherLabel = nodes.find(n => n.id === otherId)?.label || otherId;
                            return (
                              <div key={idx} className="flex justify-between items-center text-xs">
                                <span className="font-semibold text-secondary-dark">{edge.relation}</span>
                                <span className="text-neutral-gray-500">{otherLabel}</span>
                              </div>
                            );
                          })}
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
