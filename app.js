// function addMessage(){
//     var val = document.getElementById("val")
//     var p = document.createElement("p");
//     p.style.background = "#F7E9DD";
//     p.style.margin = "10px";
//     p.style.fontSize = "18px";
//     p.style.fontFamily = "calibri";
//     p.style.padding = "5px";

//     var textNode =  document.createTextNode(val.value)
//     p.appendChild(textNode)
//     var messages = document.getElementById("messages");
//     messages.appendChild(p) 


let btnClear = document.querySelector('button');
let inputs = document.querySelectorAll('input');
btnClear.addEventListener('click',() => {
    inputs.forEach(input => input.value = '');
});

function addMessage(){
    if(document.getElementById('val').value ==""){
        alert('Please enter your message');
        return false;

    }
    else
    {
        var val = document.getElementById("val");
        var p = document.createElement("p");
        p.style.background = "#F7E9DD";
        p.style.margin = "10px";
        p.style.fontSize = "18px";
        p.style.fontFamily = "calibri";
        p.style.padding = "5px";
    
        var textNode =  document.createTextNode(val.value)
        p.appendChild(textNode)
        var messages = document.getElementById("messages");
        messages.appendChild(p) 
    }
}