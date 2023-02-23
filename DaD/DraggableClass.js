class Draggable {
    constructor(element) {
        this.x1 = 0;
        this.x2 = 0;
        this.x3 = 0;
        this.x4 = 0;

        this.scrollXOffset = 0;
        this.scrollYOffset = 0;

        this.element = element;
        this.element.onmousedown = this.dragMouseDown.bind(this);
    }

    recalibrateLocation() {
        this.element.style.top = (this.element.getBoundingClientRect().top + window.scrollY) + "px";
        this.element.style.left = (this.element.getBoundingClientRect().left + window.scrollX) + "px";
    }

    dragMouseDown(e) {
        console.log("PICKED UP " + this.element.id + ": ", this.element.offsetLeft, this.element.offsetTop);
        document.getElementsByClassName("drag-area")[0].appendChild(this.element);
        this.element.style.position = "absolute";
        e = e || window.event;
        e.preventDefault();
        this.x3 = e.clientX;
        this.x4 = e.clientY;
        document.onmouseup = this.closeMouseDrag.bind(this);
        document.onmousemove = this.elementDrag.bind(this);

        //document.onscroll = this.pageScroll.bind(this);
    }

    elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        let scrollY = e.clientY + window.scrollY;
        let scrollX = e.clientX + window.scrollX;
        this.x1 = this.x3 - scrollX;
        this.x2 = this.x4 - scrollY;
        this.x3 = scrollX;
        this.x4 = scrollY;
        this.element.style.top = (this.element.offsetTop - this.x2) + "px";
        this.element.style.left = (this.element.offsetLeft - this.x1) + "px";
    }

    snapToArea() {
        let areas = Utils.classElements("snap-area");
        for(let a of areas) {
            let box = a.getBoundingClientRect();
            if(Utils.isRectPointIntersect(box.left, box.top, box.width, box.height, this.x3, this.x4)) {
                // intersection
                a.appendChild(this.element);
                this.element.style.position = "static";
                this.recalibrateLocation();
            }
        }
    }

    closeMouseDrag() {
        this.snapToArea();
        console.log("DROPPED " + this.element.id + ": ", this.element.offsetLeft, this.element.offsetTop);
        document.onmouseup = null;
        document.onmousemove = null;
    }
}