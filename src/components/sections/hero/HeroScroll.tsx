'use client'

import {motion} from 'framer-motion' // Animaciones fluidas
import {ChevronDown} from 'lucide-react' // Icono svg de flecha hacia abajo

// Props 
interface HeroScrollProps {
    className?: string
}

export default function HeroScroll({className = ''}: HeroScrollProps) {
    return (
        <motion.div
            initial={{opacity:0}}
            animate={{opacity:1}}
            transition={{duration: 0.8, delay: 1.2}}
            className={`absolute bottom-8 left-1/2 trasform -translate-x-1/2 ${className}`}
        >
            <motion.div
                animate={{y: [0, 10, 0]}}
                transition={{ duration: 0.8, delay: 1.2}}
                className="flex flex-col items-center text-text-muted cursor-pointer hover:text-accent-emerald transition-colors duration-300"
                onClick={() => {
                    window.scrollTo({
                        top: window.innerHeight,
                        behavior: 'smooth'
                    })
                }}
            >
                <span>Scroll para explorar</span>

                <motion.div
                    animate= {{
                        y: [0, 5, 0],
                        opacity: [0.5, 1, 0.5]
                    }}
                    transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                >
                    <ChevronDown size={24} />

                </motion.div>

            </motion.div>

        </motion.div>
    )

}