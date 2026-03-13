import React, { createContext, useContext, useEffect, useMemo, useState } from 'react'

export const ThemeContext = createContext(null)

const getInitialTheme = () => {
    if (typeof window === 'undefined') return true

    const savedTheme = window.localStorage.getItem('portfolio-theme')
    if (savedTheme === 'dark' || savedTheme === 'light') {
        return savedTheme === 'dark'
    }

    return window.matchMedia('(prefers-color-scheme: dark)').matches
}

const darkColors = {
    bg: '#051322',
    bgSecondary: '#0d2741',
    text: '#edf5ff',
    textSecondary: '#afc0d5',
    accent: '#2fd7c2',
    accentSecondary: '#58a9ff',
    border: 'rgba(166, 190, 214, 0.24)',
    cardBg: 'rgba(9, 24, 42, 0.74)',
    shadow: '0 26px 70px rgba(2, 10, 18, 0.34)',
}

const lightColors = {
    bg: '#f2f7ff',
    bgSecondary: '#dceafe',
    text: '#12243a',
    textSecondary: '#4f647a',
    accent: '#0078d4',
    accentSecondary: '#00a6ff',
    border: 'rgba(22, 79, 125, 0.2)',
    cardBg: 'rgba(255, 255, 255, 0.82)',
    shadow: '0 18px 45px rgba(14, 42, 72, 0.16)',
}

export function ThemeProvider({ children }) {
    const [isDark, setIsDark] = useState(getInitialTheme)
    const [motionAllowed, setMotionAllowed] = useState(true)

    useEffect(() => {
        const savedTheme = localStorage.getItem('portfolio-theme')
        const shouldFollowSystem = savedTheme !== 'dark' && savedTheme !== 'light'

        const themeQuery = window.matchMedia('(prefers-color-scheme: dark)')
        const syncSystemTheme = (event) => {
            if (shouldFollowSystem) {
                setIsDark(event.matches)
            }
        }

        if (themeQuery.addEventListener) {
            themeQuery.addEventListener('change', syncSystemTheme)
        } else {
            themeQuery.addListener(syncSystemTheme)
        }

        const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
        const syncMotionPreference = () => setMotionAllowed(!motionQuery.matches)
        syncMotionPreference()

        if (motionQuery.addEventListener) {
            motionQuery.addEventListener('change', syncMotionPreference)
        } else {
            motionQuery.addListener(syncMotionPreference)
        }

        return () => {
            if (themeQuery.removeEventListener) {
                themeQuery.removeEventListener('change', syncSystemTheme)
            } else {
                themeQuery.removeListener(syncSystemTheme)
            }

            if (motionQuery.removeEventListener) {
                motionQuery.removeEventListener('change', syncMotionPreference)
            } else {
                motionQuery.removeListener(syncMotionPreference)
            }
        }
    }, [])

    useEffect(() => {
        const root = document.documentElement
        root.setAttribute('data-theme', isDark ? 'dark' : 'light')
        root.style.colorScheme = isDark ? 'dark' : 'light'
        localStorage.setItem('portfolio-theme', isDark ? 'dark' : 'light')
    }, [isDark])

    const value = useMemo(
        () => ({
            isDark,
            motionAllowed,
            colors: isDark ? darkColors : lightColors,
            toggleTheme: () => setIsDark((current) => !current),
        }),
        [isDark, motionAllowed]
    )

    return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

export function useTheme() {
    const context = useContext(ThemeContext)
    if (!context) {
        throw new Error('useTheme must be used within ThemeProvider')
    }
    return context
}
