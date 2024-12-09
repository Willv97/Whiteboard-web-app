const canvas = document.getElementById('whiteboard');
const ctx = canvas.getContext('2d');

let isDrawing = false;

canvas.addEventListener('mousedown', () => {
    isDrawing = true;
});

canvas.addEventListener('mouseup', () => {
    isDrawing = false;
    ctx.beginPath(); //Resets the line for a new stroke
});

canvas.addEventListener('mousemove', draw);