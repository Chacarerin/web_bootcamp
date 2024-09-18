var RUT01, RUT02, RUT03;
RUT01 = "12345678-9";
RUT02 = "987654321-0";
RUT03 = "111222333-4";
var pass01, pass02, pass03;
pass01 = "spider";
pass02 = "batman";
pass03 = "superman";
var nombre01, nombre02, nombre03;
nombre01 = "Peter Parker";
nombre02 = "Bruce Wayne";
nombre03 = "Clark Kent";
var saldo01, saldo02, saldo03;
saldo01 = parseInt (5000);
saldo02 = parseInt (100000000000);
saldo03 = parseInt (10000000);


// funciones para cada usuario

function funcion01(){
    bienvenida = alert("Bienvenido a tu banco en línea" + " " + nombre01 + ".")
    
    let saldonuevo = saldo01;

    do {
    var opcion01 = prompt ("Seleccione una opción\n1.- Ver Saldo\n2.- Realizar giro\n3.- Realizar depósito\n4.- Salir")

switch (opcion01){
    case"1":
        alert("su saldo actual es de" + " " + saldonuevo + ".")
    break;
    case "2":
        var giro01 = parseInt(prompt("Su saldo actual es de" + " " + saldonuevo + ".\n Ingrese el monto que desea girar:"))
        saldonuevo -= giro01;
        alert("Giro realizado. Su nuevo saldo es" + " " + (saldonuevo) + ".")
    break;
    case "3":
        var dep01 = parseInt(prompt("Su saldo actual es de" + " " + saldonuevo + ".\n Ingrese el monto que desea depositar:"))
        saldonuevo += dep01
        alert("Deposito realizado. Su nuevo saldo es" + " " + saldonuevo + ".")
    break;
    case "4":
        alert("Gracias" + " " + nombre01 + " " + "por utilizar tu banca en línea.")
    break;
    default:
        error = (alert("Error, opción no válida."))
    }

} while(opcion01 !== "4");
}


function funcion02(){
    bienvenida = alert("Bienvenido a tu banco en línea" + " " + nombre02 + ".")
    
    let saldonuevo = saldo02;

    do {
    var opcion02 = prompt ("Seleccione una opción\n1.- Ver Saldo\n2.- Realizar giro\n3.- Realizar depósito\n4.- Salir")

switch (opcion02){
    case"1":
        alert("su saldo actual es de" + " " + saldonuevo + ".")
    break;
    case "2":
        var giro02 = parseInt(prompt("Su saldo actual es de" + " " + saldonuevo + ".\n Ingrese el monto que desea girar:"))
        saldonuevo -= giro02;
        alert("Giro realizado. Su nuevo saldo es" + " " + (saldonuevo) + ".")
    break;
    case "3":
        var dep02 = parseInt(prompt("Su saldo actual es de" + " " + saldonuevo + ".\n Ingrese el monto que desea depositar:"))
        saldonuevo += dep02
        alert("Deposito realizado. Su nuevo saldo es" + " " + saldonuevo + ".")
    break;
    case "4":
        alert("Gracias" + " " + nombre02 + " " + "por utilizar tu banca en línea.")
    break;
    default:
        error = (alert("Error, opción no válida."))
    }

} while(opcion02 !== "4");
}


function funcion03(){
    bienvenida = alert("Bienvenido a tu banco en línea" + " " + nombre03 + ".")
    
    let saldonuevo = saldo03;

    do {
    var opcion03 = prompt ("Seleccione una opción\n1.- Ver Saldo\n2.- Realizar giro\n3.- Realizar depósito\n4.- Salir")

switch (opcion03){
    case"1":
        alert("su saldo actual es de" + " " + saldonuevo + ".")
    break;
    case "2":
        var giro03 = parseInt(prompt("Su saldo actual es de" + " " + saldonuevo + ".\n Ingrese el monto que desea girar:"))
        saldonuevo -= giro03;
        alert("Giro realizado. Su nuevo saldo es" + " " + (saldonuevo) + ".")
    break;
    case "3":
        var dep03 = parseInt(prompt("Su saldo actual es de" + " " + saldonuevo + ".\n Ingrese el monto que desea depositar:"))
        saldonuevo += dep03
        alert("Deposito realizado. Su nuevo saldo es" + " " + saldonuevo + ".")
    break;
    case "4":
        alert("Gracias" + " " + nombre03 + " " + "por utilizar tu banca en línea.")
    break;
    default:
        error = (alert("Error, opción no válida."))
    }

} while(opcion03 !== "4");
}

// Inicio página

rut = (prompt("Bienvenido a tu Banco.\nPor favor ingresa tu RUT, sin puntos y con guión."))

switch (rut){
    case(RUT01):
        password = (prompt("Ingresa tu contraseña"));
    break;
    case(RUT02):
        password = (prompt("Ingresa tu contraseña"));
    break;
    case(RUT03):
        password = (prompt("Ingresa tu contraseña"));
    break;
    default:
        error = (alert("Error, usuario no registrado."))
}

switch (password){
    case(pass01):
        funcion01()
    break;
    case(pass02):
        funcion02()
    break;
    case(pass03):
        funcion03()
    break;
    default:
        error = (alert("Error, usuario no registrado."))
} 

