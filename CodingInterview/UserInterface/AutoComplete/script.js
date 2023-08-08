const input = document.querySelector(".autocomplete-input")
const list = document.querySelector(".autocomplete-list")

const data = [
    'Apple',
    'Banana',
    'Cherry',
    'Date',
    'Fig',
    'Grape',
    'Kiwi',
    'Lemon',
    'Mango',
    'Orange',
    'Peach',
    'Pear',
    'Plum'
]

input.addEventListener("input",() => {
    const searchTerm = input.value.toLowerCase()
    const filteredData = data.filter((fruit) => fruit.toLowerCase().includes(searchTerm))

    list.innerHTML = ""

    filteredData.forEach((item) => {
        const listItem = document.createElement('li')
        listItem.textContent = item
        listItem.addEventListener('click',() => {
            input.value = item
            list.style.display = 'none'
        })

        list.appendChild(listItem)
    })

    if(filteredData.length > 0){
        list.style.display = 'block'
    }else{
        list.style.display = 'none'
    }
})

document.addEventListener('click', (event) => {
    console.log(event)
    if(!input.contains(event.target) && !list.contains(event.target)){
        list.style.display = "none"
    }
})