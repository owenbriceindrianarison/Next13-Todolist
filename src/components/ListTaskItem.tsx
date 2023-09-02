import { FaCheck, FaTrashCan } from 'react-icons/fa6';
import Icon from './Icon';
import { useAppDispatch } from '@/redux/hooks';
import { twMerge } from 'tailwind-merge';
import { Task } from '@prisma/client';
import { completeTaskAsync, removeTaskAsync } from '@/redux/task/taskThunk';

interface ListTaskItemProps {
  task: Task;
}

export default function ListTaskItem({ task }: ListTaskItemProps) {
  const dispatch = useAppDispatch();

  if (!task) return null;

  return (
    <li className='pb-3 sm:pb-4'>
      <div className='flex items-center space-x-4'>
        <div className='flex-1 min-w-0'>
          <p
            className={twMerge(
              'text-sm font-medium text-gray-900 truncate dark:text-white',
              task.status === 'COMPLETED' && 'dark:text-gray-400'
            )}
          >
            {task.name.toUpperCase()}
          </p>
          <p className='text-sm text-gray-500 truncate dark:text-gray-400'>
            {task.status.charAt(0).toUpperCase() +
              task.status.slice(1).toLowerCase()}
          </p>
        </div>
        <div className='flex flex-row items-center gap-4 justify-center'>
          {task.status !== 'COMPLETED' && (
            <Icon onClick={() => dispatch(completeTaskAsync(task.id!))}>
              <FaCheck className='text-green-600' />
            </Icon>
          )}

          <Icon onClick={() => dispatch(removeTaskAsync(task.id!))}>
            <FaTrashCan
              className={twMerge(
                'text-red-700',
                task.status === 'COMPLETED' && 'dark:text-gray-400'
              )}
            />
          </Icon>
        </div>
      </div>
    </li>
  );
}

// hover: opacity - 80;
// transition
