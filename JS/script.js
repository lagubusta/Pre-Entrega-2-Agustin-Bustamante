//           Se necesita,
//           Estructura HTML
//           Variables JS necesarias:
// OK                  - Arrays;
// OK                  - Metodos;
// OK                  - Objetos;
// OK           - Metodos de busqueda (find()) y filtrado sobre el Array (filter())
//           Proceso requerido:
//           - Capturar entradas mediante prompt().
//           - Declarar variables y objetos necesarios para simular el proceso seleccionado.
//           - Crear funciones y/o métodos para realizar operaciones.
//           - Y finalmente, efectuar una salida, que es el resultado de los datos procesados, la cual puede hacerse por alert() o console.log().*

//////////////////////////////////////////////////////////////////////////////// PESTAÑAS - INICIO
class itemNavBar {
    constructor(titulo) {
        this.titulo = titulo;
    }
};
const navegador = [];
navegador.push (new itemNavBar('Inicio'));
navegador.push (new itemNavBar('Vendedores'));
navegador.push (new itemNavBar('Productos'));
let navLista = document.createElement("nav");

// let listaNav = navegador;

for(const item of navegador){
    let nuevoItem = document.createElement("li");
    nuevoItem.innerHTML = item.titulo;
    navLista.appendChild(nuevoItem);
}
document.body.appendChild(navLista);

//////////////////////////////////////////////////////////////////////////////// PESTAÑAS - FIN



//////////////////////////////////////////////////////////////////////////////// VENDEDORES - INICIO
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

///////////////// DOM - INICIO
let contenedor = document.createElement("h2");
contenedor.textContent = `Hola ${nombre} vamos a hacer un simulacro`
document.body.appendChild(contenedor);
document.getElementById("nombre").velue = nombre;
///////////////// DOM - FIN
//////////////////////////////////////////////////////////////////////////////// PROMPT INICIO - FIN
//////////////////////////////////////////////////////////////////////////////// VENDEDORES - INICIO
class vendedores {
    constructor(nombre, apellido, edad, ciudad, zona) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = parseInt(edad);
        this.ciudad = ciudad;
        this.zona = zona;
    }
};

const empleadosVendedores = [];
empleadosVendedores.push(new vendedores('María', 'García', 32, 'Cañuelas', 'Centro'));
empleadosVendedores.push(new vendedores('Jaun', 'Pérez', 33, 'La Plata', 'Este'));
empleadosVendedores.push(new vendedores('Ana', 'Rodríguez', 36, 'Mar del Plata', 'Sudeste'));
empleadosVendedores.push(new vendedores('Carlo', 'Martínez', 30, 'Bahía Blanca', 'Sudoeste'));
empleadosVendedores.push(new vendedores('Laura', 'Fernández', 42, 'Tandil', 'Sudoeste'));
empleadosVendedores.push(new vendedores('Javier', 'López', 51, 'San Nicolás de los Arroyos', 'Noroeste'));
empleadosVendedores.push(new vendedores('Sofia', 'González', 19, 'Pergamino', 'Noroeste'));
empleadosVendedores.push(new vendedores('Diego', 'Ramírez', 19, 'Olavarría', 'Sudoeste'));
empleadosVendedores.push(new vendedores('Paula', 'Sánchez', 39, 'Junín', 'Noroeste'));
empleadosVendedores.push(new vendedores('Daniel', 'Gómez', 22, 'Necochea', 'Sudeste'));
///////////////////////////////////// AGREGAR NUEVO VENDEDOR
alert("Vamos a agregar un nuevo vendedor para la provincia de Buenos Aires:");

let nuevoVendedorNombre = prompt("Ingresa el nombre del nuevo vendedor/ra.");
let nuevoVendedorApellido = prompt("Ingresa el Apellido de " + nuevoVendedorNombre);
let nuevoVendedorEdad = parseInt(prompt("Ingresa la edad de " + nuevoVendedorNombre));
let nuevoVendedorCiudad = prompt("Ingresa la ciudad donde opera " + nuevoVendedorNombre);
let nuevoVendedorZona = prompt("Si Bs. As. capital es el centro, ¿" + nuevoVendedorCiudad + " donde se encuentra?");

let ingresarNuevoVendedor = empleadosVendedores.push(new vendedores(nuevoVendedorNombre, nuevoVendedorApellido, nuevoVendedorEdad, nuevoVendedorCiudad, nuevoVendedorZona));

for (const empleado of empleadosVendedores) {
    console.log(Object.values(empleado));
}

//////////////////////////////////////////////////////////////////////////////// DOM - INICIO
let listaVendedores = empleadosVendedores
let contenedorLista = document.createElement("div");

for (const vendedor of listaVendedores) {
    let vendedorDiv = document.createElement("div");
    vendedorDiv.innerHTML = `
    <h3>Nombre: ${vendedor.nombre}</h3>
        <ul>
            <li>Apellido: ${vendedor.apellido},  </li>
            <li>Edad: ${vendedor.edad},  </li>
            <li>Ciudad: ${vendedor.ciudad},  </li>
            <li>Zona: ${vendedor.zona}.  </li>
        </ul>
    `;
    contenedorLista.appendChild(vendedorDiv);
}
document.body.appendChild(contenedorLista);
//////////////////////////////////////////////////////////////////////////////// DOM - FIN


///////////////////////////////////// AGREGAR NUEVO VENDEDOR
///////////////////////////////////// APLICAR MAP

// do {
//     buscarInfoVendedor = parseInt(prompt("¿Que información de vendedor/ra queres buscar?\nEn el siguiente prompt ingresa el número de la opción que elegiste.\n1) Nombre\n2) Apellido\n3) Edad\n4) Ciudad\n5) Zona"));

//     if (isNaN(buscarInfoVendedor) || buscarInfoVendedor > 5 || buscarInfoVendedor < 1) {
//         alert("El número ingresado no es valido. Tenes que ingresar alguno de estos numeros. \n1) Nombre\n2) Apellido\n3) Edad\n4) Ciudad\n5) Zona");
//     }
// } while (isNaN(buscarInfoVendedor) || buscarInfoVendedor > 5 || buscarInfoVendedor < 1);
// alert("El número ingresado fue " + buscarInfoVendedor);

// switch (buscarInfoVendedor) {
//     case 1:
//         empleadosVendedores.map((i) => console.log(i.nombre));
//         break;
//     case 2:
//         empleadosVendedores.map((i) => console.log("El apellido de " + i.nombre + " es " + i.apellido));
//         break;
//     case 3:
//         empleadosVendedores.map((i) => console.log("La edad de " + i.nombre + " es: " + i.edad));
//         break;
//     case 4:
//         empleadosVendedores.map((i) => console.log("La ciudad donde opera " + i.nombre + " es: " + i.ciudad));
//         break;
//     case 5:
//         empleadosVendedores.map((i) => console.log("La ciudad en la que opera " + i.nombre + " queda en el " + i.zona));
//         break;
//     default:
//         alert("El número ingresado no es valido. Tenes que ingresar alguno de estos numeros. \n1) Nombre\n2) Apellido\n3) Edad\n4) Ciudad\n5) Zona");
// }
/////////////////////////////////////// APLICAR MAP
//////////////////////////////////////////////////////////////////////////////// VENDEDORES - FIN
//////////////////////////////////////////////////////////////////////////////// PRODUCTOS - INICIO
// class productosDetalle {
//     constructor(nombre, cantidad, categoria, fechaVenc, precioSinIva,) {
//         this.nombre = nombre;
//         this.cantidad = parseInt(cantidad);
//         this.categoria = categoria;
//         this.fechaVenc = new Date(fechaVenc);
//         this.precioSinIva = parseFloat(precioSinIva);
//     }
//     sumarIva() {
//         this.precioSinIva = this.precioSinIva * 1.21;
//     }
// };
// const productos = [];
// productos.push(new productosDetalle('Manzana', 909, 'Alimentos frescos', 17 / 6 / 2024, 6550));
// productos.push(new productosDetalle('Leche', 2421, 'Productos lácteos', 2 / 2 / 2024, 755));
// productos.push(new productosDetalle('Salmon', 2050, 'Carnes y pescados', 23 / 10 / 2024, 1402));
// productos.push(new productosDetalle('Tomate', 0, 'Frutas y verduras', 18 / 7 / 2024, 2740));
// productos.push(new productosDetalle('Helado', 2887, 'Productos congelados', 7 / 3 / 2024, 5027));
// productos.push(new productosDetalle('Pan francés', 2845, 'Panadería y pastelería', 19 / 1 / 2024, 3));
// productos.push(new productosDetalle('Agua', 113, 'Bebidas', 5 / 12 / 2024, 447));
// productos.push(new productosDetalle('Detergente', 2975, 'Productos de limpieza', 15 / 8 / 2024, 4422));
// productos.push(new productosDetalle('Champú', 920, 'Artículos de cuidado personal', 2 / 9 / 2024, 4855));
// productos.push(new productosDetalle('Blem', 3011, 'Productos de cuidado del hogar', 20 / 4 / 2024, 7456));

// /////////////////////////////////////// APLICAR FILTER

// alert = ("Vamos a ver cual es el prodcuto que tiene el precio mas bajo.")
// let buscarInfoProductos = prompt("Ingresar letra o palabra dentro de nombre producto:");

// let productosFiltrados = productos.filter((producto) => producto.nombre.includes(buscarInfoProductos));
// productosFiltrados.forEach((producto)=> console.log(producto.nombre));

// /////////////////////////////////////// APLICAR FILTER
// const productoPrecioMinimo = productos.find(producto => {
//     return producto.precioSinIva === productos.reduce((minPrecio, p) => p.precioSinIva < minPrecio ? p.precioSinIva : minPrecio, productos[0].precioSinIva);
// });
// console.log("El producto con menor precio es " + productoPrecioMinimo.nombre +" y su precio es " +productoPrecioMinimo.precioSinIva );

//////////////////////////////////////////////////////////////////////////////// PRODUCTOS - FIN

//////////////////////////////////////////////////////////////////////////////// DOM - INICIO


//////////////////////////////////////////////////////////////////////////////// DOM - FIN