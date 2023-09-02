import axios from 'axios';
import { AppThunk } from '../store';
import {
  addTask,
  completeTask,
  loadTasks,
  removeTask,
  setIsLoadingTask,
  setIsSubmitTask,
} from './taskSlice';

export const addTaskAsync =
  (name: string): AppThunk =>
  async (dispatch) => {
    try {
      dispatch(setIsSubmitTask(true));
      const {
        data: { task },
      } = await axios.post('/api/tasks', { name });
      dispatch(addTask(task));
      dispatch(setIsSubmitTask(false));
    } catch (err) {
      console.log({ err });
      dispatch(setIsSubmitTask(false));
    }
  };

export const getAllTaskAsync = (): AppThunk => async (dispatch) => {
  try {
    dispatch(setIsLoadingTask(true));
    const {
      data: { tasks },
    } = await axios.get('/api/tasks');
    dispatch(loadTasks({ tasks }));
    dispatch(setIsLoadingTask(false));
  } catch (err) {
    console.log(err);
    dispatch(setIsLoadingTask(false));
  }
};

export const completeTaskAsync =
  (id: string): AppThunk =>
  async (dispatch) => {
    try {
      const {
        data: { task },
      } = await axios.put('/api/tasks', { id });
      dispatch(completeTask(task));
    } catch (err) {
      console.log(err);
    }
  };

export const removeTaskAsync =
  (id: string): AppThunk =>
  async (dispatch) => {
    try {
      const {
        data: { task },
      } = await axios.delete(`/api/tasks/`, { data: { id } });
      dispatch(removeTask(task.id));
    } catch (err) {
      console.log(err);
    }
  };
