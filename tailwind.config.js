/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ecell: {
          violet: '#8B5CF6',   // matches glow highlight from the Spline model
          indigo: '#4338CA',   // deeper base tone from the model
          neon: '#C084FC',     // accent highlight
        },
      },
      animation: {
        "meteor-effect": "meteor 5s linear infinite",
        "meteor-up": "meteorUp 5s linear infinite",
        "meteor-down": "meteorDown 5s linear infinite",
      },
      keyframes: {
        meteor: {
          "0%": { transform: "rotate(215deg) translateX(0)", opacity: "1" },
          "70%": { opacity: "1" },
          "100%": {
            transform: "rotate(215deg) translateX(-500px)",
            opacity: "0",
          },
        },
      },
    },
  },
  plugins: [],
}