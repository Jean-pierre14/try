const content = document.getElementById('content')
const open = document.getElementById('openBtn')
const close = document.getElementById('closeBtn')

open.addEventListener('click', openModal)

function openModal() {
    content.style.display = 'block'
}

close.addEventListener('click', closeModal)
function closeModal() {
    content.style.display = 'none'
}