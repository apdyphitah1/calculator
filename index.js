const buttonsEl = document.querySelectorAll("button");

const inputfield = document.getElementById("result");

for (let i = 0; i < buttonsEl.length; i++) {
    buttonsEl[i].addEventListener("click",  () => { 
        const buttonValue = buttonsEl[i].textContent;
        console.log(buttonValue);
        

        if (buttonValue === "C") {
            clearResult();
        }
        else if (buttonValue === "=") {
            calculateResult();
        }
        else {
            appendValue(buttonValue);
            
        }
       
       
});
 
}

function clearResult() {
    
    inputfield.value = ""; 
}


function calculateResult() {
    inputfield.value = eval(inputfield.value);
     
}



function appendValue(buttonValue) {
    inputfield.value += buttonValue;    

}