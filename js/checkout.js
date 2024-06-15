const carrito = JSON.parse(localStorage.getItem("carritoCompras"))

console.table(cesta)

function armarTablaCesta(producto) {
    return `
        <tr>
            <td>${producto.nombre}</td>
            <td>${producto.precio}</td>
            <td>${producto.categoria}</td>
            <td><img src="${producto.imagenSrc}" width="30px"></td>
        </tr>
    `;
}

