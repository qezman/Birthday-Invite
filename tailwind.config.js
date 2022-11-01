/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx,html}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#80d9ff",
          100: "#4dc9ff",
          200: "#33c2ff",
          300: "#1abaff",
          400: "#00b3ff",
          500: "#00a6eb",
          600: "#00a1e6",
          700: "#008fcc",
          800: "#007db3",
          900: "#006b99",
        },
      },
      backgroundImage: theme => ({
        // 'backImg': "url('images/backImg.png')"
        'backImg': "url('images/backImgTwo.png')"
      })

    },
    fontSize: {
      'tiny': "0.625rem",
      'xs': '.75rem',
      'sm': '.875rem',
      'base': '1rem',
      'lg': '1.125rem',
      'xl': '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
      '7xl': '5rem',
    },
    screens: {
      xs: "500px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1150px",
      "2xl": "1536px",
    },
  },
  plugins: [],
};
