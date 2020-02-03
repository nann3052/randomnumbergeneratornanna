
const btnNumber = document.querySelector(".btnNumber")

btnNumber.addEventListener("click", function() {
    
    let showNumber = document.getElementById("showNumber");
     
    let randomNumber = Math.floor(Math.random() *101);
    console.log(randomNumber);
    
    showNumber.innerHTML = randomNumber;
    
});


