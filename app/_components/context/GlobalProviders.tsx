import React, { ReactNode } from 'react'
import { ModalProvider } from './ModalContext'
import { SidebarProvider } from './SidebarContext'

const GlobalProviders = ({ children }: { children: ReactNode }) => {
    return (
        <>
            <SidebarProvider>
                <ModalProvider>
                    {children}
                </ModalProvider>
            </SidebarProvider>

        </>
    )
}

export default GlobalProviders