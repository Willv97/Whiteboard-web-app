const canvas = document.getElementById('whiteboard');
const ctx = canvas.getContext('2d');

let isDrawing = false;

canvas.addEventListener('mousedown', () => {
    isDrawing = true;
});

canvas.addEventListener('mouseup', () => {
    isDrawing = false;
    ctx.beginPath(); // Resets the line for a new stroke
});

canvas.addEventListener('mousemove', draw);

function draw(event) {
    if (!isDrawing) return;


// Get mouse position
const rect = canvas.getBoundingClientRect();
const x = event.clientX - rect.left;
const y = event.clientY - rect.top;

ctx.lineWidth = 2; // Set Thickness
ctx.lineCap = 'round'; // SRound edges for smoother lines
ctx.strokeStyle = 'black'; // Line Color

ctx.lineTo(x, y); // Draw to the new point
ctx.stroke();
ctx.beginPath(); // Start a new path to continue drawing
ctx.moveTo(x, y); // Move to the current mouse position
}