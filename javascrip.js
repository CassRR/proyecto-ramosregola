class Producto {
  constructor(
    numero,
    nombre,
    precio,
    genero,
    codigo,
    stock,
    descripcion,
    imagen
  ) {
    this.numero = numero;
    this.nombre = nombre;
    this.precio = precio;
    this.genero = genero;
    this.codigo = codigo;
    this.stock = stock;
    this.descripcion = descripcion;
    this.imagen = imagen;
  }
}
const producto0 = new Producto(
  0,
  "Specifique",
  3500,
  "limpieza profunda",
  69471,
  0,
  "La gama de productos Kérastase Spécifique se creó para abordar cuestiones relacionadas con el cuero cabelludo, como cuero cabelludo graso, sensibilidad, picazón, caspa, caída de cabello.",
  "../imagenes/specifique11.jpg"
);
const producto1 = new Producto(
  1,
  "Mascara Revlon",
  2500,
  "reconstituyente",
  69479,
  50,
  "Crema de tratamiento ideal para reparar el cabello dañado por tintes, uso de secadores o plancha dadso a su alto contenido lipídico. Cabello sedoso, brillante y reparado.",
  "../imagenes/revlon 2.jpg"
);
const producto2 = new Producto(
  2,
  "Discipline",
  2700,
  "antifrizz",
  61472,
  133,
  "La gama de productos Kérastase Discipline se creó para abordar cuestiones relacionadas con la disciplina del cabello: resequedad, frizz, pelitos parados, cabello que se corta",
  "../imagenes/disci01.jpg"
);
const producto3 = new Producto(
  3,
  "cronologiste",
  1500,
  "reparador",
  12376,
  122,
  "Esta gama de productos Kérastase se creó para abordar cuestiones relacionadas con el cuero cabelludo, como cuero cabelludo graso,sensibilidad, picazón, caspa, caída de cabello",
  "../imagenes/crono1.jpg"
);
const producto4 = new Producto(
  4,
  "Olaplex 6",
  1700,
  "reconstituyente",
  98712,
  80,
  "Olaplex N° 6 Bond Smoother se encarga de suavizar las fibras capilares debilitadas por el uso constante de decolorante,secadoras de pelo, planchas, entre otros",
  "../imagenes/olaplex 6.jpg"
);
const producto5 = new Producto(
  5,
  "Olaplex 7",
  6500,
  "nutritivo",
  35432,
  100,
  "Este aceite tiene una fórmula ligera Rica en nutrientes, reconstituyente y no pegajosa, así que no se sentirá como un pegamento en tu melena, todo lo contrario, lo sentirás suave apenas termines de aplicarlo.",
  "../imagenes/OLAPLEX-N7.jpg"
);
const producto6 = new Producto(
  6,
  "Fusiodose",
  500,
  "reconstituyente",
  87612,
  32,
  "Ampollas ideales para reparar el cabello dañado. Al estar formulado con la tecnología KERACOMPLEX queda el cabello sedoso,brillante y repado",
  "../imagenes/fusio1.jpg"
);
const producto7 = new Producto(
  7,
  "Revlon 12 en 1",
  9500,
  "nutritivo",
  18777,
  50,
  "La gama de productos revlo 12 en 1 se creó para abordar cuestiones relacionadas con la disciplina del cabello:resequedad, frizz, pelitos parados, cabello que se corta",
  "../imagenes/revlon 2-2.jpg"
);
const producto8 = new Producto(
  8,
  "Bc Keratine",
  3511,
  "reconstituyente",
  35478,
  101,
  "Esta gama de productos Kérastase se creó para abordar cuestiones relacionadas con el cuero cabelludo, como cuero cabelludo",
  "../imagenes/bc keratine.jpg"
);
const producto9 = new Producto(
  9,
  "Skala potatoe",
  1700,
  "nutritivo",
  23231,
  90,
  "La crema de tratamiento Skala es ideal para cabellos rizados que necesitan un complejo proteínico especial y una nutrició necesaria para mantenenr a raya el frizz y risos definidos.",
  "../imagenes/skala potatoe.jpg"
);
const producto10 = new Producto(
  10,
  "Skala lisos",
  2200,
  "alisado",
  56536,
  70,
  " La crema de tratamiento aporta la nutrición necesaria para mantenenr a raya el frizz y suavizar las fibras debilitadas por el uso de decolorante, secadoras de pelo, planchas, entre otros",
  "../imagenes/skala negra.jpg"
);
const producto11 = new Producto(
  11,
  "revlon oro",
  1900,
  "hidratante",
  75178,
  100,
  "Este aceite tiene una fórmula hidratante, Rica en nutrientes,reconstituyente sentirás tu cabello suave y nutrido apenas termines de aplicarlo.",
  "../imagenes/revlon 1en-2.jpg"
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
const carrito = [];

function obtenerPrecio(catalogo, productoElegido) {
  const productoSeleccionado = catalogo.find(
    (producto) => producto.nombre == productoElegido.nombre
  );
  return productoSeleccionado.precio;
}
function hayStock(catalogo, productoElegido) {
  const seleccion = catalogo.find(
    (seleccionado) => seleccionado.nombre == productoElegido.nombre
  );
  return seleccion == undefined ? 0 : seleccion.stock;
}

function sumaTotal(subtotal, precio) {
  let total = subtotal + precio;
  return total;
}

function dibujar(producto) {
  const src = producto.imagen;
  const title = producto.nombre;
  const precio = producto.precio;
  const descripcion = producto.descripcion;

  const card = document.createElement("div");
  card.className = "card card-backgroun ";

  const img = document.createElement("img");
  img.src = src;
  img.className = "card-img-top main-imagenes img-catalogo";
  card.appendChild(img);

  const cardBody = document.createElement("div");
  cardBody.className = "card-body card-backgroun";
  card.appendChild(cardBody);

  const h5 = document.createElement("h5");
  h5.className = "card-title main-propiedades-texto03";
  h5.innerHTML = title;
  cardBody.appendChild(h5);

  const divFlex = document.createElement("div");
  divFlex.className = "flex-carrito";
  cardBody.appendChild(divFlex);

  const h3 = document.createElement("h3");
  h3.innerHTML = precio;
  divFlex.appendChild(h3);

  const divButton = document.createElement("div");
  divFlex.appendChild(divButton);

  const button = document.createElement("button");
  button.className = "button-carrito";
  button.innerHTML = "Comprar";
  divButton.appendChild(button);
  button.addEventListener("click", function () {
    agregarCarrito(producto);
  });

  const p = document.createElement("p");
  p.className = "card-text par-2 descripcion";
  p.innerHTML = descripcion;
  divFlex.appendChild(p);

  const catalogo = document.getElementById("catalogo");
  catalogo.appendChild(card);
}

function agregarCarrito(compra) {
  let subtotal = 0;
  if (hayStock(catalogo, compra) > 0) {
    Swal.fire({
      title: "Agregaste tu producto al carrito",
      icon: "success",
    });
    carrito.push(compra);
    localStorage.setItem("cart", JSON.stringify(carrito));
    let precio = obtenerPrecio(catalogo, compra);
    subtotal = sumaTotal(precio, subtotal);
  } else {
    Swal.fire({
      title: "Momentaneamente no contamos con stock del producto",
      icon: "error",
    });
  }
}

function cards() {
  catalogo.forEach((element) => dibujar(element));
}

cards();
