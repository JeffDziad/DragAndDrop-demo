// NOTES:
// 1. SCROLL NOT BEING ACCOUNTED FOR - results in draggables not being position correctly when dropped/picked up.


let draggables = [];

function initializeDraggables() {
    let elements = Utils.classElements("draggable");
    for(let i = 0; i < elements.length; i++) {
        draggables.push(new Draggable(elements[i]));
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

    document.addEventListener("click", () => {
        for(let drag of draggables) {
            drag.recalibrateLocation();
        }
    });
}

window.onload = init;