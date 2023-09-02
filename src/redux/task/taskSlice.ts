import { Task } from '@prisma/client';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface TaskState {
  items: Task[];
  isLoadingTask: boolean;
  isSubmitTask: boolean;
}

const initialState: TaskState = {
  items: [],
  isLoadingTask: false,
  isSubmitTask: false,
};

export const taskSlice = createSlice({
  name: 'task',
  initialState,
  reducers: {
    loadTasks: (state, action: PayloadAction<{ tasks: Task[] }>) => {
      state.items = [...action.payload.tasks];
    },

    addTask: (state, action: PayloadAction<Task>) => {
      state.items.unshift(action.payload);
    },

    removeTask: (state, action: PayloadAction<string>) => {
      state.items = [...state.items.filter((x) => x.id !== action.payload)];
    },

    completeTask: (state, action: PayloadAction<Task>) => {
      state.items = [
        ...state.items.map((task) => {
          if (task.id == action.payload.id) {
            return action.payload;
          }
          return task;
        }),
      ] as Task[];
    },

    setIsLoadingTask: (state, action: PayloadAction<boolean>) => {
      state.isLoadingTask = action.payload;
    },

    setIsSubmitTask: (state, action: PayloadAction<boolean>) => {
      state.isSubmitTask = action.payload;
    },
  },
});

export const {
  addTask,
  loadTasks,
  removeTask,
  completeTask,
  setIsLoadingTask,
  setIsSubmitTask,
} = taskSlice.actions;

export default taskSlice.reducer;
