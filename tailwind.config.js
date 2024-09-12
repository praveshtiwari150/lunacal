/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      colors: {
        slate: {
          50: "#F4F4F5",
          100: "#E9EAEA",
          200: "#C9CACB",
          300: "#A9AAAC",
          400: "#686B6E",
          500: "#272B30",
          600: "#23272B",
          700: "#171A1D",
          800: "#121316",
          900: "#0C0D0E",
        },
        charcoal: {
          50: "#F5F5F6",
          100: "#EBECEC",
          200: "#CDCED0",
          300: "#AFB1B4",
          400: "#72777B",
          500: "#616161D1",
          600: "#31363C",
          700: "#202428",
          800: "#181B1E",
          900: "#101214",
          950: "#171717"
        },
        white: {
          50: "#FFFFFF",
          100: "#FFFEFE",
          200: "#FEFEFD",
          300: "#FDFDFB",
          400: "#FCFBF9",
          500: "#FAF9F6",
          600: "#E1E0DD",
          700: "#969594",
          800: "#71706F",
          900: "#4B4B4A",
        },

        onyx: "#363C43",

        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))'
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))'
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))'
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))'
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))'
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))'
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))'
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))'
        }
      },
      backgroundImage: {
        'twilight-gradient': 'linear-gradient(180deg, rgba(40, 40, 40, 0.1) 0%, rgba(248, 248, 248, 0.1) 100%), linear-gradient(0deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05))',

        'custom-gradient': 'linear-gradient(180deg, #373E44 -100%, #191B1F 100%)',
        'btn-gradient': 'linear - gradient(139.14deg, #303439 12.4 %, #161718 94.96 %)',
        'arrow-gradient': 'linear-gradient(139.14deg, #303439 12.4%, #161718 94.96%)'
      }
    }
  },
  plugins: [require("tailwindcss-animate")],
}
