import homePage from './homePage'
import menuPage from './menuPage'
import contactPage from './contactPage'
import Github from './githubreal.png'
import './styles.css'


function content() {
    
    const header = document.createElement('div')
    header.classList.add('header')
            const homeButton = document.createElement('div')
            const menuButton = document.createElement('div')
            const contactButton = document.createElement('div')
            homeButton.classList.add('homeButton')
            menuButton.classList.add('menuButton')
            contactButton.classList.add('contactButton')
            header.appendChild(menuButton)
            header.appendChild(homeButton)
            header.appendChild(contactButton)
            homeButton.textContent = 'Home'
            menuButton.textContent = 'Menu'
            contactButton.textContent = 'Contact'
    const footer = document.createElement('div')
    footer.classList.add('footer')
            const credits = document.createElement('div')
            credits.classList.add('credits')
            footer.appendChild(credits)
            const myGithub = new Image()
            myGithub.src = Github
            myGithub.classList.add('github')
            credits.textContent = 'Copyright © 2023 Made by KingdomTim'
            footer.appendChild(credits)
            footer.appendChild(myGithub)

    const content = document.querySelector('#content')
    content.appendChild(header)
    content.appendChild(homePage())
    content.appendChild(footer)

    homeButton.addEventListener('click', () => {
        homeButton.style.textDecoration = 'underline'
        menuButton.style.textDecoration = 'none'
        contactButton.style.textDecoration = 'none'
        content.removeChild(content.firstElementChild.nextElementSibling)
        content.insertBefore(homePage(), content.children[1])
            }
        )
    
    menuButton.addEventListener('click', () => {
        menuButton.style.textDecoration = 'underline'
        homeButton.style.textDecoration = 'none'
        contactButton.style.textDecoration = 'none'
        content.removeChild(content.firstElementChild.nextElementSibling)
        content.insertBefore(menuPage(), content.children[1])
    })
    contactButton.addEventListener('click', () => {
        contactButton.style.textDecoration = 'underline'
        homeButton.style.textDecoration = 'none'
        homeButton.style.textDecoration = 'none'
        content.removeChild(content.firstElementChild.nextElementSibling)
        content.insertBefore(contactPage(), content.children[1])
    })

    return content
    
}

document.body.appendChild(content())