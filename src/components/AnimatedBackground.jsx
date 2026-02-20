import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useTheme } from '../context/ThemeContext'

export default function AnimatedBackground() {
    const { isDark } = useTheme()
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePos({ x: e.clientX, y: e.clientY })
        }
        window.addEventListener('mousemove', handleMouseMove)
        return () => window.removeEventListener('mousemove', handleMouseMove)
    }, [])

    const darkOrbs = [
        { id: 1, size: 300, top: '10%', left: '5%', duration: 20, delay: 0, color: 'rgba(0, 255, 200, 0.15)' },
        { id: 2, size: 250, top: '70%', left: '80%', duration: 25, delay: 2, color: 'rgba(0, 200, 255, 0.12)' },
        { id: 3, size: 200, top: '40%', left: '70%', duration: 30, delay: 4, color: 'rgba(0, 255, 150, 0.1)' },
        { id: 4, size: 280, top: '15%', left: '75%', duration: 28, delay: 1, color: 'rgba(0, 255, 200, 0.12)' },
        { id: 5, size: 220, top: '60%', left: '10%', duration: 32, delay: 3, color: 'rgba(0, 150, 255, 0.08)' },
    ]

    const lightOrbs = [
        { id: 1, size: 300, top: '10%', left: '5%', duration: 20, delay: 0, color: 'rgba(0, 102, 204, 0.15)' },
        { id: 2, size: 250, top: '70%', left: '80%', duration: 25, delay: 2, color: 'rgba(0, 168, 120, 0.12)' },
        { id: 3, size: 200, top: '40%', left: '70%', duration: 30, delay: 4, color: 'rgba(0, 102, 204, 0.1)' },
        { id: 4, size: 280, top: '15%', left: '75%', duration: 28, delay: 1, color: 'rgba(0, 102, 204, 0.12)' },
        { id: 5, size: 220, top: '60%', left: '10%', duration: 32, delay: 3, color: 'rgba(0, 168, 120, 0.1)' },
    ]

    const orbs = isDark ? darkOrbs : lightOrbs

    const bgGradient = isDark
        ? [
            'linear-gradient(135deg, #0a0e27 0%, #1a1f3a 50%, #0f1428 100%)',
            'linear-gradient(225deg, #0f1428 0%, #1a1f3a 50%, #0a0e27 100%)',
            'linear-gradient(135deg, #0a0e27 0%, #1a1f3a 50%, #0f1428 100%)',
        ]
        : [
            'linear-gradient(135deg, #ffffff 0%, #f8f8fb 50%, #f0f2ff 100%)',
            'linear-gradient(225deg, #f0f2ff 0%, #f8f8fb 50%, #ffffff 100%)',
            'linear-gradient(135deg, #ffffff 0%, #f8f8fb 50%, #f0f2ff 100%)',
        ]

    const gridColor = isDark ? 'rgba(0, 255, 200, 0.05)' : 'rgba(0, 102, 204, 0.1)'
    const glowColor = isDark ? 'rgba(0, 255, 200, 0.1)' : 'rgba(0, 102, 204, 0.12)'
    const cornerColors = isDark
        ? [
            'rgba(0, 255, 200, 0.05)',
            'rgba(0, 200, 255, 0.05)',
            'rgba(0, 150, 255, 0.04)',
            'rgba(0, 255, 200, 0.04)',
        ]
        : [
            'rgba(0, 102, 204, 0.12)',
            'rgba(0, 168, 120, 0.12)',
            'rgba(0, 102, 204, 0.1)',
            'rgba(0, 168, 120, 0.1)',
        ]

    return (
        <div
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: -1,
                overflow: 'hidden',
                pointerEvents: 'none',
            }}
        >
            {/* Animated background gradient */}
            <motion.div
                animate={{
                    background: bgGradient,
                }}
                transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: 'easeInOut',
                }}
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    zIndex: -2,
                }}
            />

            {/* Animated floating orbs */}
            {orbs.map((orb) => (
                <motion.div
                    key={orb.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 2, delay: orb.delay }}
                    style={{
                        position: 'absolute',
                        top: orb.top,
                        left: orb.left,
                        width: orb.size,
                        height: orb.size,
                        borderRadius: '50%',
                        background: orb.color,
                        filter: 'blur(90px)',
                        zIndex: -1,
                    }}
                >
                    <motion.div
                        animate={{
                            x: [0, 120, -80, 60, 0],
                            y: [0, -100, 80, -40, 0],
                            scale: [1, 1.1, 0.9, 1.05, 1],
                        }}
                        transition={{
                            duration: orb.duration,
                            repeat: Infinity,
                            ease: 'easeInOut',
                            delay: orb.delay,
                        }}
                        style={{
                            width: '100%',
                            height: '100%',
                            borderRadius: '50%',
                        }}
                    />
                </motion.div>
            ))}

            {/* Mouse-tracking glow effect */}
            <motion.div
                animate={{
                    x: mousePos.x - 100,
                    y: mousePos.y - 100,
                }}
                transition={{
                    type: 'spring',
                    stiffness: 30,
                    damping: 20,
                }}
                style={{
                    position: 'absolute',
                    width: 200,
                    height: 200,
                    borderRadius: '50%',
                    background: `radial-gradient(circle, ${glowColor} 0%, transparent 70%)`,
                    filter: 'blur(50px)',
                    pointerEvents: 'none',
                    zIndex: -1,
                }}
            />

            {/* Animated grid pattern */}
            <motion.div
                animate={{
                    opacity: [0.03, 0.08, 0.03],
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: 'easeInOut',
                }}
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundImage: `
                        linear-gradient(0deg, transparent 24%, ${gridColor} 25%, ${gridColor} 26%, transparent 27%, transparent 74%, ${gridColor} 75%, ${gridColor} 76%, transparent 77%, transparent),
                        linear-gradient(90deg, transparent 24%, ${gridColor} 25%, ${gridColor} 26%, transparent 27%, transparent 74%, ${gridColor} 75%, ${gridColor} 76%, transparent 77%, transparent)
                    `,
                    backgroundSize: '50px 50px',
                    zIndex: -1,
                }}
            />

            {/* Subtle gradient overlay for depth */}
            <motion.div
                animate={{
                    opacity: [0.5, 0.7, 0.5],
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: 'easeInOut',
                }}
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    background: isDark
                        ? 'radial-gradient(circle at center, transparent 0%, rgba(10, 14, 39, 0.7) 100%)'
                        : 'radial-gradient(circle at center, transparent 0%, rgba(255, 255, 255, 0.4) 100%)',
                    pointerEvents: 'none',
                    zIndex: -1,
                }}
            />

            {/* Corner accent lights */}
            {[
                { top: '0%', left: '0%', color: cornerColors[0] },
                { top: '0%', right: '0%', color: cornerColors[1] },
                { bottom: '0%', left: '0%', color: cornerColors[2] },
                { bottom: '0%', right: '0%', color: cornerColors[3] },
            ].map((corner, i) => (
                <motion.div
                    key={`corner-${i}`}
                    animate={{
                        opacity: [0.3, 0.6, 0.3],
                    }}
                    transition={{
                        duration: 6 + i * 0.5,
                        repeat: Infinity,
                        ease: 'easeInOut',
                    }}
                    style={{
                        position: 'absolute',
                        width: '300px',
                        height: '300px',
                        borderRadius: '50%',
                        background: corner.color,
                        filter: 'blur(80px)',
                        ...corner,
                        zIndex: -1,
                    }}
                />
            ))}
        </div>
    )
}
