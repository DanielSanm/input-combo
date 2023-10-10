const input = document.querySelector("#input-text")
const itemsContainer = document.querySelector("#items-container")
const clearContainer = document.querySelector("#clear-container")

input.addEventListener('keydown', function (event) {

    if (event.keyCode === 13) {

        event.preventDefault()

        let itemText = input.value

        if (itemText !== '') {

            input.value = ''

            if(itemText.includes(' ')) {
                const itemsText = itemText.split(' ')
                
                for(let item of itemsText) {
                    if(item !== '') {
                        itemsContainer.appendChild(createItem(item))
                    }
                }
            } else {
                itemsContainer.appendChild(createItem(itemText))
            }

            itemsContainer.scrollTop = itemsContainer.scrollHeight

            if(document.querySelector("#btn-clear") === null) {
                
                clearContainer.appendChild(createButtonClear())
                
            }
        }
    }
});

function createButtonClear() {
    const button = document.createElement('button')

    button.setAttribute('id', 'btn-clear')
    button.classList.add('btn', 'btn-primary')
    button.insertAdjacentHTML('afterbegin', '<i class="bi bi-trash-fill"></i>')

    button.addEventListener('click', (e) => {
        
        e.preventDefault()

        const items = document.querySelectorAll('.item')

        items.forEach(item => {
            item.remove()
        })

        button.remove()
    })

    return button

}

function createItem(text) {

    const span = document.createElement('span')
    span.classList.add('badge', 'bg-lime', 'me-2', 'mb-1', 'item')
    // span.innerText = Math.floor(Math.random() * 1000000000)
    span.innerText = text

    const i = document.createElement('i')
    i.classList.add('bi', 'bi-x', 'fs-6', 'ps-1')
    i.addEventListener('click', (e) => {

        e.preventDefault()
        span.remove()

        const items = document.querySelectorAll('.item')

        if(items.length === 0) {
            document.querySelector('#btn-clear').remove()
        }

    })

    span.appendChild(i)

    return span
}