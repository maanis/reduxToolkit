import { createContext } from "react";

export const HomeContext = createContext();

export const HomeProvider = ({ children }) => {
    const name = 'Manish Jha'
    return <HomeContext.Provider value={{name}}>
        {children}
    </HomeContext.Provider>
}