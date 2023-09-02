interface IconProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export default function Icon({ children, className, onClick }: IconProps) {
  return (
    <div
      onClick={onClick}
      className={`h-6 w-6 flex items-center justify-center cursor-pointer ${className}`}
    >
      {children}
    </div>
  );
}
