class producto {
  constructor(numero, nombre, precio, genero, codigo, stock) {
    this.numero = numero;
    this.nombre = nombre;
    this.precio = precio;
    this.genero = genero;
    this.codigo = codigo;
    this.stock = stock;
  }
}
const producto0 = new producto(
  0,
  "specifique",
  3500,
  "limpieza profunda",
  69471,
  100
);
const producto1 = new producto(
  1,
  "mascara revlon",
  2500,
  "reconstituyente",
  69479,
  50
);
const producto2 = new producto(2, "discipline", 2700, "antifrizz", 61472, 133);
const producto3 = new producto(
  3,
  "cronologiste",
  1500,
  "reparador",
  12376,
  122
);
const producto4 = new producto(
  4,
  "olaplex 6",
  1700,
  "reconstituyente",
  98712,
  80
);
const producto5 = new producto(5, "olaplex 7", 6500, "nutritivo", 35432, 100);
const producto6 = new producto(
  6,
  "fusiodose",
  500,
  "reconstituyente",
  87612,
  32
);
const producto7 = new producto(
  7,
  "revlon 12 en 1",
  9500,
  "nutritivo",
  18777,
  50
);
const producto8 = new producto(
  8,
  "cronologiste",
  3511,
  "reconstituyente",
  35478,
  101
);
const producto9 = new producto(
  9,
  "skala potatoe",
  1700,
  "nutritivo",
  23231,
  90
);
const producto10 = new producto(10, "skala lisos", 2200, "alisado", 56536, 70);
const producto11 = new producto(
  11,
  "revlon oro",
  1900,
  "hidratante",
  75178,
  100
);

const catalogo = [
  producto0,
  producto1,
  producto2,
  producto3,
  producto4,
  producto5,
  producto6,
  producto7,
  producto8,
  producto9,
  producto10,
  producto11,
];

function obtenerPrecio(catalogo, productoElegido) {
  const productoSeleccionado = catalogo.find(
    (producto) => producto.nombre == productoElegido
  );
  return productoSeleccionado.precio;
}
function hayStock(catalogo, productoElegido) {
  const seleccion = catalogo.find(
    (seleccionado) => seleccionado.nombre == productoElegido
  );
  if (seleccion == undefined) {
    return 0;
  } else {
    return seleccion.stock;
  }
}

function sumaTotal(subtotal, precio) {
  let total = subtotal + precio;
  return total;
}
function principal() {
  let subtotal = 0;
  let productoElegido = prompt(
    "ingrese su producto,presione X para terminar"
  ).toLowerCase();

  while (productoElegido != "x") {
    if (hayStock(catalogo, productoElegido) > 0) {
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
