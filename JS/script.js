//           Se necesita,
//           Estructura HTML
//           Variables JS necesarias:
//                  - Arrays;
//                  - Metodos;
//                  - Objetos;
//           - Metodos de busqueda (find()) y filtrado sobre el Array (filter())
//           Proceso requerido:
//           - Capturar entradas mediante prompt().
//           - Declarar variables y objetos necesarios para simular el proceso seleccionado.
//           - Crear funciones y/o métodos para realizar operaciones.
//           - Y finalmente, efectuar una salida, que es el resultado de los datos procesados, la cual puede hacerse por alert() o console.log().*




/* prompt("Ingresa tu nombre:");
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
*/

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

let buscarInfoVendedor = parseInt(prompt("¿Que información de vendedor/ra queres buscar?\nEn el siguiente prompt ingresa el número de la opción que elegiste.\n1) Nombre\n2) Apellido\n3) Edad\n4) Ciudad\n5) Zona"));

do {
    if (isNaN(buscarInfoVendedor)) {
        buscarInfoVendedor = parseInt(prompt("Ingresa uno de los siguientes valores:\nRecuerda:\n1) Nombre\n2) Apellido\n3) Edad\n4) Ciudad\n5) Zona"));
    }
    while (isNaN(buscarInfoVendedor) || buscarInfoVendedor < 1 || buscarInfoVendedor > 5);
}

    switch (buscarInfoVendedor) {
    case 1:
        console.log(empleadosVendedores.map((i) => i.nombre));
        break;
    case 2:
        console.log(empleadosVendedores.map((i) => i.apellido));
        break;
    case 3:
        console.log(empleadosVendedores.map((i) => i.edad));
        break;
    case 4:
        console.log(empleadosVendedores.map((i) => i.ciudad));
        break;
    case 5:
        console.log(empleadosVendedores.map((i) => i.zona));
        break;
    default:
        alert("El dato ingresado no es valido");
}






/////////////////////////////////////// APLICAR FIND








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
//     sumarIva(){
//         this.precioSinIva = this.precioSinIva *1.21;
//     }
// };
// const productos = [];
// productos.push(new productosDetalle('Manzana', 909, 'Alimentos frescos', 17/6/2024, 6550));
// productos.push(new productosDetalle('Leche', 2421, 'Productos lácteos', 2/2/2024, 755));
// productos.push(new productosDetalle('Salmon', 2050, 'Carnes y pescados', 23/10/2024, 1402));
// productos.push(new productosDetalle('Tomate', 0, 'Frutas y verduras', 18/7/2024, 2740));
// productos.push(new productosDetalle('Helado', 2887, 'Productos congelados', 7/3/2024, 5027));
// productos.push(new productosDetalle('Pan francés', 2845, 'Panadería y pastelería', 19/1/2024, 5031));
// productos.push(new productosDetalle('Agua', 113, 'Bebidas', 5/12/2024, 447));
// productos.push(new productosDetalle('Detergente', 2975, 'Productos de limpieza', 15/8/2024, 4422));
// productos.push(new productosDetalle('Champú', 920, 'Artículos de cuidado personal', 2/9/2024, 4855));
// productos.push(new productosDetalle('Blem', 3011, 'Productos de cuidado del hogar', 20/4/2024, 7456));

//////////////////////////////////////////////////////////////////////////////// PRODUCTOS - FIN



// { nombre: "María", apellido: "García", edad: 32, ciudad: "Cañuelas", zona: "Centro" },
// { nombre: "Jaun", apellido: "Pérez", edad: 33, ciudad: "La Plata", zona: "Este" },
// { nombre: "Ana", apellido: "Rodríguez", edad: 36, ciudad: "Mar del Plata", zona: "Sudeste" },
// { nombre: "Carlo", apellido: "Martínez", edad: 30, ciudad: "Bahía Blanca", zona: "Sudoeste" },
// { nombre: "Laura", apellido: "Fernández", edad: 42, ciudad: "Tandil", zona: "Sudoeste" },
// { nombre: "Javier", apellido: "López", edad: 51, ciudad: "San Nicolás de los Arroyos", zona: "Noroeste" },
// { nombre: "Sofia", apellido: "González", edad: 19, ciudad: "Pergamino", zona: "Noroeste" },
// { nombre: "Diego", apellido: "Ramírez", edad: 19, ciudad: "Olavarría", zona: "Sudoeste" },
// { nombre: "Paula", apellido: "Sánchez", edad: 39, ciudad: "Junín", zona: "Noroeste" },
// { nombre: "Daniel", apellido: "Gómez", edad: 22, ciudad: "Necochea", zona: "Sudeste" },


