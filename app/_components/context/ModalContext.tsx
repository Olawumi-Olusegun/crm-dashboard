"use client"
import React, {
    createContext,
    useContext,
    useState,
    ReactNode,
} from "react";

type ModalType = "Agent" | "Goal" | undefined

interface ModalContextType {
    showModal: ModalType;
    toggleModal: (modalType: ModalType) => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const ModalProvider = ({ children }: { children: ReactNode }) => {
    const [showModal, setShowModal] = useState<ModalType>(undefined);


    const toggleModal = (modalType: ModalType) => {
        setShowModal((prevState) => prevState === modalType ? undefined : modalType)
    }

    return (
        <ModalContext.Provider value={{ showModal, toggleModal }}>
            {children}
        </ModalContext.Provider>
    );
};

export const useModal = (): ModalContextType => {
    const context = useContext(ModalContext);
    if (!context) {
        throw new Error("useModal must be used within a ModalProvider");
    }
    return context;
};
