
function initializeDraggables() {
    let elements = Utils.classElements("draggable");
    for(let i = 0; i < elements.length; i++) {
        createDraggable(elements[i]);
    }
}

function initializeSnapAreas() {
    let elements = Utils.classElements("snap-area");
    for(let el of elements) {
        createSnapArea(el);
    }
}

function init() {
    initializeDraggables();
    initializeSnapAreas();
}

window.onload = init;