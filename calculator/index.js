let el1 = document.getElementById("num1-el");
let el2 = document.getElementById("num2-el");
// let num1 = parseInt(el1, 10);
// let num2 = parseInt(el2, 10);
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
    el2.innerText = el.innerText;
    let result =  Number(el1.innerText) + Number(el2.innerText);
    console.log(result);
    sum = result;
 
}

function sub()
{
    change();
    let result = el1 - el2;
    sum = result;

}

function mul(){
    change();
    let result = el1 * el2;
    sum = result;
}

function div()
{
    change();
    let result = el1 /el2;
    sum = result;
}
function equals()
{
    console.log(sum);
    document.getElementById("sum-el").innerText = sum;

}


// we could make the arithmetic functions work like that take a 
// particular input - but that would lead to being able to edit 
// individual digits which seems long.