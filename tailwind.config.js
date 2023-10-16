/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primery: "#07332F",
        secondary:'#F7A582',
        whiteC: '#F3F3F3',
        black1:'#0A0808',
        black2:'#3B3A3A',
        gray1: '#6C6B6B',
        borderColor:'#E6E6E6',
        text:'#4D6581',
        graybg: '#F3F3F3'
      },
      backgroundImage: {
        Testimonials: "url('https://i.ibb.co/sbV1b0f/bg-05-new.jpg')",
        slider1: "url('https://i.ibb.co/k1MQZP0/slider-1.png')",
        slider2: "url('https://i.ibb.co/z2pFhmX/slider-2.png')",
        slider3: "url('https://i.ibb.co/875fYNq/slider-3.png')",
        
      }
    },
  },
  plugins: [require("daisyui")],

}




