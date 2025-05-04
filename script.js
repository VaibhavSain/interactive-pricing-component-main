let input = document.getElementById("input");
let num = document.getElementById("num");
const btn = document.getElementById("btn1");
const cir = document.getElementById("cir");
let swi = false;

setInterval(() => {
    if(swi == false) {
    console.log(input.value);
    num.innerText = `$${input.value}.00`;
    }
    else {
        num.innerText = `$${input.value*12}.00`;

    }
},300);

btn.addEventListener("click",() => {
    if(swi == false) {
        cir.style.marginLeft = "20px";
        swi = true;
    }
    else {
        cir.style.marginLeft = "0px";
        swi = false;
    }
})