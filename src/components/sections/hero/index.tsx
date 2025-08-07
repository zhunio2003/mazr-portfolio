'use client'

import HeroAvatar from "./HeroAvatar"
import HeroScroll from "./HeroScroll"

interface HeroPage {


    initials?: string
    showAvatarRing?: boolean

      className?: string


}

export default function Hero({
    initials = "mazr",
    showAvatarRing = true,


    className = ""
}: HeroPage) {
    
    return(
        <section className={`relative min-h-screen bg-bg-primary flex items-center justify-center overflow-hidden ${className}`}>
            <HeroAvatar 
            initials={initials}
            showRing = {showAvatarRing}
            size="lg"
        />
        <HeroScroll />
        </section>
        
    )

}
