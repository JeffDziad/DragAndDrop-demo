class Utils {
    static classElements(classId) {
        return document.getElementsByClassName(classId);
    }
    static isRectPointIntersect(x, y, w, h, mx, my) {
        if(mx >= x && mx <= x + w) {
            // inside x
            if(my >= y && my <= y + h) {
                // inside y
                return true;
            }
        }
        return false;
    }
}

