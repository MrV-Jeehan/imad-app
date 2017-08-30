//Counter
var button = document.getElementById('counter');
var counter = 0;
button.onclick = function (){
   //Make Request
   
   //Capture and store
   
   //Render Variable in span
   counter = counter +1;
   var span = document.getElementById('count');
   span.innerHTML = counter.toString();
};