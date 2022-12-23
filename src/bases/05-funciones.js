// funciones


// asi ya no:   XXXXXXX  
// function saluda(nombre){
//     return `hola, ${nombre}`;
// }

// asi si: 
const saludar = function(nombre){
    return `hola, ${nombre}`;
}

// Funciones de flecha que son mas bonitas:
const saludar2 = (nombre) => {
    return `hola 2, ${nombre}`;
}

const saludar3 = (nombre) => `hola 3, ${nombre}`;

console.log(saludar('demian'));
console.log(saludar2('demian'));
console.log(saludar3('demian'));

const getUser = () => (
    {
        uid: 'abc1256',
        nombre: 'demiannn'
    }
)

const user = getUser();
console.log(user);

const getUsuarioActivo = ( nombre ) => ({
    uid: 'ABC567',
    username: nombre
});


const usuarioActivo = getUsuarioActivo('Demian');
console.log( usuarioActivo );