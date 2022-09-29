//Declaracion de variables
const carrito = [];
const productos = [];

//Construccion de objetos
class producto {
  constructor(id, nombre, precio, stock, img) {
    this.id = id;
    this.nombre = nombre;
    this.precio = precio;
    this.stock = stock;
    this.img = img;
  }
  sumarIva() {
    return (this.precio = this.precio * 1), 21;
  }
}

const producto1 = new producto(1, "bondiola macerada x 100 grs", 340, 3, "resources/bondiola.jpg");
productos.push(producto1);
const producto2 = new producto(2, "jamon crudo serrano x100 grs", 450, 4, "resources/crudo.jpg");
productos.push(producto2);
const producto3 = new producto(3, "queso fontina x100 grs", 250, 6, "resources/fontina.jpg");
productos.push(producto3);
const producto4 = new producto(4, "mortadela x100 grs", 180, 2, "resources/mortadela.jpg");
productos.push(producto4);
const producto5 = new producto(5, "queso azul x100 grs", 290, 2, "resources/quesoazul.jpg");
productos.push(producto5);
const producto6 = new producto(6, "salamin", 550, 3, "resources/salamin.jpg");
productos.push(producto6);

//Funciones
function agregarAlCarrito(producto) {
  let buscarProducto = carrito.find(item => item.id === producto.id)
  if (buscarProducto !== undefined) {
    buscarProducto.precio = buscarProducto.precio + producto.precio
    buscarProducto.cantidad = buscarProducto.cantidad + 1
  } else {
    carrito.push({
      id: producto.id,
      nombre: producto.nombre,
      precio: producto.precio,
      img: producto.img,
      cantidad: 1
    })
  }
}

//DOM
productos.forEach((producto) => {
  let cards = document.querySelector(".cards")
  let div = document.createElement("div")

  div.innerHTML = `
  <img src="${producto.img}">
  <h3>${producto.nombre}</h3>
  <p>$${producto.precio}</p>
  <button id=${producto.id} class="btn">Agregar al Carrito</button>
  `
  div.className = "card"
  cards.append(div)

  const boton = document.getElementById(producto.id)
  boton.addEventListener("click", () => agregarAlCarrito(producto))
})

//Muestro los productos que se encuentran en el carrito
const carritoBtn = document.getElementById("carrito")
carritoBtn.addEventListener("click", () => console.log(carrito))