/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      'main': '#2C3333',
      'white': '#ffff',
      'fishtank': '#0E8388',
      'blackO': 'rgba(0, 0, 0, 0.5)',
      'btnYellow': '#FFC83E',
      'color6': "#4C5252",
      'black': 'black',
      'color7': '#CBE4DE',
      'red':'red',
    },
    backgroundImage: {
      'banner1': "url('https://i.pinimg.com/564x/60/e4/81/60e481da07b991ba83aba5bff8df69a0.jpg')",
    }
  },
  plugins: [],
}