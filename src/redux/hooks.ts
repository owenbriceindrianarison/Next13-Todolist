import { useEffect } from 'react';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import type { RootState, AppDispatch } from './store';
import { getAllTaskAsync } from './task/taskThunk';
import { selectIsLoadingTask, selectTasks } from './task/taskSelectors';

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const useLoadTasks = () => {
  const dispatch = useAppDispatch();
  const tasks = useAppSelector(selectTasks);
  const isLoading = useAppSelector(selectIsLoadingTask);

  useEffect(() => {
    dispatch(getAllTaskAsync());
  }, []);

  return { tasks, isLoading };
};
