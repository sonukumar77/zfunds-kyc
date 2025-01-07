import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors:{
        "primary-100":"#052F5F",
        "primary-10":"#32547C",
        "secondary":"#EFF3F6",
        "gray-100":"#CDD5DF",
        "gray-150":"#8E959F",
        "green-100":"#03A87C",
      }
    },
  },
  plugins: [],
}
export default config
