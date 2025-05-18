const display=document.getElementById("display")
function appendvalue(value){
    display.value+=value
}

function cleardisplay(value){
    display.value="";
}

function calculatevalue(){
    display.value=eval(display.value)
}