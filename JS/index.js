
const cuerpo = document.body;
const cabecera = document.getElementById('header');
const navegacion = document.createElement('div');
const nav = document.createElement('nav');
const ul = document.createElement('ul');
const links = ["Index", "Products", "Contact"];
// const liImagen = document.createElement('li');
const ORIGEN = document.createElement('a');

cabecera.appendChild(navegacion);
navegacion.appendChild(nav);
nav.appendChild(ul);
navegacion.className = 'navbar';

for (const link of links) {
    const li = document.createElement('li');
    li.innerHTML = `${link.toUpperCase()}`;
    ul.appendChild(li);
}

let nombre = prompt("Ingresa tu nombre:");
do {
    if (nombre === "" || !isNaN(nombre) || nombre.match(/\d/)) {
        alert("Tenes que ingresar un nombre.");
        nombre = prompt("Ingresa tu nombre:");
    } else {
        alert("¡Hola " + nombre + "!");
        break;
    }
} while (nombre === "" || !isNaN(nombre) || nombre.match(/\d/));
console.log("Hola " + nombre +"!");

let contenedor = document.createElement("h2");
contenedor.textContent = `Hola ${nombre} vamos a hacer un simulacro`
document.body.appendChild(contenedor);
// document.getElementById("nombre").value = nombre;

class Vendedor {
    constructor(nombre, apellido, edad, ciudad, zona) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = parseInt(edad);
        this.ciudad = ciudad;
        this.zona = zona;
    }
};
const empleadosVendedores = [];
empleadosVendedores.push(new Vendedor('María', 'García', 32, 'Cañuelas', 'Centro'));
empleadosVendedores.push(new Vendedor('Jaun', 'Pérez', 33, 'La Plata', 'Este'));
empleadosVendedores.push(new Vendedor('Ana', 'Rodríguez', 36, 'Mar del Plata', 'Sudeste'));
empleadosVendedores.push(new Vendedor('Carlo', 'Martínez', 30, 'Bahía Blanca', 'Sudoeste'));
empleadosVendedores.push(new Vendedor('Laura', 'Fernández', 42, 'Tandil', 'Sudoeste'));
empleadosVendedores.push(new Vendedor('Javier', 'López', 51, 'San Nicolás de los Arroyos', 'Noroeste'));
empleadosVendedores.push(new Vendedor('Sofia', 'González', 19, 'Pergamino', 'Noroeste'));
empleadosVendedores.push(new Vendedor('Diego', 'Ramírez', 19, 'Olavarría', 'Sudoeste'));
empleadosVendedores.push(new Vendedor('Paula', 'Sánchez', 39, 'Junín', 'Noroeste'));
empleadosVendedores.push(new Vendedor('Daniel', 'Gómez', 22, 'Necochea', 'Sudeste'));

alert("Vamos a agregar un nuevo vendedor para la provincia de Buenos Aires:");

function agregarVendedor() {
    const nombreNvendedor = prompt("Ingresa el nombre del nuevo vendedor/ra.");
    const apellidoNvendedor = prompt("Ingresa el apellido de " + nombreNvendedor);
    const edadNvendedor = parseInt(prompt("Ingresa la edad de " + nombreNvendedor));
    const ciudadNvendedor = prompt("Ingresa la ciudad donde opera " + nombreNvendedor);
    const zonaNvendedor = prompt("Si Bs. As. capital es el centro, ¿" + ciudadNvendedor + " donde se encuentra?");

    const nuevoVendedor = new Vendedor(nombreNvendedor, apellidoNvendedor, edadNvendedor, ciudadNvendedor, zonaNvendedor);
    empleadosVendedores.push(nuevoVendedor);
}
agregarVendedor();

for (const empleado of empleadosVendedores) {
    console.log(Object(empleado));
}

let listaVendedores = empleadosVendedores
let contenedorLista = document.createElement("div");

for (const vendedor of listaVendedores) {
    let vendedorDiv = document.createElement("div");
    vendedorDiv.innerHTML =
        `<h3>Nombre: ${vendedor.nombre}</h3>
        <ul>
            <li> Apellido: ${vendedor.apellido}.&nbsp</li>
            <li> Edad: ${vendedor.edad},.&nbsp</li>
            <li> Ciudad: ${vendedor.ciudad}.&nbsp  </li>
            <li> Zona: ${vendedor.zona}.&nbsp</li>
        </ul>
    `;
    contenedorLista.appendChild(vendedorDiv);
}
document.body.appendChild(contenedorLista);

do {
    buscarInfoVendedor = parseInt(prompt("¿Que información de vendedor/ra queres buscar?\nEn el siguiente prompt ingresa el número de la opción que elegiste.\n1) Nombre\n2) Apellido\n3) Edad\n4) Ciudad\n5) Zona"));
    if (isNaN(buscarInfoVendedor) || buscarInfoVendedor > 5 || buscarInfoVendedor < 1) {
        alert("El número ingresado no es valido. Tenes que ingresar alguno de estos numeros. \n1) Nombre\n2) Apellido\n3) Edad\n4) Ciudad\n5) Zona");
    }
} while (isNaN(buscarInfoVendedor) || buscarInfoVendedor > 5 || buscarInfoVendedor < 1);
alert("El número ingresado fue " + buscarInfoVendedor);

switch (buscarInfoVendedor) {
    case 1:
        empleadosVendedores.map((i) => console.log(i.nombre));
        break;
    case 2:
        empleadosVendedores.map((i) => console.log("El apellido de " + i.nombre + " es " + i.apellido));
        break;
    case 3:
        empleadosVendedores.map((i) => console.log("La edad de " + i.nombre + " es: " + i.edad));
        break;
    case 4:
        empleadosVendedores.map((i) => console.log("La ciudad donde opera " + i.nombre + " es: " + i.ciudad));
        break;
    case 5:
        empleadosVendedores.map((i) => console.log("La ciudad en la que opera " + i.nombre + " queda en el " + i.zona));
        break;
    default:
        alert("El número ingresado no es valido. Tenes que ingresar alguno de estos numeros. \n1) Nombre\n2) Apellido\n3) Edad\n4) Ciudad\n5) Zona");
}

class ProductosDetalle {
    constructor(nombre, cantidad, categoria, anioVenc, precioSinIva,) {
        this.nombre = nombre;
        this.cantidad = parseInt(cantidad);
        this.categoria = categoria;
        this.anioVenc = parseInt(anioVenc);
        this.precioSinIva = parseFloat(precioSinIva);
    }
    sumarIva() {
        this.precioSinIva = this.precioSinIva * 1.21;
    }
};
const productos = [];
productos.push(new ProductosDetalle('Manzana', 909, 'Alimentos frescos', 2024, 6550));
productos.push(new ProductosDetalle('Leche', 2421, 'Productos lácteos', 2024, 755));
productos.push(new ProductosDetalle('Salmon', 2050, 'Carnes y pescados', 2024, 1402));
productos.push(new ProductosDetalle('Tomate', 0, 'Frutas y verduras', 2026, 2740));
productos.push(new ProductosDetalle('Helado', 2887, 'Productos congelados', 2025, 5027));
productos.push(new ProductosDetalle('Pan francés', 2845, 'Panadería y pastelería', 2020, 3));
productos.push(new ProductosDetalle('Agua', 113, 'Bebidas', 1990, 447));
productos.push(new ProductosDetalle('Detergente', 2975, 'Productos de limpieza', 2023, 4422));
productos.push(new ProductosDetalle('Champú', 920, 'Artículos de cuidado personal', 2024, 4855));
productos.push(new ProductosDetalle('Blem', 3011, 'Productos de cuidado del hogar', 2022, 7456));

let listaProductos = productos
let contenedorListaProductos = document.createElement("section");
contenedorListaProductos.innerHTML = `<h3>Vamos a ver los productos:</h3>`;

for (const productoDom of listaProductos) {
    let productoDiv = document.createElement("article");
    productoDiv.innerHTML =
        `<h4 class="nombre-producto">${productoDom.nombre}.</h4>
        <ul>
            <li> Cantidad: ${productoDom.cantidad}.&nbsp</li>
            <li> Categoria: ${productoDom.categoria}.&nbsp  </li>
            <li> Año de Vencimiento: ${productoDom.anioVenc}.&nbsp</li>
            <li> Precio sin Iva: ${productoDom.precioSinIva}.&nbsp</li>
        </ul>
    `;
    contenedorListaProductos.appendChild(productoDiv);
}
contenedorListaProductos.id = "productosContainer";
document.body.appendChild(contenedorListaProductos);

console.log("Esta es la lista de los productos.");
productos.forEach((productos) => console.log("Nombre: " + productos.nombre + " Año de vencimiento: " + productos.anioVenc));
alert = ("Vamos a ver cual es el prodcuto que tiene el precio mas bajo.");
console.log("Vamos a ver cual es el prodcuto que tiene el precio mas bajo.");

let buscarInfoProductos = prompt("Ingresar letra o palabra dentro de nombre producto:");
console.log("Ingresaste: " + buscarInfoProductos + ", los productos que contienen lo ingresado son:");

let productosFiltrados = productos.filter((producto) => producto.nombre.includes(buscarInfoProductos));
productosFiltrados.forEach((producto) => console.log(producto.nombre));

const productoPrecioMinimo = productos.find(producto => {
    return producto.precioSinIva === productos.reduce((minPrecio, p) => p.precioSinIva < minPrecio ? p.precioSinIva : minPrecio, productos[0].precioSinIva);
});
console.log("El producto con menor precio es " + productoPrecioMinimo.nombre + " y su precio es " + productoPrecioMinimo.precioSinIva);