import { NodeProps, Handle, Position } from "reactflow";

export function Square(props: NodeProps) {  
    return (
        <div 
            className="bg-violet-500 rounded w-[200px] h-[200px]" 
        >
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
        </div>
    )
}