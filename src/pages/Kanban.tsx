import { useState } from "react";
import { inicialColumns } from '../utils/data';
import { DragDropContext, Draggable, DropResult, Droppable } from 'react-beautiful-dnd';

export default function Kanban()
{
    const [columns, setColumns] = useState(inicialColumns);

    function handleDragEnd(result: DropResult)
    {

    }

    return(
        <div className="w-full justify-center flex">
            <DragDropContext onDragEnd={handleDragEnd}>
                {columns.map((column) => (
                    <Droppable droppableId={`${column.id}`} key={column.id}>
                        {(provided) => (
                            <div 
                                className="w-1/3 h-auto text-center text-2xl font-semibold flex flex-col p-2 rounded-lg border-2 border-neutral-950"
                                ref={provided.innerRef}
                                {...provided.droppableProps} >

                                <div className="text-white items-center p-2 border border-slate-400 bg-gray-800"> 
                                    {column.name} 
                                </div>

                                {column.items.map((item, index) => (
                                    <Draggable key={item.id} draggableId={`${item.id}`} index={index}>
                                        {(provided) => (
                                            <div
                                                ref={provided.innerRef}
                                                {...provided.draggableProps}
                                                {...provided.dragHandleProps}
                                                style={{...provided.draggableProps.style}}
                                                className="text-lg text-white p-4 my-2 border border-slate-400 bg-gray-600 cursor-pointer" >

                                                {item.content}
                                            </div>
                                        )}
                                    </Draggable>
                                ))}
                            </div>
                        )}
                    </Droppable>
                ))}
            </DragDropContext>
        </div>
    );
}