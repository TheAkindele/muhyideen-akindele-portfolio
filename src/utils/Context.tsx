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
        const getTheme = localStorage.getItem('Theme');
        console.log("local storage theme==", getTheme)
        if (getTheme === 'dark') setThemeState(true);
      }, [])
    
    useEffect(() => {
        // setThemeState(!themeState);
        if (themeState) {
            console.log("what is theme???? ", themeState)
            localStorage.setItem('Theme', 'dark');
            document.body.classList.add('dark-mode');
        } 
        else {
            localStorage.setItem('Theme', 'light');
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
