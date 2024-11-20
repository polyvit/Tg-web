import { ReactNode } from "react";

interface IModalProps {
  children: ReactNode;
  setIsOpen(x: boolean): void;
}

export default function AddFormModal({ children, setIsOpen }: IModalProps) {
  return (
    <div className="h-[110vh] top-0 left-[-5px] fixed w-[110vw] z-9992 bg-bg-gray">
      <div className="bg-white z-9994 w-[500px] h-[400px] bottom-0 left-0 top-0 right-0 absolute m-auto rounded-[20px] p-[10px]">
        <div className="h-full truncate">
          <button
            className="absolute right-2.5	text-5xl"
            onClick={() => setIsOpen(false)}
          >
            &times;
          </button>
          {children}
        </div>
      </div>
    </div>
  );
}
