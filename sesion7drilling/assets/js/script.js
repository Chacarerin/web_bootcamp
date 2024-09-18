function funcion01(){
    var opcion1 = prompt ("Seleccione una opción\n1.- Ver Boleta\n2.- Pagar cuenta")

switch (opcion1){
    case"1":
        alert("haga click para descargar su boleta")
    break;
    case "2":
        alert("Usted está siendo transferido. Espere por favor...")
    break;
    default:
        alert("opción inválida")
}

}

function funcion02(){

    var opcion2 = prompt ("Seleccione una opción\n1.- Problemas con la señal\n2.- Problemas con las llamadas")

    var solicitud = prompt("A continuación escriba su consulta")

    alert("Estimado usuario, su consulta:" + " " + "'" + solicitud + "'" + " " + "ha sido ingresada con éxito.\nPronto será contactado por uno de nuestros ejecutivos.")

}

function funcion03(){
    var solicitud = prompt ("¡Mentel tiene una oferta comercial acorde a tus necesidades!\nPara conocer más información y ser asesorado personalmente por un ejecutivo escribe 'SI' y un ejecutivo te llamará. De lo contrario ingrese 'NO'")

switch (solicitud){
    case"SI":
        alert("Un ejecutivo se contactará con usted.")
    break;
    case "NO":
        alert("Gracias por preferir nuestros servicios.")
    break;
    default:
        alert("opción inválida")
}

}

function funcion04(){
    

    var solicitud = prompt("A continuación escriba su solicitud")

    alert("Estimado usuario, su solicitud:" + " " + solicitud + " " + "ha sido ingresada con éxito.\nPronto será contactado por uno de nuestros ejecutivos.")

}

var opcion = prompt("¡Hola! Soy Eva, tu asistente virtual del Servicio al Cliente de Mentel. Estoy aquí para ayudarte en lo que necesides.\nEscribe el número de la opción que buscas: \n1.- Boletas y Pagos \n2.- Señal y llamadas \n3.- Oferta comercial  \n4.- Otras consultas")

//FUNCIONES

switch (opcion) {
    case "1":
        funcion01();
    break;
    case "2":
        funcion02();
    break;
    case "3":
        funcion03();
    break;
    case "4":
        funcion04()
    break;
    default:
        alert("La opción ingresada no es válida. Gracias por preferir nuestros servicios.")
        break;
}