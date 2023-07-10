// Target DOM elements
const openMenuIcon = document.querySelectorAll('.phone-menu-open')
const allPhoneMenuButtons = document.querySelectorAll('.phone-menu-button')
const menu = document.querySelector('.phone-menu-container')

const openFaqIcons = document.querySelectorAll('.faq-open')

// Event listeners
// Open phone and tablet menu
openMenuIcon.forEach(icon =>
  icon.addEventListener('click', () => {
    menu.classList.add('active')
  })
)
// Close phone and tablet menu
allPhoneMenuButtons.forEach(button =>
  button.addEventListener('click', () => {
    menu.classList.remove('active')
  })
)

// Expand FAQ
openFaqIcons.forEach(icon => {
  icon.addEventListener('click', () => {
    // Add or remove selected class
    icon.classList.toggle('selected')
    // Toggle icon from + to x and insert p
    if (icon.classList.contains('selected')) {
      icon.src = './images/bi_plus (1).svg'
      icon.parentElement.insertAdjacentHTML(
        'afterend',
        '<p>We provide only the best trading software. The trading terminal MetaTrader4 is the most popular and convenient platform for access to global exchanges. You can work anywhere. All you need is the Internet because the necessary trading tools are already collected in one place and are available in a couple of clicks. Use only the best and develop with us!</p>'
      )
      // Toggle icon from x to + and remove p
    } else {
      icon.src = './images/bi_plus.svg'
      icon.parentElement.nextElementSibling.remove()
    }
  })
})
