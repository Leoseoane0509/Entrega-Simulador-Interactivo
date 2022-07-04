// DECLARACIÓN DE VARIABLES GLOBALES
let nombre;
let genero;
let cursoElegido;
let opcion;
let precioCurso1 = 10000;
let precioCurso2 = 8000;
let precioCurso3 = 12000;
const curso1 = "'Curso de sintáxis inglesa'";
const curso2 = "'Curso de sintáxis española'";
const curso3 = "'Curso de fonética inglesa'";
// DECLARACIÓN DE FUNCIONES
// Función 1
const mostrarCursos = (nombreCurso1, nombreCurso2, nombreCurso3) => {
  return `Los cursos disponibles son los siguientes:
  a) ${nombreCurso1}
  b) ${nombreCurso2}
  c) ${nombreCurso3}`;
};
// Función 2
const agregarCurso = () => {
  switch (cursoElegido) {
    case "a":
      alert(
        "Compra registrada. Elegiste el siguiente curso: 'Curso de sintáxis inglesa'"
      );
      break;
    case "b":
      alert(
        "Compra registrada. Elegiste el siguiente curso: 'Curso de sintáxis española'"
      );
      break;
    case "c":
      alert(
        "Compra registrada. Elegiste el siguiente curso: 'Curso de fonética inglesa'"
      );
      break;
    default:
      alert("Valor incorrecto");
      break;
  }
};
// Función 3
const mostrarValorCurso1 = (curso1) => {
  return `El valor del ${curso1} es de ${precioCurso1} pesos argentinos.`;
};
// Función 4
const mostrarValorCurso2 = (curso2) => {
  return `El valor del ${curso2} es de ${precioCurso2} pesos argentinos.`;
};
// Función 5
const mostrarValorCurso3 = (curso3) => {
  return `El valor del ${curso3} es de ${precioCurso3} pesos argentinos.`;
};
// Función 6
const calcularValorTotal = (valorCurso1, valorCurso2, valorCurso3) => {
  return valorCurso1 + valorCurso2 + valorCurso1;
};
let valorCursosTotal = calcularValorTotal(10000, 8000, 12000);
// Función 7
const calcularValorCursos1y2 = (precioCurso1, precioCurso2) => {
  return precioCurso1 + precioCurso2;
};
let valorCursos1y2 = calcularValorCursos1y2(precioCurso1, precioCurso2);

// Función 8
const calcularValorCursos2y3 = (precioCurso2, precioCurso3) => {
  return precioCurso2 + precioCurso3;
};
let valorCursos2y3 = calcularValorCursos1y2(precioCurso2, precioCurso3);

// Función 9
const calcularValorCursos1y3 = (precioCurso1, precioCurso3) => {
  return precioCurso1 + precioCurso3;
};
let valorCursos1y3 = calcularValorCursos1y3(precioCurso1, precioCurso3);
// EJECUCIÓN DEL CÓDIGO
nombre = prompt("Ingrese su nombre");
genero = prompt("Ingrese su género");
if (genero === "masculino" || genero === "Masculino") {
  alert(`¡Bienvenido, ${nombre}!`);
} else if (genero === "femenino" || genero == "Femenino") {
  alert(`¡Bienvenida, ${nombre}!`);
} else {
  alert("Valor incorrecto");
}
// Bucle do-while con un switch adentro
do {
  opcion = Number(
    prompt(
      "Ingrese una opción: \n\n 1- Ver cursos \n 2 - Agregar curso \n 3 - Ver valor de los cursos  \n 4 - Calcular valor total \n 5 - Salir del menú"
    )
  );
  switch (opcion) {
    case 1:
      alert(
        mostrarCursos(
          "Curso de sintáxis inglesa",
          "Curso de sintáxis española",
          "Curso de fonética inglesa"
        )
      );
      break;
    case 2:
      cursoElegido = prompt(
        "¿Qué curso te gustaría agregar?(colocar 'a', 'b', o 'c', según corresponda)"
      );
      if (cursoElegido === "a" || cursoElegido === "A") {
        alert(agregarCurso());
      } else if (cursoElegido === "b" || cursoElegido === "B") {
        alert(agregarCurso());
      } else if (cursoElegido === "c" || cursoElegido === "C") {
        alert(agregarCurso());
      } else {
        alert("Opción incorrecta.");
      }
      break;
    case 3:
      alert(mostrarValorCurso1("'Curso de sintáxis inglesa'"));
      alert(mostrarValorCurso2("'Curso de sintáxis española'"));
      alert(mostrarValorCurso3("'Curso de fonética inglesa'"));
      break;
    case 4:
      alert(
        `El valor por los tres cursos es de: ${valorCursosTotal} pesos argentinos. \nEl valor del ${curso1} + el ${curso2} es de: ${valorCursos1y2} pesos argentinos. \nEl valor del ${curso2} + el ${curso3} es de ${valorCursos2y3} pesos argentinos. \nEl valor del ${curso1} + el ${curso3} es de ${valorCursos1y3} pesos argentinos. `
      );
      break;
    case 5:
      alert("¡Nos vemos!");
      break;
    default:
      alert("Opción incorrecta");
      break;
  }
} while (opcion !== 5);
