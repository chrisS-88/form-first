export default {
  theme: {
    extend: {
      transitionTimingFunction: {
        "min-soft": "cubic-bezier(0.4, 0, 0.2, 1)", // smooth default
        "min-snappy": "cubic-bezier(0.33, 1, 0.68, 1)", // subtle snap
      },

      transitionDuration: {
        "min-fast": "120ms",
        "min-base": "180ms",
        "min-slow": "260ms",
      },

      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        fadeUp: {
          "0%": { opacity: 0, transform: "translateY(6px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        fadeDown: {
          "0%": { opacity: 0, transform: "translateY(-6px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        subtlePulse: {
          "0%, 100%": { opacity: 1 },
          "50%": { opacity: 0.92 },
        },
      },

      animation: {
        "fade-in": "fadeIn 0.4s ease-out forwards",
        "fade-up": "fadeUp 0.45s ease-out forwards",
        "fade-down": "fadeDown 0.45s ease-out forwards",
        "pulse-subtle": "subtlePulse 2s ease-in-out infinite",
      },
    },
  },
};
