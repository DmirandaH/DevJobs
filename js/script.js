const boton = document.querySelector('#boton-importante')
boton.addEventListener('click', () => {
    boton.textContent = '¡Aplicado!'
    boton.classList.add('is-applied')
    boton.disabled = true
})