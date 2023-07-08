const ratingContainer = document.querySelector(".rating-container")
const selectedContainer = document.querySelector(".selected-container")
const submitButton = document.getElementById("submit")
const rating = document.getElementById("rating")
const rates = document.querySelectorAll(".rating-buttons")

submitButton.addEventListener("click" , () => {
    selectedContainer.classList.remove("hidden")
    ratingContainer.style.display = "none"
})


rates.forEach((rate) => {
    rate.addEventListener("click", () => {
        rating.innerHTML = rate.innerHTML
    })
})