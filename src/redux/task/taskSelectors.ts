import { RootState } from '../store';

export const selectTasks = (state: RootState) => state.taskSlice.items;

export const selectIsLoadingTask = (state: RootState) =>
  state.taskSlice.isLoadingTask;

export const selectIsSubmitTask = (state: RootState) =>
  state.taskSlice.isSubmitTask;
