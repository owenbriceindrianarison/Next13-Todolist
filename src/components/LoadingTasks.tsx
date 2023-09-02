export default function LoadindTask() {
  return (
    <div
      role='status'
      className='space-y-8 animate-pulse md:space-y-0 md:space-x-8 md:flex md:items-center'
    >
      <div className='w-full'>
        <div className='h-5 bg-gray-200 rounded-md dark:bg-gray-700 mb-2.5'></div>
        <div className='h-5 bg-gray-200 rounded-md dark:bg-gray-700 mb-2.5'></div>
        <div className='h-5 bg-gray-200 rounded-md dark:bg-gray-700 mb-2.5'></div>
        <div className='h-5 bg-gray-200 rounded-md dark:bg-gray-700 mb-2.5'></div>
        <div className='h-5 bg-gray-200 rounded-md dark:bg-gray-700'></div>
      </div>
    </div>
  );
}
