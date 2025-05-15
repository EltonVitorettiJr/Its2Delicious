const showAllButton = document.querySelector(`.show-all-button`)
const discountButton = document.querySelector(`.discount-button`) 
const listMenu = document.querySelector(`ul`)

function showAll (listType) {
    
    let list = ``
    
    listType.forEach(burger => {
        
        list += 
        `<li>
            <img src="${burger.src}">
            <p class="name-burger">Burger: ${burger.name}</p>
            <p class="price-burger">R$: ${burger.price.toFixed(2)}</p>
        </li>`
        
    });

    listMenu.innerHTML = list
}

function discount() {
    
    let discountList = menuOptions.map(burger => ({
        ...burger,
        price: burger.price * 0.9
    }))

    showAll(discountList)

}

showAllButton.addEventListener(`click`, () => showAll(menuOptions))
discountButton.addEventListener(`click`, discount)