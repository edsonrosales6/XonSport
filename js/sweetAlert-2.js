$( document ).ready(function() {
    Swal.fire({
        html:'Por favor acepta nuestros <a href="#">términos y condiciones</a>',
        icon:'info',
        padding:'1rem',
        toast:true,
        confirmButtonText:'Aceptar',
        position:'bottom',
        confirmButtonColor:'#fff',
        confirmButtonAriaLabel:'Aceptar',
        customClass: {
            popup: 'popup-class',
            content: 'content-class',
            confirmButton: 'button-class'
        }
    });
});