// Tailwind CSS Configuration
// This script applies custom Tailwind configuration
(function () {
  // Wait for Tailwind to be ready
  if (window.tailwind) {
    window.tailwind.config = {
      darkMode: "class",
      theme: {
        extend: {
          fontFamily: {
            sans: ["Inter", "sans-serif"],
            mono: ["JetBrains Mono", "monospace"],
          },
          animation: {
            "fade-in": "fadeIn 0.8s ease-out forwards",
            "slide-up": "slideUp 0.6s ease-out forwards",
            float: "float 6s ease-in-out infinite",
            "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
            "spin-slow": "spin 20s linear infinite",
          },
          keyframes: {
            fadeIn: {
              "0%": { opacity: "0" },
              "100%": { opacity: "1" },
            },
            slideUp: {
              "0%": { opacity: "0", transform: "translateY(30px)" },
              "100%": { opacity: "1", transform: "translateY(0)" },
            },
            float: {
              "0%, 100%": { transform: "translateY(0)" },
              "50%": { transform: "translateY(-20px)" },
            },
          },
        },
      },
    };
  }
})();
