/* Bienvenidos.
debemos alquilar el servicio de transporte para llegar a Mar del Plata con un grupo de personas, de cada persona debemos optener los siguientes datos:
Nombre,
Obra Social ("PAMI", "OSDE" o "otras"),
edad( solo mayores de edad, mas de 17),
temperatura corporal(validar por favor)
y sexo (validar).
NOTA:el precio por pasajero es de $600.

Se debe informar (solo si corresponde):

a) La cantidad de personas con OSDE de mas de 60 años.
b) el nombre y temperatura de la mujer de pami mas joven.
c) cuanto sale el viaje total sin descuento.
d) si hay mas del 50% de los pasajeros que pertenecen a PAMI, el precio final tiene un descuento del 25%, que solo mostramos si corresponde. */

function mostrar() {
  // A
  let contOsceMas60 = 0;

  // B
  let edadMujerPamiJoven;
  let nombreMujerPamiJoven;
  let temperaturaMujerPamiJoveni;
  let flagMujerPami = 1;

  // C
  let precioIndividual = 600;
  let contPasajeros = 0;

  // D
  let contPasajeroPami = 0;
  let descuento = 0.25;

  /* ------------------- DATOS ------------------ */
  let seguir;

  do {
    // NOMBRE
    let nombre = prompt('Ingrese el nombre del pasajero: ');

    // OBRA SOCIAL
    let obraSocial = prompt('Ingrese obra social (PAMI, OSDE, otras): ');
    obraSocial = obraSocial.toLowerCase();

    while (
      obraSocial != 'pami' &&
      obraSocial != 'osde' &&
      obraSocial != 'otras'
    ) {
      obraSocial = prompt(
        'Ingreso incorrecto. Ingrese obra social (PAMI, OSDE, otras)::'
      );
      obraSocial = obraSocial.toLowerCase();
    }

    // EDAD
    let edad = parseInt(prompt('Ingrese edad (18+): '));

    while (edad < 18 || isNaN(edad)) {
      edad = parseInt(prompt('Ingreso incorrecto. Ingrese edad (18+):  '));
    }

    // TEMPERATURA
    let temperatura = parseFloat(prompt('Ingrese temperatura: '));

    while (temperatura < 1 || isNaN(temperatura)) {
      temperatura = parseFloat(
        prompt('Ingreso incorrecto. Ingrese temperatura:  ')
      );
    }

    // SEXO
    let sexo = prompt('Ingrese sexo (f / m): ');
    sexo = sexo.toLowerCase();

    while (sexo != 'm' && sexo != 'f') {
      sexo = prompt('Ingreso incorrecto. Ingrese sexo (f / m):');
      sexo = sexo.toLowerCase();
    }

    /* ------------------ LOGICA ------------------ */

    // A
    if (obraSocial == 'osde' && edad > 60) {
      contOsceMas60++;
    }

    // B
    if (
      obraSocial == 'pami' &&
      sexo == 'f' &&
      (flagMujerPami || edad < edadMujerPamiJoven)
    ) {
      edadMujerPamiJoven = edad;
      nombreMujerPamiJoven = nombre;
      temperaturaMujerPamiJoveni = temperatura;
      flagMujerPami = 0;
    }

    // C
    contPasajeros++;

    // D
    if (obraSocial == 'pami') {
      contPasajeroPami++;
    }

    seguir = prompt('Desea seguir? (s): ');
  } while (seguir == 's');

  /* ---------------- INFORMAR A ---------------- */
  if (contOsceMas60 > 0) {
    console.log(
      `La cantidad de personas con OSDE de mas de 60 años es: ${contOsceMas60}`
    );
  } else {
    console.log('No personas con OSDE de más de 60 años');
  }

  /* ---------------- INFORMAR B ---------------- */
  if (flagMujerPami == 0) {
    console.log(
      `Mujer de PAMI mas joven es: ${nombreMujerPamiJoven}, su temperatura es: ${temperaturaMujerPamiJoveni}`
    );
  } else {
    console.log('No hay mujeres en PAMI');
  }

  /* --------------------- C -------------------- */

  let precioTotalSinDescuento;

  if (contPasajeros != 0) {
    precioTotalSinDescuento = contPasajeros * precioIndividual;
    console.log(
      `El viaje sale sin descuento un total de ${precioTotalSinDescuento}`
    );
  } else {
    console.log('No hay pasajeros');
  }

  /* --------------------- D -------------------- */

  let porcentajeDePami;
  let precioFinalConDescuento;

  if (contPasajeroPami != 0) {
    porcentajeDePami = (contPasajeroPami * 100) / contPasajeros;

    if (porcentajeDePami > 50) {
      precioFinalConDescuento =
        precioTotalSinDescuento - precioTotalSinDescuento * descuento;

      console.log(
        `Hay mas del 50% de pasajeros de PAMI, el precio final con descuento es: ${precioFinalConDescuento}`
      );
    }
  }
}
