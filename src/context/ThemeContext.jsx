import React, { createContext, useState, useEffect } from 'react'

export const ThemeContext = createContext()

export function ThemeProvider({ children }) {
    const [isDark, setIsDark] = useState(true)

    // Load theme preference from localStorage
    useEffect(() => {
        const savedTheme = localStorage.getItem('portfolio-theme')
        if (savedTheme) {
            setIsDark(savedTheme === 'dark')
        } else {
            // Check system preference
            const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
            setIsDark(prefersDark)
        }
    }, [])

    // Apply theme to document
    useEffect(() => {
        const root = document.documentElement
        if (isDark) {
            root.style.colorScheme = 'dark'
            document.body.style.backgroundColor = '#0a0e27'
            document.body.style.color = '#fff'
        } else {
            root.style.colorScheme = 'light'
            document.body.style.backgroundColor = '#ffffff'
            document.body.style.color = '#1a1a2e'
        }
        localStorage.setItem('portfolio-theme', isDark ? 'dark' : 'light')
    }, [isDark])

    const toggleTheme = () => setIsDark(!isDark)

    const theme = {
        isDark,
        toggleTheme,
        colors: isDark
            ? {
                bg: '#0a0e27',
                bgSecondary: '#1a1f3a',
                text: '#fff',
                textSecondary: 'rgba(255,255,255,0.7)',
                accent: '#00ffc8',
                accentSecondary: '#00c8ff',
                border: 'rgba(0,255,200,0.1)',
                cardBg: 'rgba(255,255,255,0.05)',
                shadow: '0 0 20px rgba(0,255,200,0.1)',
            }
            : {
                bg: '#ffffff',
                bgSecondary: '#f8f8fb',
                text: '#1a1a2e',
                textSecondary: 'rgba(26,26,46,0.7)',
                accent: '#0066FF',
                accentSecondary: '#00a878',
                border: 'rgba(0,102,204,0.15)',
                cardBg: 'rgba(0,102,204,0.05)',
                shadow: '0 4px 15px rgba(0,102,204,0.12)',
            },
    }

    return <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
}

export function useTheme() {
    const context = React.useContext(ThemeContext)
    if (!context) {
        throw new Error('useTheme must be used within ThemeProvider')
    }
    return context
}
