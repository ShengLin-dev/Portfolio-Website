/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./*.{js,ts,jsx,tsx,html}"
  ],
  darkMode: 'class',
  theme: {
    screens: {
      'xs': '390px',    // Mobile viewport chuẩn theo đề bài
      'sm': '640px',
      'md': '768px',    // Tablet
      'lg': '1024px',   // Small desktop / iPad Pro
      'xl': '1280px',
      '2xl': '1440px',  // Desktop chuẩn theo đề bài
      '3xl': '1920px',  // Ultra-wide
    },
    extend: {
      /* ==========================================================================
         BẢNG MÀU HỆ THỐNG OKLCH (Chuẩn WCAG 2.2 AA / EAA)
         ========================================================================== */
      colors: {
        // Nền & Bề mặt (Canvas & Surfaces)
        canvas: {
          deep: 'oklch(var(--canvas-deep) / <alpha-value>)',       // Nền chính tối sâu
          surface: 'oklch(var(--canvas-surface) / <alpha-value>)', // Card & Section elevated
          elevated: 'oklch(var(--canvas-elevated) / <alpha-value>)', // Modal, Floating navbar
          glass: 'oklch(var(--canvas-glass) / <alpha-value>)',     // Backdrop blur surface
        },
        // Phân cấp văn bản (Text Hierarchy)
        content: {
          primary: 'oklch(var(--content-primary) / <alpha-value>)',     // Tương phản > 14:1 (Vượt AAA)
          secondary: 'oklch(var(--content-secondary) / <alpha-value>)', // Tương phản ~ 8.2:1 (Đạt AAA)
          muted: 'oklch(var(--content-muted) / <alpha-value>)',         // Tương phản ~ 4.7:1 (Đạt AA)
          inverse: 'oklch(var(--content-inverse) / <alpha-value>)',
        },
        // Màu thương hiệu & Điểm nhấn (Brand & Accent)
        brand: {
          cyan: 'oklch(var(--brand-cyan) / <alpha-value>)',       // Neon Electric Cyan (Chính)
          purple: 'oklch(var(--brand-purple) / <alpha-value>)',   // Vibrant Violet (Thứ cấp)
          coral: 'oklch(var(--brand-coral) / <alpha-value>)',     // Warm Coral (Highlight)
        },
        // Trạng thái & Viền tương tác (Borders & States)
        border: {
          subtle: 'oklch(var(--border-subtle) / <alpha-value>)',
          strong: 'oklch(var(--border-strong) / <alpha-value>)',
          glow: 'oklch(var(--border-glow) / <alpha-value>)',
        },
        focus: {
          ring: 'oklch(var(--focus-ring) / <alpha-value>)',       // Chỉ thị tiêu điểm WCAG 2.2
        },
        status: {
          success: 'oklch(0.72 0.17 142)',
          warning: 'oklch(0.75 0.16 65)',
          error: 'oklch(0.65 0.22 25)',
        }
      },

      /* ==========================================================================
         HỆ THỐNG FLUID TYPOGRAPHY (Bố cục co giãn nguyên bản clamp())
         Min: 390px (Mobile) -> Max: 1440px (Desktop)
         ========================================================================== */
      fontSize: {
        'fluid-display': ['clamp(2.75rem, 1.8rem + 4.2vw, 5.75rem)', { lineHeight: '1.05', letterSpacing: '-0.03em' }],
        'fluid-h1': ['clamp(2.25rem, 1.6rem + 3.2vw, 4.25rem)', { lineHeight: '1.1', letterSpacing: '-0.025em' }],
        'fluid-h2': ['clamp(1.75rem, 1.35rem + 2vw, 3rem)', { lineHeight: '1.2', letterSpacing: '-0.02em' }],
        'fluid-h3': ['clamp(1.35rem, 1.15rem + 1.1vw, 2rem)', { lineHeight: '1.3', letterSpacing: '-0.015em' }],
        'fluid-h4': ['clamp(1.15rem, 1.05rem + 0.5vw, 1.5rem)', { lineHeight: '1.4' }],
        'fluid-body': ['clamp(1rem, 0.95rem + 0.25vw, 1.1875rem)', { lineHeight: '1.65' }],
        'fluid-body-sm': ['clamp(0.875rem, 0.85rem + 0.15vw, 1rem)', { lineHeight: '1.55' }],
        'fluid-caption': ['clamp(0.75rem, 0.72rem + 0.1vw, 0.875rem)', { lineHeight: '1.4', letterSpacing: '0.04em' }],
      },

      /* ==========================================================================
         NHỊP ĐIỆU KHOẢNG TRẮNG LINH HOẠT (Fluid Spacing Rhythm)
         ========================================================================== */
      spacing: {
        'fluid-xs': 'clamp(0.5rem, 0.45rem + 0.25vw, 0.75rem)',
        'fluid-sm': 'clamp(0.75rem, 0.65rem + 0.5vw, 1.25rem)',
        'fluid-md': 'clamp(1.25rem, 1rem + 1.25vw, 2.5rem)',
        'fluid-lg': 'clamp(2rem, 1.5rem + 2.5vw, 4.5rem)',
        'fluid-xl': 'clamp(3.5rem, 2.5rem + 5vw, 8rem)',
        'fluid-gutter': 'clamp(1rem, 0.5rem + 3vw, 4rem)',
      },

      /* ==========================================================================
         HOẠT ẢNH & HIỆU ỨNG TƯƠNG TÁC NGUYÊN BẢN (Pure CSS Animations)
         ========================================================================== */
      keyframes: {
        'text-reveal': {
          '0%': { transform: 'translateY(110%)', opacity: '0' },
          '100%': { transform: 'translateY(0%)', opacity: '1' },
        },
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(32px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '0.6', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.06)' },
        },
        'spin-slow': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        'scanline': {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' },
        }
      },
      animation: {
        'text-reveal': 'text-reveal 0.9s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'fade-up': 'fade-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
        'spin-slow': 'spin-slow 14s linear infinite',
      },
      boxShadow: {
        'neon-cyan': '0 0 25px -5px oklch(0.76 0.16 215 / 0.35)',
        'neon-purple': '0 0 25px -5px oklch(0.68 0.22 305 / 0.35)',
        'card-elevated': '0 12px 36px -8px rgba(0, 0, 0, 0.65)',
        'focus-ring': '0 0 0 3px oklch(0.85 0.18 215), 0 0 0 5px oklch(0.14 0.015 260)',
      }
    },
  },
  plugins: [],
}

