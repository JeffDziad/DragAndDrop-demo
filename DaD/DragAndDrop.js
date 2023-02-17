let draggables = [];
let snapAreas = [];

function classElements(classId) {
    return document.getElementsByClassName(classId);
}

function initializeDraggables() {
    let elements = classElements("draggable");
    for(let i = 0; i < elements.length; i++) {
        draggables.push(new Draggable(elements[i]));
    }
}

function initializeSnapAreas() {
    let elements = classElements("snap-area");
    for(let el in elements) {
        snapAreas.push(new SnapArea(el));
    }
}

function init() {
    initializeDraggables();
    initializeSnapAreas();
}

window.onload = init;