
function loadMe() {
 var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if(xhttp.readyState == 4 && xhttp.status == 200){
            document.getElementById('para').innerHTML = this.responseText;
        
        }
        
    };
    xhttp.open("GET", "data/message.txt", true);
    xhttp.send();
}
