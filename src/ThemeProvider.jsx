import React, { useState, useEffect, createContext } from 'react';
import { ThemeProvider } from '@mui/material';
import { lightTheme, darkTheme } from './Theme';

const ThemeContext = createContext();

const ThemeProviderWrapper = (props) => {
    const storedTheme = localStorage.getItem('theme');
    const [theme, setTheme] = useState(storedTheme || 'light');

    const toggleTheme = () => {
        if (theme === 'light') {
            setTheme('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            setTheme('light');
            localStorage.setItem('theme', 'light');
        }
    };

    const currentTheme = theme === 'light' ? lightTheme : darkTheme;

    useEffect(() => {
        localStorage.setItem('theme', theme);
    }, [theme]);

    <ThemeContext.Provider>
        <ThemeProvider theme={currentTheme}>
            {props.children}
        </ThemeProvider>
    </ThemeContext.Provider>
}

export { ThemeProviderWrapper, ThemeContext };