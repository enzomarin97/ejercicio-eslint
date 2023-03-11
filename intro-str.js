let str_dbl = "soy un texto con comillas dobles";
let str_sng = "soy un texto con comillas simples";
console.log(str_dbl);
console.log(str_sng);


///// Comillas invertidas (backticks)
let str_backticks = "esto es str con backticks";

console.log(str_backticks);

let nombre = "enzo";
let saludo = `hola ${nombre} bienvenido`;

console.log(saludo);

// plantillas html -> backticks permiten salto de linea
let plantilla = `
<html>
    <h1>
        Encabezado principal de ${nombre}
    </h1>
</html>
`;
console.log(plantilla);


////// intro de variables en html
let libros = ["Empieza", "El monje", "La hora"];