function menuPage() {

    const menuMain = document.createElement('div')
    menuMain.classList.add('menuMain')
        const burgers = document.createElement('div')
        burgers.classList.add('burgers')
        burgers.innerHTML = `<h3>Burgers</h3>
                                <p>'The Bathroom Exploder' - $10</p>
                                <p>'The Island of Billy' - $12</p>
                                <p>'The denchers of Bob' - $13</p>`
        const sides = document.createElement('div')
        sides.classList.add('sides')
        sides.innerHTML = `<h3>Sides</h3>
                            <p>French Fries - $3</p>
                            <p>Egg Salad - $5</p>
                            <p>Onion Soup - $6</p>`
        const drinks = document.createElement('div')
        drinks.classList.add('drinks')
        drinks.innerHTML = `<h3>Drinks</h3>
                            <p>Water - $1</p>
                            <p>Soda - $3</p>
                            <p>Beer - $4</p>`

    menuMain.appendChild(burgers)
    menuMain.appendChild(sides)
    menuMain.appendChild(drinks)

        return menuMain
}

export default menuPage