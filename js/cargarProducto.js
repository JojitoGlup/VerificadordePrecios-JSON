let code = "";

document.addEventListener("keydown", async (event) => {
    if (/^\d$/.test(event.key)) {
        code += event.key;
    }
    else if (event.key === "Enter") {
        if (array_prods.some(row => row.id === code)) {
            let product = array_prods.find(row => row.id === code);
            $('#image').attr('src', `img/${product.imagen}`);
            
            const detailsProduct = `
                <div class="elements">
                    <h2 class="product-name">Producto: </h2>
                    <h2 class="product-name">Precio: </h2>
                </div>
                <div class="elements">
                    <h2 class="product-name">${product.nombre}</h2>
                    <h2 class="product-name">$${product.precio}</h2>
                </div>
            `;
            $('.details').html(detailsProduct);
            code = "";
        }
        else{
            Swal.fire({
                icon: 'error',
                title: 'Inexistente',
                text: `No existe un producto con el código: ${code}`,
                timer: 2000,
                showConfirmButton: false
            });
            code = "";
        }
    }
});
