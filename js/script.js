const botonSeccion = document.querySelector('.jobs-listings')
botonSeccion.addEventListener('click', (e) => {
    const boton = e.target


    if (boton.classList.contains('button-apply-job')) {

    boton.textContent = '¡Aplicado!'
    boton.classList.add('is-applied')
    boton.disabled = true

    }

})