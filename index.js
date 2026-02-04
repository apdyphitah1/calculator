const buttonsEl = document.querySelectorAll("button");
for (let i = 0; i < buttonsEl.length; i++) {
    buttonsEl[i].addEventListener("click", () =>{
        console.log(buttonsEl[i].textContent);
    })
}