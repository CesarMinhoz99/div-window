window.onload = init();

var actualIndex;
var globalZindex = 0;
var getX, getY;
var flag = false;
DivWindow = document.querySelectorAll(".window");


document.body.addEventListener("mouseup", () => {
    flag = false;
    document.body.style.cursor = "default";
});

document.body.addEventListener("mousemove", () => {
    if (flag) {
        DivWindow[actualIndex].style.marginLeft = `${(getX *= 0.75)}px`;
        DivWindow[actualIndex].style.marginTop = `${(getY *= 0.75)}px`;
    }
    DivWindow = document.querySelectorAll(".window");

    DivWindow.forEach((item, index) => {
        DivWindow[index].addEventListener("mousedown", () => {
            DivWindow[index].style.zIndex = globalZindex++;
            document.body.style.cursor = "none";
            flag = true;
            actualIndex = index;
        });
    });

});

function init() {
    if (window.Event) {
        document.captureEvents(Event.MOUSEMOVE);
    }
    document.onmousemove = getCursorXY;
}

function getCursorXY(e) {
    getX = window.Event ?
        e.pageX :
        event.clientX +
        (document.documentElement.scrollLeft ?
            document.documentElement.scrollLeft :
            document.body.scrollLeft);
    getY = window.Event ?
        e.pageY :
        event.clientY +
        (document.documentElement.scrollTop ?
            document.documentElement.scrollTop :
            document.body.scrollTop);
}
