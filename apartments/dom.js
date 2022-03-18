let cards = document.getElementsByClassName('card')
cards = Array.from(cards)

cards.forEach((card) => {
    card.addEventListener('click', () => {
        card.classList.toggle('transparent')
        alert('Card was clicked')
    })
})