import { RxCross2 } from "react-icons/rx";
import { createPortal } from "react-dom";

const Modal = ({ isOpen, onClose, children }) => {
  return createPortal(
    <>
      {isOpen && (
        <>
          <div className="relative z-50 m-auto min-h-[200px] max-w-[80%] bg-white p-4">
            <div className="flex justify-end">
              <RxCross2 onClick={onClose} className="cursor-pointer text-2xl" />
            </div>
            {children}
          </div>
          <div
            onClick={onClose}
            className="absolute top-0 z-40 h-screen w-screen backdrop-blur"
          />
        </>
      )}
    </>,
    document.getElementById("modal-root")
  );
};

export default Modal;
