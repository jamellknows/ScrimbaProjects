let el1 = document.getElementById("num1-el");
let el2 = document.getElementById("num2-el");
let num1 = Number(el1);
let num2 = Number(el2);
let sum;
let el;
el = el1;
function change(){
    el = el2;
}


function number(clicked_id){
    
    el.innerText += clicked_id[3];
    
}

function clear(){
    el1.innerText="";
    el2.innerText = "";
}

function add(){
    change();
    let result =  num1 + num2;
    // sum = result;
    // document.getElementById("sum-el").innerText = result;
}

function sub()
{
    change();
    let result = num1 - num2;

    // sum = result;
    // document.getElementById("sum-el").innerText = result;
}
function equals()
{
    add();
    sub();
    document.getElementById("sum-el").innerText = result;

}


// we could make the arithmetic functions work like that take a 
// particular input - but that would lead to being able to edit 
// individual digits which seems long.