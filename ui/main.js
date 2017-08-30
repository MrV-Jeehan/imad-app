console.log('Loaded!');
//Change text

//Move image

var img = document.getElementById('abc');
var marginLeft = 0;
function moveRight () {
    marginLeft = marginLeft +1;
    img.style.marginLeft = marginLeft + 'px';
}
img.onclick = function () {
    var interval = setInterval(moveRight,50);
};