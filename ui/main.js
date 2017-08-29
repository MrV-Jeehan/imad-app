console.log('Loaded!');
//Change text

var element = document.getElementById('main-txt');
element.innerHTML = "New text";

//Move image

var img = document.getElementById('abc');
img.onclick = function () {
    img.style.marginLeft = '100px';  
};