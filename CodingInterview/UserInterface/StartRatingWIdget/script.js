const ratingInputs = document.querySelectorAll(".rating input")

ratingInputs.forEach((input) => {
    input.addEventListener("click", () => {
        resetRating()
        const clickedRating = parseInt(input.id.replace('star', ''), 10)
        highlightRating(clickedRating)
    })
})

function resetRating(){
    ratingInputs.forEach((input) => {
        input.checked = false
    })
}

function highlightRating(count){
    for(let i=1; i <= count; i++){
        document.getElementById(`star${i}`).checked = true
    }
}