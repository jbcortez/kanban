import { createTask, updateTaskIndex } from "../redux/kanbanSlice";
import { Dispatch } from "@reduxjs/toolkit";
import { TASK } from "../enum/kanban";
import { v4 as uuid } from "uuid";

const createTaskHandler = (dispatch: Dispatch, columnId: string) => {
  const newTask = {
    ...TASK,
    id: uuid(),
    description: "New task",
    columnId,
  };
  dispatch(createTask({ newTask, columnId }));
};

const handleDragEnd = (data: any, dispatch: Dispatch) => {
  const { destination, source } = data;

  if (!destination) return;

  if (
    destination.droppableId === source.droppableId &&
    destination.index === source.index
  )
    return;

  if (destination && source) {
    const { index: destinationIndex, droppableId: destinationDroppableId } =
      destination;
    const { index: sourceIndex, droppableId: sourceDroppableId } = source;
    dispatch(
      updateTaskIndex({
        destinationIndex,
        sourceIndex,
        destinationDroppableId,
        sourceDroppableId,
      })
    );
  }
};

export default { createTaskHandler, handleDragEnd };
