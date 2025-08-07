'use client'

import {motion} from 'framer-motion'

interface HeroAvatarProps {
    initials: string
    className?: string
    size?: 'sm' | 'md' | 'lg'
    showRing?: boolean
}

export default function HeroAvatar({
    initials = 'mazr',
    className = '',
    size = 'lg',
    showRing = true

}: HeroAvatarProps) {

    const sizeClasses =  {
        sm: 'w-20 h-20 text-2xl',
        md: 'w-24 h-24 text-3xl',
        lg: 'w-32 h-32 text-4xl'
    }
    return (
        <motion.div
            initial={{scale: 0, opacity: 0}}
            animate={{scale:1, opacity: 1}}
            transition={{duration: 0.8, ease: "backOut"}}
            className={`relative mx-auto mb-8 ${className}`}
        >
            {/* Avatar Principal */}
            <motion.div
                whileHover={{scale: 1.05}}
                className={`${sizeClasses[size]} relative bg-gradient-to-br from-accent-emerald to-accent-cyan rounded-full flex items-center justify-center shadow-glow cursor-pointer`}
            >
                <span className='font-bold text-bg-primary select-none'>
                    {initials}
                </span>
                {/* Efecto glow interior */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent-emerald/20 to-accent-cyan/20 rounded-full blur-sm" />
            </motion.div>

            {/* Anillo giratorio */}
            {showRing && (
                <>
                    <motion.div
                        className="absolute inset-0 border-2 border-accent-emerald/30 rounded-full"
                        animate={{rotate: 360}}
                        transition={{ duration: 8, repeat: Infinity, ease: "linear"}}
                    />

                    <motion.div
                        className="absolute inset-[-4px] border border-accent-cyan/20 rounded-full"
                        animate={{rotate: -360}}
                        transition={{duration: 12, repeat: Infinity, ease: "linear"}}
                    />
                </>
            )}

            {/* Particulas orbitantes */}
            {[...Array(3)].map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-accent-emerald rounded-full"
                    style={{
                        top: '50%',
                        left: '50%',
                    }}
                    animate={{
                        rotate: 360,
                    }}
                    transition={{
                        duration: 4 + i * 2,
                        repeat: Infinity,
                        ease: "linear",
                        delay: i * 0.5,
                    }}
                >
                    <div
                        className="w-1 h-1 bg-accent-emerald rounded-full shadow-glow"
                        style={{
                            transform: `translateX(${40 + i * 10}px) translateY(-0.5px)`
                        }}
                    />
                </motion.div>
            ))}
        </motion.div>
    )
}