import clsx from "clsx";

interface Props extends React.PropsWithChildren {
  onClick?: () => void;
  className?: string;
  isActive?: boolean;
}

const Cell: React.FC<Props> = ({
  onClick,
  className,
  children,
  isActive = false,
}) => {
  return (
    <div
      onClick={!isActive ? onClick : undefined}
      className={clsx(
        "h-9 flex items-center justify-center border-b border-r",
        {
          "cursor-pointer hover:bg-gray-100 active:bg-gray-200":
            !isActive && onClick,
          "font-bold text-white bg-blue-600": isActive,
        },
        className
      )}
    >
      {children}
    </div>
  );
};

export default Cell;
