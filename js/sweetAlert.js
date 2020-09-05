$('#ingresar').submit(function(e){
    e.preventDefault()
    var usuario = $.trim($('#usuario').val());
    var password = $.trim($('#password').val());

    if (usuario == '' || password == '') {
        Swal.fire({
            title:'Por favor complete los datos',
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
            title:'Ingresaste Correctamente',
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
          window.location.href = "index.html";
        })
    }
 
});
