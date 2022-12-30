import { createSlice } from "@reduxjs/toolkit";
import { Column, Columns, Task } from "../types";
import { v4 as uuidv4 } from "uuid";
import { current } from "./util";

interface InitialState {
  columns: Columns;
}

const col_id = uuidv4();

const initialState: InitialState = {
  columns: [
    {
      id: col_id,
      title: "My First Column",
      tasks: [
        {
          id: uuidv4(),
          description: "Finish Kanban project",
          columnId: col_id,
          status: "open",
          userId: "1234",
        },
      ],
    },
    {
      id: col_id + "1",
      title: "My Second Column",
      tasks: [
        {
          id: "4567",
          description: "Watch 90 day fiance",
          columnId: col_id,
          status: "open",
          userId: "1234",
        },
        {
          id: "45678",
          description: "Listen to Drake",
          columnId: col_id,
          status: "open",
          userId: "1234",
        },
        {
          id: "456789",
          description: "Finish project",
          columnId: col_id,
          status: "open",
          userId: "1234",
        },
      ],
    },
  ],
};

const findColumn = (state: InitialState, columnId: string) =>
  state.columns.find((item) => item.id === columnId);

const findTask = (column: Column, taskId: string) =>
  column.tasks.find((task) => task.id === taskId);

const kanbanSlice = createSlice({
  name: "kanban",
  initialState,
  reducers: {
    createColumn: (state, action: { payload: { newColumn: Column } }) => {
      const { newColumn } = action.payload;

      if (Object.keys(newColumn).length === 2) {
        state.columns.push(newColumn);
      }
    },
    createTask: (
      state,
      action: { payload: { newTask: Task; columnId: string } }
    ) => {
      const { newTask, columnId } = action.payload;

      if (Object.keys(newTask).length > 0 && columnId) {
        const column = findColumn(state, columnId);

        if (column) {
          column.tasks.push(newTask);
        }
      }
    },
    updateTaskIndex: (
      state,
      action: {
        payload: {
          destinationIndex: number;
          sourceIndex: number;
          destinationDroppableId: string;
          sourceDroppableId: string;
        };
      }
    ) => {
      const {
        destinationIndex,
        sourceIndex,
        destinationDroppableId,
        sourceDroppableId,
      } = action.payload;

      let sourceColumn = findColumn(state, sourceDroppableId);
      let destinationColumn = findColumn(state, destinationDroppableId);
      if (sourceColumn && destinationColumn) {
        if (destinationDroppableId === sourceDroppableId) {
          const newTasks = Array.from(sourceColumn.tasks);
          newTasks.splice(sourceIndex, 1);
          newTasks.splice(destinationIndex, 0, sourceColumn.tasks[sourceIndex]);
          sourceColumn.tasks = newTasks;
        } else {
          const destTasks = Array.from(destinationColumn.tasks);
          const sourceTasks = Array.from(sourceColumn.tasks);
          sourceTasks.splice(sourceIndex, 1);
          destTasks.splice(
            destinationIndex,
            0,
            sourceColumn.tasks[sourceIndex]
          );
          sourceColumn.tasks = sourceTasks;
          destinationColumn.tasks = destTasks;
        }
      }
    },
  },
});

export const { createColumn, createTask, updateTaskIndex } =
  kanbanSlice.actions;

export default kanbanSlice.reducer;
