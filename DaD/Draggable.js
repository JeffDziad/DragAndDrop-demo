function createDraggable(element) {
    let x1 = 0;
    let x2 = 0;
    let x3 = 0;
    let x4 = 0;
    element.onmousedown = dragMouseDown;

    function dragMouseDown(e) {
        element.style.position = "absolute";

        e = e || window.event;
        e.preventDefault();
        x3 = e.clientX;
        x4 = e.clientY;
        document.onmouseup = closeMouseDrag;
        document.onmousemove = elementDrag;
    }
    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        x1 = x3 - e.clientX;
        x2 = x4 - e.clientY;
        x3 = e.clientX;
        x4 = e.clientY;
        element.style.top = (element.offsetTop - x2) + "px";
        element.style.left = (element.offsetLeft - x1) + "px";
    }
    function snapToArea() {
        let areas = Utils.classElements("snap-area");
        for(let a of areas) {
            let box = a.getBoundingClientRect();
            if(Utils.isRectPointIntersect(box.left, box.top, box.width, box.height, x3, x4)) {
                // intersection
                console.log("intersect");
                a.appendChild(element);
                element.style.position = "static";
                // elements top/left positions need to be set manually
                //x3 = element.
            }
        }
    }
    function closeMouseDrag() {
        snapToArea();
        document.onmouseup = null;
        document.onmousemove = null;
    }
}