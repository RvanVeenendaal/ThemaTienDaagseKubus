let isDragging = false;
let lastMouseX;
let lastMouseY;
let currentRotationX = -10;
let currentRotationY = -10;
let container = document.querySelector(".container");
container.addEventListener("mousedown", onMouseDown);
container.addEventListener("mouseup", onMouseUp);
container.addEventListener("mousemove", onMouseMove);
let links = document.querySelector(".draaiLinks");
links.addEventListener("click", draaiLinks);
let rechts = document.querySelector(".draaiRechts");
rechts.addEventListener("click", draaiRechts);
let omhoog = document.querySelector(".draaiOmhoog");
omhoog.addEventListener("click", draaiOmhoog);
let omlaag = document.querySelector(".draaiOmlaag");
omlaag.addEventListener("click", draaiOmlaag);
let start = document.querySelector(".draaiStart");
start.addEventListener("click", draaiStart);

function draaiLinks(){
    draai(0, -90);
}

function draaiRechts(){
    draai(0, 90);
}

function draaiOmhoog(){
    draai(90, 0);
}

function draaiOmlaag(){
    draai(-90, 0);
}

function draaiStart(){
    currentRotationX = -10;
    currentRotationY = -10;
    updateCubeRotation();    
}

function draai(x, y){
    currentRotationX += x;
    currentRotationY += y;
    updateCubeRotation();
}

function onMouseDown(event) {
    isDragging = true;
    lastMouseX = event.clientX;
    lastMouseY = event.clientY;
}

function onMouseUp(event) {
    isDragging = false;
}

function onMouseMove(event) {
    if(isDragging) {
        let deltaX = event.clientX - lastMouseX;
        let deltaY = event.clientY - lastMouseY;
        lastMouseX = event.clientX;
        lastMouseY = event.clientY;
        currentRotationY += deltaX * 0.5;
        currentRotationX -= deltaY * 0.5;
        updateCubeRotation();
    }
}

function updateCubeRotation() {
    let cube = document.querySelector(".cube");
    cube.style.transform = 
    `rotateX(${currentRotationX}deg)
    rotateY(${currentRotationY}deg)`;
}

function setInitialPerspective(){
    updateCubeRotation();
    switch(Math.floor(Math.random() * 6)) {
        case 1:
            draaiLinks();
            break;
        case 2:
            draaiRechts();
            break;
        case 3:
            draaiOmhoog();
            break;
        case 4:
            draaiOmlaag();
            break;
        case 5:
            draaiLinks();
            draaiLinks();
            break;
        default:
            // do nothing
    } 
}
