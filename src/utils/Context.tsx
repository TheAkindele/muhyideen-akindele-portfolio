import React,{ createContext, useState, useEffect, ReactNode } from "react";

export interface childProps {children: ReactNode}

interface contextTypes {
    themeState: boolean;
    themeToggle?: () => void;
}

export const AppContext = createContext<contextTypes>({
    themeState: true,
    themeToggle: () => Function
})

export const Contextprovider = ({children}: childProps) => {
    const [themeState, setThemeState] = useState(true);
    const themeToggle =  () => setThemeState(!themeState) 

    useEffect(() => {
        const getTheme = localStorage.getItem('portfolio-theme');
        if (getTheme === 'dark') setThemeState(true);
      }, [])
    
    useEffect(() => {
        if (themeState) {
            localStorage.setItem('portfolio-theme', 'dark');
            document.body.classList.add('dark-mode');
        } 
        else {
            localStorage.setItem('portfolio-theme', 'light');
            document.body.classList.remove('dark-mode');
        }
    }, [themeState])

    return (
        <AppContext.Provider value={{themeState, themeToggle}}>
        {children}
    </AppContext.Provider>
    )
} 

// export const AppThemeContext = createContext<contextTypes>({themeState: false})
