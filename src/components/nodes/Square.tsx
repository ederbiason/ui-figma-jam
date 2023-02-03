import { NodeResizer } from "@reactflow/node-resizer";
import { NodeProps, Handle, Position, NodeToolbar } from "reactflow";
import { Trash, Copy, ArrowsOutSimple } from 'phosphor-react';

import '@reactflow/node-resizer/dist/style.css';

export function Square({ selected, data }: NodeProps) {
    return (
        <div
            className="bg-violet-500 rounded w-full h-full min-w-[200px] min-h-[200px]"
        >
            <NodeResizer
                minWidth={200}
                minHeight={200}
                isVisible={selected}
                lineClassName="border-blue-400"
                handleClassName="h-3 w-3 bg-white border-2 rounded border-blue-400"
            />

            <Handle
                id='right'
                className="-right-5 w-3 h-3 bg-blue-400/80"
                type="source"
                position={Position.Right}
            />

            <Handle
                id='left'
                className="-left-5 w-3 h-3 bg-blue-400/80"
                type="source"
                position={Position.Left}
            />

            <Handle
                id='top'
                className="-top-5 w-3 h-3 bg-blue-400/80"
                type="source"
                position={Position.Top}
            />

            <Handle
                id='bottom'
                className="-bottom-5 w-3 h-3 bg-blue-400/80"
                type="source"
                position={Position.Bottom}
            />

            <NodeToolbar 
                isVisible={data.toolbarVisible} 
                position={data.toolbarPosition}
                className="flex gap-5"
            >
                <button className="hover:text-violet-600">
                    <Trash />
                </button>

                <button className="hover:text-violet-600">
                    <Copy />
                </button>

                <button className="hover:text-violet-600">
                    <ArrowsOutSimple />
                </button>
            </NodeToolbar>
            <div style={{ padding: '10px 20px' }}>{data.label}</div>
        </div>
    )
}