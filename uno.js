/* Debemos realizar la carga de una compra de 5(cinco) productos de desinfección
de cada una debo obtener los siguientes datos:
el nombre del producto el tipo de producto (validar "ALCOHOL", "IAC" o "QUAT"),
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
Categoria ("desinfectante", "bactericida", "detergente" ) 
y el fabricante.

Se debe Informar al usuario lo siguiente:
a) El promedio de cantidad por tipo de producto
b) La categoria con mas cantidad de unidades en total de la compra
c) Cuántas unidades de detergente con precios menos a 200 (inclusive) se compraron en total
d) el fabricante y Categoria del más caro de los productos */

function mostrar() {
  // A
  let acumCantAlcohol = 0;
  let contAlcohol = 0;

  let acumCantIac = 0;
  let contIac = 0;

  let acumCantQuat = 0;
  let contQuat = 0;

  // B
  let acumDesinfectante = 0;
  let acumBactericida = 0;
  let acumDetergente = 0;

  // C
  let acumDetergenteMenor = 0;

  // D
  let precioProductoCaro = 0;
  let categoriaProductoCaro;
  let fabricanteProductoCaro;
  let flagProductoCaro = 1;

  for (let i = 0; i < 5; i++) {
    // TIPO PRODUCTO
    let tipo = prompt('Ingrese tipo de producto ("ALCOHOL", "IAC" o "QUAT"): ');

    tipo = tipo.toLowerCase();

    while (tipo != 'alcohol' && tipo != 'iac' && tipo != 'quat') {
      tipo = prompt(
        'Ingreso incorrecto. Ingrese tipo de producto ("ALCOHOL", "IAC" o "QUAT"):'
      );
      tipo = tipo.toLowerCase();
    }

    // PRECIO
    let precio = parseFloat(prompt('Ingrese precio (entre 100 y 300): '));

    while (precio < 100 || precio > 300 || isNaN(precio)) {
      precio = parseFloat(
        prompt('Ingreso incorrecto. Ingrese precio (entre 100 y 300):  ')
      );
    }

    // UNIDADES
    let unidades = parseInt(prompt('Ingrese unidades (entre 1 y 1000): '));

    while (unidades < 1 || unidades > 1000 || isNaN(unidades)) {
      unidades = parseInt(
        prompt('Ingreso incorrecto. Ingrese unidades (entre 1 y 1000):  ')
      );
    }

    // CATEGORIA
    let categoria = prompt(
      'Ingrese categoria (desinfectante, bactericida, detergente): '
    );

    categoria = categoria.toLowerCase();

    while (
      categoria != 'desinfectante' &&
      categoria != 'bactericida' &&
      categoria != 'detergente'
    ) {
      categoria = prompt(
        'Ingreso incorrecto. Ingrese categoria (desinfectante, bactericida, detergente):'
      );
      categoria = categoria.toLowerCase();
    }

    // FABRICANTE
    let fabricante = prompt('Ingrese fabricante: ');

    /* -------------------------------------------- */
    /*                    LOGICA                    */
    /* -------------------------------------------- */

    // A
    if (tipo == 'alcohol') {
      acumCantAlcohol += unidades;
      contAlcohol++;
    } else if (tipo == 'iac') {
      acumCantIac += unidades;
      contIac++;
    } else if (tipo == 'quat') {
      acumCantQuat += unidades;
      contQuat++;
    }

    // B
    if (categoria == 'desinfectante') {
      acumDesinfectante += unidades;
    } else if (categoria == 'bactericida') {
      acumBactericida += unidades;
    } else if (categoria == 'detergente') {
      acumDetergente += unidades;
    }

    // C
    if (categoria == 'detergente' && precio <= 200) {
      acumDetergenteMenor += unidades;
    }

    // D
    if (flagProductoCaro || precio > precioProductoCaro) {
      precioProductoCaro = precio;
      fabricanteProductoCaro = fabricante;
      categoriaProductoCaro = categoria;

      flagProductoCaro = 0;
    }
  }

  // INFORMAR A
  if (contAlcohol != 0) {
    let promedioAlcohol = acumCantAlcohol / contAlcohol;
    console.log(`El promedio de alcohol es ${promedioAlcohol}`);
  } else {
    console.log('No se ingreso alcohol');
  }

  if (contIac != 0) {
    let promedioIac = acumCantIac / contIac;
    console.log(`El promedio de Iac es ${promedioIac}`);
  } else {
    console.log('No se ingreso Iac');
  }

  if (contQuat != 0) {
    let promedioQuat = acumCantQuat / contQuat;
    console.log(`El promedio de Quat es ${promedioQuat}`);
  } else {
    console.log('No se ingreso Quat');
  }

  // INFORMAR B
  if (
    acumDesinfectante > acumBactericida &&
    acumDesinfectante > acumDetergente
  ) {
    console.log(`La categoria con más cantidad de unidades es Desinfectante.`);
  } else if (
    acumBactericida >= acumDesinfectante &&
    acumBactericida > acumDetergente
  ) {
    console.log('La categoria con más cantidad de unidades es el Bactericida.');
  } else {
    console.log('La categoria con más cantidad de unidades es el Detergente.');
  }

  // INFORMAR C
  console.log(
    `Unidades de Detergente con precios menos a 200 en total son ${acumDetergenteMenor} `
  );

  // INFORMAR D
  console.log(
    `El fabricante y la categoria del más caro de los productos son marca ${fabricanteProductoCaro}, del tipo ${categoriaProductoCaro}`
  );
}
