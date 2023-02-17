class Draggable {
    constructor(element) {
        this.x1 = 0;
        this.x2 = 0;
        this.x3 = 0;
        this.x4 = 0;
        this.element = element;
        this.element.onmousedown = this.dragMouseDown;
    }
    dragMouseDown(e) {
        console.log('mouse down');
        e = e || window.event;
        e.preventDefault();
        this.x3 = e.clientX;
        this.x4 = e.clientY;
        document.onmouseup = this.closeMouseDrag;
        document.onmousemove = this.elementDrag;
    }
    elementDrag(e) {
        console.log("dragging");
        e = e || window.event;
        e.preventDefault();
        this.x1 = this.x3 - e.clientX;
        this.x2 = this.x4 - e.clientY;
        this.x3 = e.clientX;
        this.x4 = e.clientY;
        this.element.style.top = (this.element.offsetTop - this.x2) + "px";
        this.element.style.left = (this.element.offsetLeft - this.x1) + "px";
    }
    closeMouseDrag() {
        document.onmouseup = null;
        document.onmousemove = null;
    }
}