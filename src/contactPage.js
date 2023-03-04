
function contactPage() {

    

    const contactMain = document.createElement('div')
    contactMain.classList.add('contactMain')
        const hours = document.createElement('div')
        hours.textContent = '5-9'
        const contactInfo = document.createElement('div')
        contactInfo.textContent = '917-442-1238'
        const address = document.createElement('div')
        address.textContent = '34 Dude Avenue'
        
        contactMain.appendChild(hours)
        contactMain.appendChild(contactInfo)
        contactMain.appendChild(address)

    return contactMain
}

export default contactPage