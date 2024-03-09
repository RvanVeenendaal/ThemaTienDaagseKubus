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
    let cube = document.querySelector(".cube");
    cube.style.transform = rotateX(x);
    cube.style.transform = rotateY(y);
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
//    resizeTexts();
}

const resizeText = ({ element, elements, minSize = 8, maxSize = 33, step = 1, unit = 'px' }) => {
  (elements || [element]).forEach(el => {
    let i = minSize;
    let overflow = false;
    const parent = el.parentNode;
    while (!overflow && i < maxSize) {
        el.style.fontSize = `${i}${unit}`;
        overflow = isOverflown(parent);
      if (!overflow) i += step;
    }
    // revert to last state where no overflow happened
    el.style.fontSize = `${i - step}${unit}`;
  })
}

function resizeTexts(){
    resizeText({
        elements: document.querySelectorAll('th')
    })
    resizeText({
        elements: document.querySelectorAll('td')
    })
}
