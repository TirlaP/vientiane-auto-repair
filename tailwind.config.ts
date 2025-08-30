import type { Config } from "tailwindcss";

const config = {
   darkMode: ["class"],
   content: [
      "./pages/**/*.{ts,tsx}",
      "./components/**/*.{ts,tsx}",
      "./app/**/*.{ts,tsx}",
      "./src/**/*.{ts,tsx}",
   ],
   prefix: "",
   theme: {
      container: {
         center: true,
         screens: {
            "2xl": "1320px",
         },
      },
      extend: {
         colors: {
            border: "var(--border))",
            input: "var(--input))",
            ring: "var(--ring))",
            background: {
               DEFAULT: "var(--background)",
               dark: "var(--background-dark)",
               darkSecondary: "var(--background-dark-secondary)",
               placeholder: "var(--placeholder)",
               fade: "var(--bg-fade)",
            },
            foreground: "var(--foreground)",
            primary: {
               DEFAULT: "var(--primary)",
               foreground: "var(--primary-foreground)",
            },
            secondary: {
               DEFAULT: "var(--secondary)",
               foreground: "var(--secondary-foreground)",
            },
            tertiary: {
               DEFAULT: "var(--tertiary)",
            },
            default: {
               DEFAULT: "var(--text-primary)",
               foreground: "var(--text-secondary)",
               black: "var(--text-black)",
               tertiary: "var(--text-tertiary)",
            },
            destructive: {
               DEFAULT: "hs l(var(--destructive))",
               foreground: "var(--destructive-foreground)",
            },
            muted: {
               DEFAULT: "var(--muted)",
               foreground: "var(--muted-foreground)",
            },
            accent: {
               DEFAULT: "var(--accent)",
               foreground: "var(--accent-foreground)",
            },
            popover: {
               DEFAULT: "var(--popover)",
               foreground: "var(--popover-foreground)",
            },
            card: {
               DEFAULT: "var(--card)",
               foreground: "var(--card-foreground)",
            },
         },
         borderRadius: {
            lg: "var(--radius)",
            md: "calc(var(--radius) - 2px)",
            sm: "calc(var(--radius) - 4px)",
         },
         keyframes: {
            "accordion-down": {
               from: { height: "0" },
               to: { height: "var(--radix-accordion-content-height)" },
            },
            "accordion-up": {
               from: { height: "var(--radix-accordion-content-height)" },
               to: { height: "0" },
            },
         },
         animation: {
            "accordion-down": "accordion-down 0.2s ease-out",
            "accordion-up": "accordion-up 0.2s ease-out",
         },
         fontFamily: {
            body: ["var(--body-font)"],
            header: ["var(--header-font)"],
         },
         lineHeight: {
            heavy: "var(--line-height-heavy)",
         },
      },
   },
   plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
