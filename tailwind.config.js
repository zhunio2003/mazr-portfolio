/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // 🎨 COLORES TEMA ESPACIAL
      colors: {
        // Backgrounds
        'bg-primary': '#0a0a0a',      // Negro mate espacial
        'bg-secondary': '#111111',    // Negro carbón
        'bg-card': '#1a1a1a',         // Cards oscuras
        
        // Acentos
        'accent-emerald': '#10b981',  // Verde esmeralda
        'accent-cyan': '#06b6d4',     // Cyan tech
        'accent-purple': '#8b5cf6',   // Púrpura espacial
        
        // Textos
        'text-primary': '#f8fafc',    // Blanco grisáceo
        'text-secondary': '#94a3b8',  // Gris medio
        'text-muted': '#64748b',      // Gris sutil
        
        // Especiales
        'metallic': '#94a3b8',        // Acentos metálicos
        'glow': '#10b981',            // Color para efectos glow
      },
      
      // ✏️ TIPOGRAFÍAS
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
        'mono': ['JetBrains Mono', 'Monaco', 'Consolas', 'monospace'],
        'inter': ['Inter', 'sans-serif'],
        'jetbrains': ['JetBrains Mono', 'monospace'],
      },
      
      // 🎭 ANIMACIONES ESPACIALES
      animation: {
        // Flotación suave
        'float': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out infinite 2s',
        
        // Efectos glow
        'glow': 'glow 2s ease-in-out infinite alternate',
        'glow-pulse': 'glow-pulse 3s ease-in-out infinite',
        
        // Animaciones de texto
        'typing': 'typing 3.5s steps(40, end)',
        'blink': 'blink 1s infinite',
        
        // Movimientos espaciales
        'orbit': 'orbit 20s linear infinite',
        'twinkle': 'twinkle 4s ease-in-out infinite',
        
        // Scroll y reveal
        'fade-in': 'fade-in 0.8s ease-out',
        'slide-up': 'slide-up 0.6s ease-out',
        'slide-down': 'slide-down 0.6s ease-out',
        
        // Hover effects
        'scale-glow': 'scale-glow 0.3s ease-out',
      },
      
      // 🎬 KEYFRAMES PERSONALIZADOS
      keyframes: {
        // Flotación
        float: {
          '0%, 100%': { 
            transform: 'translateY(0px) rotate(0deg)' 
          },
          '50%': { 
            transform: 'translateY(-10px) rotate(2deg)' 
          },
        },
        
        // Efectos glow
        glow: {
          'from': { 
            boxShadow: '0 0 20px #10b981, 0 0 30px #10b981' 
          },
          'to': { 
            boxShadow: '0 0 30px #10b981, 0 0 40px #10b981, 0 0 50px #10b981' 
          },
        },
        
        'glow-pulse': {
          '0%, 100%': { 
            boxShadow: '0 0 20px rgba(16, 185, 129, 0.4)' 
          },
          '50%': { 
            boxShadow: '0 0 40px rgba(16, 185, 129, 0.8)' 
          },
        },
        
        // Animación de typing
        typing: {
          'from': { width: '0' },
          'to': { width: '100%' },
        },
        
        blink: {
          '0%, 50%': { opacity: '1' },
          '51%, 100%': { opacity: '0' },
        },
        
        // Movimientos espaciales
        orbit: {
          '0%': { 
            transform: 'rotate(0deg) translateX(100px) rotate(0deg)' 
          },
          '100%': { 
            transform: 'rotate(360deg) translateX(100px) rotate(-360deg)' 
          },
        },
        
        twinkle: {
          '0%, 100%': { opacity: '0.3', transform: 'scale(0.8)' },
          '50%': { opacity: '1', transform: 'scale(1.2)' },
        },
        
        // Animaciones de entrada
        'fade-in': {
          'from': { opacity: '0', transform: 'translateY(20px)' },
          'to': { opacity: '1', transform: 'translateY(0)' },
        },
        
        'slide-up': {
          'from': { opacity: '0', transform: 'translateY(50px)' },
          'to': { opacity: '1', transform: 'translateY(0)' },
        },
        
        'slide-down': {
          'from': { opacity: '0', transform: 'translateY(-50px)' },
          'to': { opacity: '1', transform: 'translateY(0)' },
        },
        
        // Hover effects
        'scale-glow': {
          'to': { 
            transform: 'scale(1.05)', 
            boxShadow: '0 0 30px rgba(16, 185, 129, 0.6)' 
          },
        },
      },
      
      // 📐 SPACING PERSONALIZADO
      spacing: {
        '18': '4.5rem',    // 72px
        '88': '22rem',     // 352px
        '128': '32rem',    // 512px
      },
      
      // 🖼️ BACKDROP BLUR
      backdropBlur: {
        'xs': '2px',
      },
      
      // 🔲 BORDER RADIUS
      borderRadius: {
        '4xl': '2rem',
      },
      
      // 📦 BOX SHADOW ESPACIALES
      boxShadow: {
        'glow': '0 0 20px rgba(16, 185, 129, 0.4)',
        'glow-lg': '0 0 40px rgba(16, 185, 129, 0.6)',
        'cyber': '0 0 20px rgba(6, 182, 212, 0.4)',
        'neon': 'inset 0 0 20px rgba(16, 185, 129, 0.2)',
      },
      
      // 🎨 GRADIENTS
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'space-gradient': 'linear-gradient(135deg, #0a0a0a 0%, #111111 50%, #1a1a1a 100%)',
        'hero-gradient': 'linear-gradient(135deg, rgba(16, 185, 129, 0.1) 0%, rgba(6, 182, 212, 0.1) 100%)',
      },
    },
  },
  plugins: [],
}