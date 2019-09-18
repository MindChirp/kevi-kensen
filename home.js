function activateMenuElement(e) {
    e.setAttribute("style", `
        border-style: solid;
        border-width: 0 0 1px;
        border-color: black;
    `);
}

function deactivateMenuElement(e) {
    e.setAttribute("style", `
    border-style: none;
    `);
}


//Main bkg function:
var minWidth = 800;
//The main refresh interval. Lower value requires
//processing resources
var refreshInterval = 100;
var looper = setInterval(function() {
    var header = document.getElementById("header");
    var style = getComputedStyle(header);
    var width = parseInt(style.width.split("px")[0]);

    if(width < minWidth) {
        //If the width is less than 
        //the min width, do something
                hideRemovables(true)
    } else {
        hideRemovables(false);
    }
}, refreshInterval);



function hideRemovables(bool) {
    //What to do if the website is scaled up
    var els = document.getElementsByClassName("removable");
    if(bool == true && els[0].getAttribute("style") != `height: 0; overflow: hidden;`) {
        for(let i = 0; i < els.length; i++) {
            els[i].setAttribute("style", `height: 0; overflow: hidden;`);
        }
    } else if(bool == false && els[0].getAttribute("style") != `height: fit-content; overflow: visible;`) {
        for(let i = 0; i < els.length; i++) {
            els[i].setAttribute("style", `height: fit-content; overflow: visible;`);
        }
    }
}

