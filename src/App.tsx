import ReactFlow, { addEdge, Background, Connection, ConnectionMode, Controls, Node, useEdgesState } from 'reactflow';
import { zinc } from 'tailwindcss/colors'
import 'reactflow/dist/style.css';

import { Square } from './components/nodes/Square';
import { useCallback } from 'react';

const NODE_TYPES = {
  square: Square,

}

const INITIAL_NODES = [
  {
    id: crypto.randomUUID(),
    type: 'square',
    position: { 
      x: 200, 
      y: 400 
    },
    data: {

    }
  },

  {
    id: crypto.randomUUID(),
    type: 'square',
    position: { 
      x: 1000, 
      y: 400 
    },
    data: {

    }
  },
] satisfies Node[]

export function App() {
  const [edges, setEdges, onEdgesChange] = useEdgesState([])

  const onConnect = useCallback((connection: Connection) => {
    return setEdges(edges => addEdge(connection, edges))
  }, [])

  return (
    <div className='w-screen h-screen'>
      <ReactFlow
        nodeTypes={NODE_TYPES}
        nodes={INITIAL_NODES}
        connectionMode={ConnectionMode.Loose}
        edges={edges}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
      >
        <Background 
          gap={12}
          size={2}
          color={zinc[200]}
        />

        <Controls />
      </ReactFlow>
    </div>
  )
}
