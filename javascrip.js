let catalogo = {
  specifique: 3500,
  "mascara revlon": 2500,
  discipline: 2700,
  cronologiste: 1500,
  "olaplex 6": 1720,
  "olaplex 7": 6500,
  fusiodose: 500,
  "revlon 12 en 1": 9500,
  cronologiste: 3511,
  "skala potatoe": 1700,
  "skala lisos": 2200,
  "revlon oro": 1900,
};
function obtenerPrecio(catalogo, productoElegido) {
  let pepe = catalogo[productoElegido];
  return pepe;
}

function hayStock(catalogo, productoElegido) {
  let hayStock = catalogo[productoElegido] != undefined;
  return hayStock;
}

function sumaTotal(subtotal, precio) {
  let total = subtotal + precio;
  return total;
}
function principal() {
  let subtotal = 0;

  let productoElegido = prompt("ingrese su producto,presione X para terminar");
  while (productoElegido != "x") {
    if (hayStock(catalogo, productoElegido)) {
      alert("agregaste tu producto al carrito");
      let precio = obtenerPrecio(catalogo, productoElegido);
      subtotal = sumaTotal(precio, subtotal);
    } else {
      alert("Momentaneamente no contamos con stock del producto");
    }

    productoElegido = prompt("ingrese su producto,presione X para terminar");
  }
  if (subtotal > 0) {
    alert("su total es de $ " + subtotal);
  }
}

principal();
