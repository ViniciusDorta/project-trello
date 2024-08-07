import { useState } from "react";
import { inicialColumns } from '../../utils/data';
import { DragDropContext, Draggable, DropResult, Droppable } from 'react-beautiful-dnd';
import { Box, Paper, TextField } from "@mui/material";

export default function Kanban()
{
    const [columns, setColumns] = useState(inicialColumns);

    function handleDragEnd(result: DropResult)
    {
        // console.log(result);
        // var sourceColumnItems = columns[0].items;
        let sourceColumnItems: any = [];
        var destinationColumnItems: any = [];
        var draggedItem = {};

        var sourceColumnId: number = 0;
        var destinationColumnId: number = 0;

        for (var i in columns) {
            if (columns[i].id == result.source.droppableId) {
                sourceColumnItems = columns[i].items;
                sourceColumnId = +i;
            } else if (result.destination && columns[i].id == result.destination.droppableId) {
                destinationColumnItems = columns[i].items;
                destinationColumnId = +i;
            }
        }

        for (var i in sourceColumnItems) {
            if (sourceColumnItems[i].id == result.draggableId) {
                draggedItem = sourceColumnItems[i];
            }
        }
        // Excluí o objeto arrastado.
        var filteredSourceColumnItems = sourceColumnItems.filter((item: any) => item.id != result.draggableId);

        // Adicionar o mesmo na nova posição.
        if (result.destination && result.source.droppableId == result.destination.droppableId) {
            filteredSourceColumnItems.splice(result.destination.index, 0, draggedItem);

            // Mudar o state
            var columnsCopy = JSON.parse(JSON.stringify(columns));
            columnsCopy[sourceColumnId].items = filteredSourceColumnItems;
            setColumns(columnsCopy);
        } else {
            if (result.destination) {
                destinationColumnItems.splice(result.destination.index, 0, draggedItem);
                // Mudar o state
                var columnsCopy = JSON.parse(JSON.stringify(columns));
                columnsCopy[sourceColumnId].items = filteredSourceColumnItems;
                columnsCopy[destinationColumnId].items = destinationColumnItems;
                setColumns(columnsCopy);
            }
        }
    }

    return(
        <Box 
            width="100%" 
            display="flex" 
            height="calc(100vh - 74px)" 
            sx={{ overflowY: 'hidden' }}>
            <DragDropContext onDragEnd={handleDragEnd}>
                {columns.map((column) => (
                    <Box 
                        key={column.id} 
                        style={{ 
                            display: "flex", 
                            alignItems: "center",
                            flexDirection: "column"
                        }}>
                        <Droppable droppableId={`${column.id}`}>
                            {(provided) => (
                                <Box style={{ 
                                    width: 400,
                                    margin: 10,
                                    padding: 10,
                                    borderRadius: 8,
                                    backgroundColor: "#ebebf1",
                                    maxHeight: 'calc(100vh - 100px)',
                                    minHeight: 'calc(100vh - 100px)'
                                }}>
                                    <TextField 
                                        variant="standard"
                                        className="w-full" 
                                        value={column.name}
                                        inputProps={{ style: { fontSize: '1.2rem' } }} />
                                    <Box 
                                        width="100%"
                                        height="calc(100% - 40px)"
                                        sx={{ overflowY: 'auto' }}
                                        ref={provided.innerRef} 
                                        {...provided.droppableProps}>
                                        {column.items.map((item, index) => (
                                            <Draggable 
                                                key={item.id} 
                                                index={index}
                                                draggableId={`${item.id}`}>
                                                {(provided) => (
                                                    <Paper
                                                        elevation={2}
                                                        {...provided.dragHandleProps}
                                                        {...provided.draggableProps}
                                                        ref={provided.innerRef}
                                                        style={{
                                                            height: 40,
                                                            marginTop: 10,
                                                            padding: 5,
                                                            ...provided.draggableProps.style,
                                                        }} > {item.content} </Paper>
                                                )}
                                            </Draggable>
                                        ))}
                                    </Box>
                                </Box>
                            )}
                        </Droppable>
                    </Box>
                ))}
            </DragDropContext>
        </Box>
    );
}