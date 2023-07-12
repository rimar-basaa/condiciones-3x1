function tarea1() {           
    let img = document.querySelector('#img');
    if (img.style.border == '2px solid red'){
        img.style.border = 'none';        
    } else {
        img.style.border = '2px solid red';
    }      
}

// ---------------------------------------------------- tarea 2

function tarea2() {
    let stick1 = document.querySelector('#stick1');
    let stick2 = document.querySelector('#stick2');
    let stick3 = document.querySelector('#stick3');   
    let total = Number(stick1.value) + Number(stick2.value) + Number(stick3.value);
    let countstick = document.querySelector('#countstick');   
    
    if ( Number(stick1.value) < 0){
        countstick.style.color = "red";
        countstick.innerHTML = "Valor NO puede ser Menor de 0";                
        stick1.value = "0";
    } else if (Number(stick2.value) < 0){
        countstick.style.color = "red";
        countstick.innerHTML = "Valor NO puede ser Menor de 0";                
        stick2.value = "0";
    } else if (Number(stick3.value) < 0){
        countstick.style.color = "red";
        countstick.innerHTML = "Valor NO puede ser Menor de 0";                
        stick3.value = "0";
    } else if (total <= 10){
        countstick.style.color = "white";
        countstick.innerHTML = "Llevas " + total + " sticker";        
    } else {
        countstick.style.color = "white";
        countstick.innerHTML = "Llevas DEMASIADOS sticker";
    }    
}

// ----------------------------------------------------- tarea 3

function tarea3() {
    let num1 = document.querySelector('#selector1').value;
    let num2 = document.querySelector('#selector2').value;
    let num3 = document.querySelector('#selector3').value;
    let pass = num1 + num2 + num3;
    let message = document.querySelector('#msg');
    if (pass === "911"){
        message.innerHTML = "Password 1 CORRECTA";
        message.style.color = "green";
    } else if (pass === "714"){
        message.innerHTML = "Password 2 CORRECTA";
        message.style.color = "green";
    } else {
        message.innerHTML = "Password INCORRECTA";
        message.style.color = "red";
    }    
}