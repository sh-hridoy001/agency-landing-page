 /** @type {import('tailwindcss').Config} */
export default {
   content: ['*.{html,js}'],
   theme: {
     container: {
      padding: {
        DEFAULT: '15px',
      },
     },
     screens: {
      sm: '640px',
      md: '768px',
      lg: '960px',
      xl: '1200px',
     },
     fontFamily: {
      primary: 'DM Serif Display',
      secondary: 'Jost',
     },
     backgroundImage: {
      hero: 'url(/assets/hero/bg.jpg)',
      grid: 'url(/assets/grid.png)',
     },
     extend: {},
   },
   plugins: [],
 };

