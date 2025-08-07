 export interface SocialLink {
    icon: any // Lucid icon component
    href: string
    label: string
    ariaLabel?: string
 }

 export interface HeroButton {
    text: string
    variant: 'primary' | 'secondary'
    href?: string
    onClick?: () => void
    icon?: any
    download?: boolean
 }
 
 export interface TypeingAnimationProps {
    text: string
    speed?: number
    className?: string
 }

 export interface ParticleProps {
    id: number
    x: number
    y: number
    delay: number
    duration: number
 }

 export interface HeroConfig {
    name: string
    title: string
    subtitle: string
    description: string
    avatar: {
        initials: string
        showRing: boolean
    }   
    socialLinks: SocialLink[]
    button: HeroButton[]
 }