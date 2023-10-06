const input = document.querySelector("#input-text")
const card = document.querySelector("#card-container")
let count = 0

input.addEventListener('keydown', function(event) {
    if (event.keyCode === 13) {
        
        event.preventDefault()
        
        const element = createElement()

        card.insertBefore(element, card.firstElementChild)
        
    }
});

function createElement() {

    const span = document.createElement('span')
    span.classList.add('badge' ,'bg-success')
    span.innerText = "click " + count++

    return span
}