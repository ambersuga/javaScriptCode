const ratingEls = document.querySelectorAll(".emoji");
const btnEl = document.getElementById("btn");
const containerEl = document.getElementById("container");

let selectedRating = "";

btnEl.addEventListener("click",() => {
    if(selectedRating !== ""){
        containerEl.innerHTML  = `
        <strong>Thank You!</strong>
        <br><br>
        <strong>Feedback: ${selectedRating}</strong>
        <p>we will use your feedback to improve
         our customer support.</p>`;
    }
});

ratingEls.forEach((ratingEl) => {
  ratingEl.addEventListener("click", (event) => {
    removeActive();
    selectedRating = event.target.innerText || event.
    target.parentNode.innerText;
    event.target.classList.add("active")
    event.target.parentNode.classList.add("active")
  });
}); 
 
function removeActive(){
    ratingEls.forEach((ratingEl) => {
        ratingEl.classList.remove("active"); 
    });
}