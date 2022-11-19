//diseño del carrito
function dibujarCarrito() {
  if (carrito.length == 0) {
    document.getElementById("detalleCarrito").innerHTML = "";
  } else {
    for (compra of carrito) {
      document.getElementById("detalleCarrito").innerHTML += `
        <tr>
        <td><img src="./${compra.imagen}"class="carritoImg"/></td>
        <td class="carritoStyle">${compra.nombre}</td>
         <td class="carritoStyle">${compra.precio}</td>
        <td class="carritoStyle"><button onclick = "eliminar(event)">🗑️</button></td>
         </tr>`;
    }
  }

  //Sumatoria de valores del carro
  totalCarrito = carrito.reduce(
    (acumulador, producto) => acumulador + producto.precio,
    0
  );
  let infoTotal = document.getElementById("total");
  infoTotal.innerText = "El total es de $: " + totalCarrito;
}

//Eliminar productos.

function eliminar(el) {
  let fila = el.target.parentElement.parentElement;
  let id = fila.children[0].innerText;
  let indice = carrito.findIndex((producto) => producto.id == id);
  carrito.splice(indice, 1);
  fila.remove();

  //Calcula nuevo total
  let preciosAcumulados = carrito.reduce(
    (acumulador, producto) => acumulador + producto.precio,
    0
  );
  total.innerText = "El total es de $: " + preciosAcumulados;
  localStorage.setItem("cart", JSON.stringify(carrito));
}
//Finalización de compra
document.getElementById("finalizar").addEventListener("click", function () {
  if (carrito.length == 0) {
    Swal.fire({
      title: "Carrito vacío",
      text: "Por favor ingresá un producto",
      icon: "error",
    });
  } else {
    carrito = [];
    localStorage.setItem("cart", JSON.stringify(carrito));
    Swal.fire({
      title: "Compra exitosa",
      text: "En segundos recibirás un correo con tu factura",
      icon: "success",
    });
    dibujarCarrito();
  }
});

let carrito = JSON.parse(localStorage.getItem("cart"));
dibujarCarrito();
