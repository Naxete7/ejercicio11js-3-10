var dia = prompt("Introduzca el dia que quiera")

switch (dia) {
    case "lunes":
    case "martes":
    case "miercoles":
    case "jueves":
    case "viernes":

        console.log("dia laboral");
        break;
    case "sábado":
    case "domingo":

        console.log("dia no laboral");
        break;
}