function homePage() {

    const home = document.createElement('div')
    home.classList.add = ('.home')
        const header = document.createElement('div')
            const homeButton = document.createElement('div')
            const menuButton = document.createElement('div')
            const contactButton = document.createElement('div')
            homeButton.classList.add('.home')
            menuButton.classList.add('.menu')
            contactButton.classList.add('.contact')
            header.appendChild(homeButton)
            header.appendChild(menuButton)
            header.appendChild(contactButton)
            homeButton.textContent = 'Home'
            menuButton.textContent = 'Menu'
            contactButton.textContent = 'Contact'
        const main = document.createElement('div')
            const name = document.createElement('h1')
            const text = document.createElement('div')
            name.classList.add('.name')
            text.classList.add('.text')
            main.appendChild(name)
            main.appendChild(text)
            name.textContent = `Billy Bob's Finger Lickin' Sandwiches`
            text.textContent = `At Billy Bob's we ensure everyone is happy`
        const footer = document.createElement('div')
            const credits = document.createElement('div')
            credits.classList.add('.credits')
            footer.appendChild(credits)
            credits.textContent = 'KingdomTim'

    home.appendChild(header)
    home.appendChild(main)
    home.appendChild(footer)

    return home
}

export default homePage