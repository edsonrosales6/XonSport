// Mostrar Contraseña
var boton = document.getElementById("boton");
var password = document.getElementById("password");

boton.addEventListener('click', mostrar)
function mostrar() {
     if (password.type === "password") {
      password.type = "text";
      boton.src = "img/ocultar.png";
    } else {
      password.type = "password";
      boton.src = "img/mostrar.png";
    }
}

// Contraseñas deben ser iguales
$('#registrar').submit(function(e){
    e.preventDefault()
    var password = $('#password').val();
    var confirmar = $('#confirmar').val();

    if (password != confirmar) {
        Swal.fire({
            title:'Contraseñas deben ser iguales',
            icon:'warning',
            confirmButtonText:'Aceptar',
            backdrop:true,
            timer:4000,
            padding:'2rem',
            timerProgressBar:true,
            position:'center',
            confirmButtonColor:'#000',
            confirmButtonAriaLabel:'Aceptar',
            showCloseButton:true
        });
        return false;
    }else{
        Swal.fire({
            title:'Registro Exitoso',
            icon:'success',
            confirmButtonText:'Aceptar',
            backdrop:true,
            padding:'2rem',
            position:'center',
            confirmButtonColor:'#000',
            confirmButtonAriaLabel:'Aceptar',
            allowOutsideClick:false,
            allowEscapeKey:false,
            stopKeydownPropagation:false
        }).then(function () {
          window.location.href = "iniciarsesion.html";
        })
    }

});
