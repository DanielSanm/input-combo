const input = document.querySelector("#input-text")
const itemsContainer = document.querySelector("#items-container")

input.addEventListener('keydown', function (event) {

    if (event.keyCode === 13) {

        event.preventDefault()

        let text = input.value

        if (text !== '') {

            input.value = ''

            if(text.includes(' ')) {
                const items = text.split(' ')
                
                for(let item of items) {
                    if(item !== '') {
                        itemsContainer.appendChild(createItem(item))
                    }
                }
            } else {
                itemsContainer.appendChild(createItem(text))
            }

            itemsContainer.scrollTop = itemsContainer.scrollHeight
        }
    }
});

function createItem(text) {

    const span = document.createElement('span')
    span.classList.add('badge', 'bg-lime', 'me-2', 'mb-1')
    // span.innerText = Math.floor(Math.random() * 1000000000)
    span.innerText = text

    const i = document.createElement('i')
    i.classList.add('bi', 'bi-x', 'fs-6', 'ps-1')
    i.addEventListener('click', (e) => {

        e.preventDefault()
        span.remove()

    })

    span.appendChild(i)

    return span
}