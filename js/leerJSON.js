var array_prods;
$(document).ready(function(){
    $.ajax({
        url: 'json/productos.json',
        dataType: 'json',
    }).done(function (data){
        array_prods = data;
    })
    .fail(function(jqxhr, textStatus, error){
    //   console.error('Error cargando productos:', textStatus, error);
    });
}); 