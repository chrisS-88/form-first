export default {
  theme: {
    extend: {
      transitionTimingFunction: {
        "loop-soft": "cubic-bezier(0.45, 0.05, 0.55, 0.95)",
        "loop-bounce": "cubic-bezier(0.34, 1.56, 0.64, 1)",
        "loop-wiggle": "cubic-bezier(0.68, -0.6, 0.32, 1.6)",
      },

      transitionDuration: {
        "loop-fast": "150ms",
        "loop-medium": "300ms",
        "loop-slow": "600ms",
      },

      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
        bounceSoft: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-6%)" },
        },
        float: {
          "0%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-4px)" },
          "100%": { transform: "translateY(0)" },
        },
        pulseSoft: {
          "0%, 100%": { opacity: 1 },
          "50%": { opacity: 0.85 },
        },
      },

      animation: {
        wiggle: "wiggle 0.6s ease-in-out",
        "bounce-soft": "bounceSoft 1.2s ease-in-out infinite",
        float: "float 4s ease-in-out infinite",
        "pulse-soft": "pulseSoft 2.5s ease-in-out infinite",
      },
    },
  },
};
