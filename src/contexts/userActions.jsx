import { createContext, useContext, useState } from "react";

const UserContext = createContext()

export const useActions = () => useContext(UserContext)

export const ActionsProvider = ({ children }) => {
    const [menuIsOpen, setMenuIsOpen] = useState(false)

    const handleOpeningModal = () => {
        setMenuIsOpen(!menuIsOpen)
    }

    const value = {
        handleOpeningModal,
        menuIsOpen
    }
    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}