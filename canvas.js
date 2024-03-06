const canvas = document.querySelector('#draw');
console.log(canvas);
const ctx = canvas.getContext('2d');
let drawing = false;
let lastX = 0;
let lastY = 0;

// Resize canvas and select line style
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
ctx.lineJoin = 'round';
ctx.lineCap = 'round';

function draw(e) {
    // Stop function if not moused down
    if(!drawing){
        return;
    }
    console.log(e);
}

canvas.addEventListener('mousemove', draw);