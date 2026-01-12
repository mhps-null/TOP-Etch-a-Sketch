# TOP-Etch-a-Sketch

An interactive **Etch-A-Sketch** web app built with **HTML, CSS, and vanilla JavaScript**.  
Users can draw by hovering over a dynamic grid, clear the drawing, and change the grid size.

## Features
- Dynamic grid generation (1–64 × 1–64)
- Hover to draw interaction
- Progressive darkening effect (light gray → black in steps)
- Clear grid functionality
- Change grid size with input validation
- Responsive layout using CSS Grid and Flexbox

## Demo
Live demo (GitHub Pages):  
👉 https://mhps-null.github.io/etch-a-sketch/

## Technologies Used
- **HTML5** — semantic structure
- **CSS3** — Grid & Flexbox for layout
- **JavaScript (ES6)** — DOM manipulation & events

## Learning Source
This project was built as part of **The Odin Project** curriculum, focusing on:
- DOM manipulation
- Event handling
- CSS Grid fundamentals
- JavaScript logic and state management

## How It Works
- The grid is generated dynamically based on user input
- Each cell stores its own opacity state
- Every mouse hover increases opacity by `0.1`
- After ~10 hovers, the cell becomes fully black
- Clearing or resizing the grid recreates the DOM from scratch