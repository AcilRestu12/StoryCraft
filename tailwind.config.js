/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html", "./src/**/*.{js,ts,jsx,tsx}",
        './node_modules/flowbite/**/*.{js,jsx,ts,tsx}', // menambahkan path ke flowbite
    ],
    theme: {
        extend: {
            colors: {
				primary: '#153448',
				secondary: '#3C5B6F',
				third: '#948979',
				fourth: '#DFD0B8',
				fifth: '#545898',
				text: '#EEEEEE',
				primaryEx: { "50": "#eff6ff", "100": "#dbeafe", "200": "#bfdbfe", "300": "#93c5fd", "400": "#60a5fa", "500": "#3b82f6", "600": "#2563eb", "700": "#1d4ed8", "800": "#1e40af", "900": "#1e3a8a" }
			},
            fontFamily: {
                coiny: ["Coiny", 'serif'],
                libre: ["Libre Baskerville", 'serif'],
                suranna: ["Suranna", 'serif'],
                karma: ["Karma", 'serif'],
			},
        },
    },
    plugins: [
        require('flowbite/plugin'),
    ],
};
