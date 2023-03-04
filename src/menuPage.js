function menuPage() {

    const menuMain = document.createElement('div')
    menuMain.classList.add('menuMain')
        const mainDishes = document.createElement('div')
        mainDishes.classList.add('mainDishes')
        mainDishes.textContent = 'Burger'
        const sideDishes = document.createElement('div')
        sideDishes.classList.add('sideDishes')
        sideDishes.textContent = 'French Fries'
        const drinks = document.createElement('div')
        drinks.classList.add('drinks')
        drinks.textContent = 'Water'

    menuMain.appendChild(mainDishes)
    menuMain.appendChild(sideDishes)
    menuMain.appendChild(drinks)

        return menuMain
}

export default menuPage