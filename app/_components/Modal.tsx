import React, { useEffect, useRef, ReactNode, HTMLAttributes } from "react";
import { useModal } from "./context/ModalContext";


interface ModalProps extends HTMLAttributes<HTMLDivElement> {
    children: ReactNode;
}

const Modal = ({ children, className, ...props }: ModalProps) => {
    const { showModal, toggleModal } = useModal();
    const modalRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleEscKeyPress = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                toggleModal(undefined);
            }
        };

        if (showModal) {
            document.body.style.overflow = "hidden";
            document.addEventListener("keydown", handleEscKeyPress);
        }

        return () => {
            document.body.style.overflow = "auto";
            document.removeEventListener("keydown", handleEscKeyPress);
        };
    }, [showModal, toggleModal]);

    if (!showModal) return null;

    return (
        <div
            ref={modalRef}
            onClick={(event) => {
                if (modalRef.current && modalRef.current.contains(event.target as Node)) {
                    toggleModal(undefined);
                }
            }}
            className={`fixed z-[100] inset-0 min-h-dvh w-full flex items-center justify-center ${className}`}
            {...props}
        >
            <div
                onClick={(event) => event.stopPropagation()}
                className="py-3 w-full lg:max-w-[70%] flex flex-col items-center justify-center px-2"
            >
                {children}
            </div>
        </div>
    );
};

export default Modal;
