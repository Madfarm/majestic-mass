import { useState, useEffect } from "react"
import './ThemeToggle.css'


export default function ThemeToggle() {
    //For client/server mismatch
    const [isMounted, setIsMounted] = useState(false);

    //Turning Theme into state and toggling it
    const [theme, setTheme] = useState('light');
    const toggleTheme = () => {
        if (theme === 'light') {
            setTheme('dark');
        } else {
            setTheme('light');
        }
    }

    //Whenever theme state changes, document.body's class does too
    useEffect(() => {
        document.body.className = theme;
    }, [theme])

    //Ensure component is mounted
    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) {
        return null;
    }

    return (
        <>
        <input type="checkbox" id="themebtn" onClick={toggleTheme} />
        <label id="theme-label"htmlFor="themebtn"></label>
        </>

    )
}