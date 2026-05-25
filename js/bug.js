function onClick(){
   if (inputAreEmpty()){
   label.textContent ="Error : one or both Input are empty.";
   return ;
}
updateable();
}

function inputAreEmpty(){
    if (getNumber1()===""|| getNumber2() === ""){
        return true;
    }
    else {
        return false;
    }
}

function updateable(){
    var Num1 =getNumber1();
    var Num2= getNumber2();
    var sum = Num1 + Num2;
    label.textContent =Num1 + "+" + Num2 + "+" + sum ;
}

function getNumber1(){
    return inputs[0].value;
}
function getNumber2(){
    return inputs[1].value;
}

var inputs =document.querySelectorAll("input");
var inputs=document.querySelector("p");
var btn = document.querySelector("button");
btn.addEventListener("click", onClick);