import React from 'react'
import { motion } from 'framer-motion'
import { useTheme } from '../context/ThemeContext'

export default function AnimatedBackground() {
    const { isDark, motionAllowed } = useTheme()

    const blobPalette = isDark
        ? ['rgba(0, 226, 255, 0.22)', 'rgba(41, 166, 255, 0.2)', 'rgba(0, 110, 255, 0.14)']
        : ['rgba(5, 216, 243, 0.2)', 'rgba(45, 162, 255, 0.18)', 'rgba(0, 95, 225, 0.14)']

    return (
        <div className="background-layer" aria-hidden="true">
            <div className="noise-overlay" />

            {blobPalette.map((color, index) => (
                <motion.div
                    key={color}
                    className="ambient-blob"
                    initial={{ opacity: 0.6 }}
                    animate={
                        motionAllowed
                            ? {
                                x: [0, 40 - index * 18, -30 + index * 16, 0],
                                y: [0, -45 + index * 10, 25 - index * 8, 0],
                                scale: [1, 1.1, 0.94, 1],
                            }
                            : { x: 0, y: 0, scale: 1 }
                    }
                    transition={{
                        duration: 24 + index * 4,
                        ease: 'easeInOut',
                        repeat: Infinity,
                    }}
                    style={{
                        background: color,
                        width: `${320 + index * 120}px`,
                        height: `${320 + index * 120}px`,
                        top: `${8 + index * 24}%`,
                        left: `${index === 1 ? 55 : index === 2 ? 12 : 3}%`,
                    }}
                />
            ))}
        </div>
    )
}
