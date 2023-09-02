'use client';

import { useLoadTasks } from '@/redux/hooks';
import ListTaskItem from './ListTaskItem';
import EmptyList from './EmptyList';
import LoadindTask from './LoadingTasks';

export default function ListTask() {
  const { tasks, isLoading } = useLoadTasks();

  return (
    <div className='mt-5 overflow-y-auto h-96'>
      <div className='p-2'>
        {isLoading ? (
          <LoadindTask />
        ) : tasks?.length > 0 ? (
          <ul className='w-full divide-y divide-gray-200 dark:divide-gray-700'>
            {tasks.map((task) => (
              <ListTaskItem key={task.id} task={task} />
            ))}
          </ul>
        ) : (
          <EmptyList />
        )}
      </div>
    </div>
  );
}
