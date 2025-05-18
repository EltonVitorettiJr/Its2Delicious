const showAllButton = document.querySelector(`.show-all-button`)
const discountButton = document.querySelector(`.discount-button`) 
const totalButton = document.querySelector(`.total-price-button`)
const veganButton = document.querySelector(`.vegan-button`)
const menuButton = document.querySelector(`.menu-button`)
const listMenu = document.querySelector(`ul`)

let discountON = false

function showAll (listType) {
    
    let list = ``
    discountON = false

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

    discountON = true
}

function totalPrice() {

    let totalPrice = 0

    
    if (discountON === false) {
        
        totalPrice = menuOptions.reduce((acc, burger) => {
            return acc += burger.price
        }, 0)

        listMenu.innerHTML = 
        `<li>
            <p>The total price of burgers is: </p>
            <p class="price-burger">R$: ${totalPrice.toFixed(2)}</p>
        </li>`

    } else {
        
        totalPrice = menuOptions.reduce((acc, burger) => {
            return acc += burger.price * 0.9
        }, 0)

        listMenu.innerHTML = 
        `<li>
            <p>The total price of burgers is: </p>
            <p class="price-burger">R$: ${totalPrice.toFixed(2)}</p>
        </li>`

    }

}

function veganFilter() {
    showAll(menuOptions.filter(burger => burger.vegan))
}

showAllButton.addEventListener(`click`, () => showAll(menuOptions))
discountButton.addEventListener(`click`, discount)
totalButton.addEventListener(`click`, () => totalPrice())
veganButton.addEventListener(`click`, veganFilter)
menuButton.addEventListener(`click`, () => showAll(menuOptions))