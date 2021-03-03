/* Realizar el algoritmo que permita ingresar los datos de los alumnos de una division de la UTN FRA, los datos solicitados son:

nombre
situcación laboral ("buscando" , "trabajando" o "solo estudiante")
cantidad de materias( mas de cero y menos de 8)
Sexo ( femenino , masculino , no binario)
Nota promedio (entre 0 y 10)
edad (validar)
se debe informar de existir, o informar que no existe , en el caso que corresponda.

a) El nombre del mejor promedio de los que no tarbajan o estan buscando
b) El nombre del mas viejo de los alumnos que solo sea estudiantes
c) El promedio de nota por situacion laboral
d) La edad y nombre del que cursa menos cantidad de materias y que este buscando trabajo */

function mostrar() {
  // A
  let mayorPromedio;
  let nombreMayorPromedio;
  let flagMayorPromedio = 1;

  // B
  let edadViejoEstudiante;
  let nombreViejoEstudiante;
  let flagViejoEstudiante = 1;

  // C
  let acumNotaBusc = 0;
  let contBusc = 0;

  let acumNotaTrabaj = 0;
  let contTrabaj = 0;

  let acumEstudia = 0;
  let contEstudia = 0;

  // D
  let menorMateriasNoTrabaja;
  let nombreMenorMateriasNoTrabaja;
  let edadMenorMateriasNoTrabaja;
  let flagMenorMaterias = 1;

  /* ------------------- DATOS ------------------ */
  let seguir;

  do {
    // NOMBRE
    let nombre = prompt('Ingrese su nombre: ');

    // TIPO CURSADA
    let situacionLaboral = prompt(
      'Ingrese su situacion laboral (buscando / trabajando / solo estudiante): '
    );

    situacionLaboral = situacionLaboral.toLowerCase();

    while (
      situacionLaboral != 'buscando' &&
      situacionLaboral != 'trabajando' &&
      situacionLaboral != 'solo estudiante'
    ) {
      situacionLaboral = prompt(
        'Ingreso incorrecto. Ingrese su situacion laboral (buscando / trabajando / solo estudiante):'
      );
      situacionLaboral = situacionLaboral.toLowerCase();
    }

    // CANTIDAD DE MATERIAS
    let cantidadMaterias = parseInt(
      prompt('Ingrese cantidad de materias (mas de 0, menos de 8): ')
    );

    while (
      cantidadMaterias < 1 ||
      cantidadMaterias > 8 ||
      isNaN(cantidadMaterias)
    ) {
      cantidadMaterias = parseInt(
        prompt(
          'Ingreso incorrecto. Ingrese cantidad de materias (mas de 0, menos de 8):  '
        )
      );
    }

    // SEXO
    let sexo = prompt('Ingrese sexo (femenino, masculino, no binario): ');

    sexo = sexo.toLowerCase();

    while (sexo != 'femenino' && sexo != 'masculino' && sexo != 'no binario') {
      sexo = prompt(
        'Ingreso incorrecto. Ingrese sexo (femenino, masculino, no binario)'
      );
      sexo = sexo.toLowerCase();
    }

    // NOTA PROMEDIO
    let notaPromedio = parseFloat(
      prompt('Ingrese nota promedio (entre 0 y 10): ')
    );

    while (notaPromedio < 0 || notaPromedio > 10 || isNaN(notaPromedio)) {
      notaPromedio = parseFloat(
        prompt('Ingreso incorrecto. Ingrese nota promedio (entre 0 y 10):  ')
      );
    }

    // EDAD
    let edad = parseInt(prompt('Ingrese edad (mayor de 0): '));

    while (edad < 1 || isNaN(edad)) {
      edad = parseInt(
        prompt('Ingreso incorrecto. Ingrese edad (mayor de 0):  ')
      );
    }

    /* ------------------ LOGICA ------------------ */

    // A
    if (
      situacionLaboral == 'solo estudiante' &&
      (flagMayorPromedio || notaPromedio > mayorPromedio)
    ) {
      mayorPromedio = notaPromedio;
      nombreMayorPromedio = nombre;
      flagMayorPromedio = 0;
    }

    // B
    if (
      situacionLaboral == 'solo estudiante' &&
      (flagViejoEstudiante || edad > edadViejoEstudiante)
    ) {
      edadViejoEstudiante = edad;
      nombreViejoEstudiante = nombre;
      flagViejoEstudiante = 0;
    }

    // C
    if (situacionLaboral == 'buscando') {
      acumNotaBusc += notaPromedio;
      contBusc++;
    } else if (situacionLaboral == 'trabajando') {
      acumNotaTrabaj += notaPromedio;
      contTrabaj++;
    } else if (situacionLaboral == 'solo estudiante') {
      acumEstudia += notaPromedio;
      contEstudia++;
    }

    // D
    if (
      situacionLaboral != 'buscando' &&
      (flagMenorMaterias || cantidadMaterias > menorMateriasNoTrabaja)
    ) {
      menorMateriasNoTrabaja = cantidadMaterias;
      nombreMenorMateriasNoTrabaja = nombre;
      edadMenorMateriasNoTrabaja = edad;
      flagMayorMateriasRemoto = 0;
    }

    seguir = prompt('Desea seguir? (s)');
  } while (seguir == 's');

  /* ---------------- INFORMAR A ---------------- */
  if (flagMayorPromedio == 0) {
    console.log(
      `El nombre del mejor promedio que solo estudia es ${nombreMayorPromedio}`
    );
  } else {
    console.log(`Todos los alumnos trabajan o buscan`);
  }

  /* ---------------- INFORMAR B ---------------- */
  if (flagViejoEstudiante == 0) {
    console.log(
      `El nombre del mas viejo de los alumnos que solo es estudiante es ${nombreViejoEstudiante}`
    );
  } else {
    console.log(`No hay alumnos viejos que solo estudien`);
  }

  /* ---------------- INFORMAR C ---------------- */
  if (contBusc != 0) {
    let promedioBuscando = acumNotaBusc / contBusc;
    console.log(
      `La nota promedio de los que buscan trabajo es ${promedioBuscando}`
    );
  } else {
    console.log(`No hay alumnos buscando trabajo`);
  }

  if (contTrabaj != 0) {
    let promedioTrabajando = acumNotaTrabaj / contTrabaj;
    console.log(
      `La nota promedio de los que trabajan es ${promedioTrabajando}`
    );
  } else {
    console.log(`No hay alumnos que trabajen`);
  }

  if (contEstudia != 0) {
    let promedioEstudiantes = acumEstudia / contEstudia;
    console.log(
      `La nota promedio de los que solo estudian es ${promedioEstudiantes}`
    );
  } else {
    console.log(`No hay alumnos que solo estudien`);
  }

  /* ---------------- INFORMAR D ---------------- */
  if (flagMenorMaterias == 0) {
    console.log(
      `El que cursa menos materias y que busca trabajo es ${nombreMenorMateriasNoTrabaja} y su edad es ${edadMenorMateriasNoTrabaja}`
    );
  } else {
    console.log('Ningun alumno no busca trabajo');
  }
}
