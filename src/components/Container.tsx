interface ContainerProps {
  children: React.ReactNode;
}

export default function Container({ children }: ContainerProps) {
  return <div className='p-3 sm:w-full md:w-1/3 m-auto'>{children}</div>;
}
