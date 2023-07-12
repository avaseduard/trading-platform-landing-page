// Target DOM elements
const openMenuIcon = document.querySelectorAll('.phone-menu-open')
const allPhoneMenuButtons = document.querySelectorAll('.phone-menu-button')
const menu = document.querySelector('.phone-menu-container')

const openFaqIcons = document.querySelectorAll('.faq-open')

const sliderButtons = document.querySelectorAll('[data-carousel-button]')
const slides = document.querySelector('[data-slides]')
const pageValue = document.querySelector('.testimonial-page')

// Event listeners and functions
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

// Slide through testimonials and count pages
sliderButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Assign -1 to prev button and +1 to next button
    const offset = button.dataset.carouselButton === 'next' ? 1 : -1
    // Target the active slide
    const activeSlide = slides.querySelector('[data-active]')
    // Compute the index of the new slide
    let newIndex = [...slides.children].indexOf(activeSlide) + offset
    // Ensure slide continuity when we hit the limits of the carousel's slides
    if (newIndex < 0) newIndex = slides.children.length - 1
    if (newIndex >= slides.children.length) newIndex = 0
    // Make the new slide active
    slides.children[newIndex].dataset.active = true
    // Make the previous slide inactive
    delete activeSlide.dataset.active
    // Compute the number of slide from total
    pageValue.textContent = `${newIndex + 1} / ${slides.children.length}`
  })
})
