const cesta = [];
const divContenedor = document.getElementById("divContenedor");
const btnCesta = document.getElementById("cesta");
const inputSearch = document.getElementById("inputSearch");
const spanCesta = document.getElementById("productosEnCesta");

function retornarCardHTML(producto) {
    return `<div class="div-card">
                <div class="imagen"><img src="${producto.imagenSrc}" alt="${producto.nombre}"></div>
                <div class="producto">${producto.nombre}</div>
                <div class="importe">€ ${producto.precio.toLocaleString('es-ES', { style: 'currency', currency: 'EUR' }).replace('€', '')}</div>
                <button id="${producto.id}" class="add-to-cart">Añadir a la cesta</button>
            </div>`;
}

function cargarProductos(productos) {
    divContenedor.innerHTML = "";

    productos.forEach((producto) => {
        divContenedor.innerHTML += retornarCardHTML(producto);
    });
    activarEventosClick();
}

function actualizarTotalCesta() {
    spanCesta.textContent = cesta.length;
}

function activarEventosClick() {
    const botonesAgregar = document.querySelectorAll("button.add-to-cart");

    botonesAgregar.forEach((boton) => {
        boton.addEventListener("click", () => {
            const productoSeleccionado = productos.find((producto) => producto.id == boton.id);
            cesta.push(productoSeleccionado);
            actualizarTotalCesta();
            localStorage.setItem("cCompras", JSON.stringify(cesta));
        });
    });
}

cargarProductos(productos);

btnCesta.addEventListener("click", () => {
    if (cesta.length > 0) {
        location.href = "checkout.html";
    } else {
        alert("⛔️ La cesta esta vacia. Agregá al menos un producto a la cesta.");
    }
});

btnCesta.addEventListener("mousemove", () => {
    if (cesta.length > 0) {
        btnCesta.title = "Productos en cesta: " + cesta.length;
    }
});

inputSearch.addEventListener("keyup", (e) => {
    if (e.key === "Enter") {
        const terminoBusqueda = inputSearch.value.toLowerCase();
        const resultados = productos.filter((producto) =>
            producto.nombre.toLowerCase().includes(terminoBusqueda)
        );
        cargarProductos(resultados);
        localStorage.setItem("ultimaBusqueda", terminoBusqueda);
    }
});

document.addEventListener('DOMContentLoaded', function() {
    let imagenes = document.querySelectorAll('img[src="images/img1.JPG"], img[src="images/img2.JPG"], img[src="images/img3.JPG"], img[src="images/img4.JPG"], img[src="images/img5.JPG"], img[src="images/img15.JPG"]');
    
    imagenes.forEach(function(imagen) {
        imagen.style.width = '200px'; 
        imagen.style.height = '220px';
        imagen.style.objectFit = 'cover';
    });
});
