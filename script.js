let isDragging = false;
let lastMouseX;
let lastMouseY;
let currentRotationX = -20;
let currentRotationY = -20;
let faceWidthAndHeight = 300;
const isOverflown = ({ clientWidth, scrollWidth }) => scrollWidth > clientWidth
let cube = document.querySelector(".cube");
cube.addEventListener("mousedown", onMouseDown);
cube.addEventListener("mouseup", onMouseUp);
cube.addEventListener("mousemove", onMouseMove);
let links = document.querySelector(".draaiLinks");
links.addEventListener("onclick", draai(90,0));
let rechts = document.querySelector(".draaiLinks");
rechts.addEventListener("onclick", draai(-90,0));
let omhoog = document.querySelector(".draaiLinks");
omhoog.addEventListener("onclick", draai(0,-90));
let omlaag = document.querySelector(".draaiLinks");
omlaag.addEventListener("onclick", draai(0,90));

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
    let cube = document.querySelector(".cube");
    cube.style.transform = 
    `rotateX(${currentRotationX}deg)
    rotateY(${currentRotationY}deg)`;
}
