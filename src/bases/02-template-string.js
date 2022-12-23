const nombre = 'demian';
const apellido = 'acuayte';

//const nombreCompl = nombre + ' ' + apellido;

//Template String
const nombreCom = `${nombre}
${apellido}
${4+5}`;

console.log(`este es un texto ${getSaludo(nombreCom)}`);

function getSaludo(nombre){
    return 'Hola niños'+nombre;
}