"use client"
import React, {
    createContext,
    useContext,
    useState,
    ReactNode,
    useEffect,
} from "react";


interface SidebarContext {
    showSidebar: boolean;
    toggleSidebar: () => void;
}

const SidebarContext = createContext<SidebarContext | undefined>(undefined);

export const SidebarProvider = ({ children }: { children: ReactNode }) => {
    const [showSidebar, setShowSidebar] = useState<boolean>(false);


    const toggleSidebar = () => {
        setShowSidebar((prevState) => !prevState)
    }

    useEffect(() => {
        const handleWindowResize = () => {
            if (window !== undefined && window.innerWidth > 20) {
                setShowSidebar(false)
            }
        }
        window.addEventListener("resize", handleWindowResize);

        return () => window.removeEventListener("resize", handleWindowResize);
    }, [])

    return (
        <SidebarContext.Provider value={{ showSidebar, toggleSidebar }}>
            {children}
        </SidebarContext.Provider>
    );
};

export const useSidebar = (): SidebarContext => {
    const context = useContext(SidebarContext);
    if (!context) {
        throw new Error("sidebar context must be used within a SidebarProvider");
    }
    return context;
};
