// Canvas and context
const canvas = document.querySelector('#draw');
const ctx = canvas.getContext('2d');

// Clear button
const clear = document.querySelector('.clear-canvas');

// Variables for controlling events, setting position,
// line color, and line size
let drawing = false;
let lastX = 0;
let lastY = 0;
let hue = 0;
let growth = true;

// Resize canvas 
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Apply line style
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 100;
ctx.globalCompositeOperation = 'source-over';

// Event handler drawing on the canvas
function draw(e) {
    // Stop function if not moused down
    if(!drawing) {
        return;
    }

    // Apply stroke style and begin drawing
    ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
    ctx.beginPath();
    ctx.moveTo(lastX, lastY);
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
    [lastX, lastY] = [e.offsetX, e.offsetY];

    // Increase hue as we draw
    hue++;
    if(hue >= 360) {
        hue = 0;
    }

    // Line grows until it is 100px and then begins to shrink
    // until is 1 px when it starts growth again
    if(ctx.lineWidth >= 100 || ctx.lineWidth <= 1){
        growth = !growth;
    }

    if(growth){    
        ctx.lineWidth++;
    } else {
        ctx.lineWidth--;
    }
}

// Event handler for clear button
function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

// Event listners for mouse events on the canvas
canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mousedown', (e) => {
    drawing = true;
    [lastX, lastY] = [e.offsetX, e.offsetY];

});
canvas.addEventListener('mouseup', () => drawing = false);
canvas.addEventListener('mouseout', () => drawing = false);

// Event listener for clear button 
clear.onclick = clearCanvas;