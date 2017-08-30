//Counter
var button = document.getElementById('counter');

button.onclick = function () {
   //Make Request
   var request = new XMLHttpRequest();
   //Capture and store
   request.onreadystatechange = function () {
        if(request.readyState === XMLHttpRequest.DONE){
            if(request.status === 200){
                var counter = request.responseText;
                var span = document.getElementById('count');
                span.innerHTML = counter.toString();
            }
        }  
   };
   
   request.open('GET',"http://vikas71845.imad.hasura-app.io/counter",true);
   request.send(null); 
   
};