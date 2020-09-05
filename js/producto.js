$("#btnComprar").click(function(){
    
    Swal.fire({
        title:'Agregado a carrito',
        icon:'success',
        confirmButtonText:'OK',
        timer:2000,
        toast:true,
        timerProgressBar:true,
        position:'top',
        confirmButtonColor:'#000',
        confirmButtonAriaLabel:'Aceptar',
        showCloseButton:true

    });

});
