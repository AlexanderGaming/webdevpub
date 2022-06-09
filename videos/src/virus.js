
export {startRandomizer};

var windowwidth = 1500;
var windowheight = 750;
var id = 1;


function random(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function display_image(src, width, height, alt, style) {
    var a = document.createElement("img");
    a.src = src;
    a.width = width;
    a.height = height;
    a.alt = alt;
    a.style = style;
    a.onmouseover = (e) => { document.getElementById(e.target.id).remove() };
    a.id = id;
    document.body.appendChild(a);
}
function startRandomizer() {
    window.setTimeout(function () {
        
        var randomw = random(220, 400);
        var randomh = randomw*0.65;
        var randomx = random(0, windowwidth-randomw);
        var randomy = random(0, windowheight-randomh);
        var randompic = Math.ceil(Math.random() * 1);
        id += 1;
        
        if (randompic == 1) {
            randompic = "callsaul.jpg";
            console.log("bruh");
        }



        display_image(
            randompic,
            randomw,
            randomh,
            "JavaScriptImage",
            `position: absolute;left:${randomx}px;top:${randomy}px;`
        );
        startRandomizer();
    }, Math.random() * 50000);
}

startRandomizer();

