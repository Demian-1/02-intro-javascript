const personajes = ['Goku', 'Vegeta', 'Trunks'];

const [ ,p2] = personajes;

console.log(p2);

const retornaArreglo = () => {
    return ['abc', 123];
}

const [letras, numeros] = retornaArreglo();
console.log(letras, numeros)

const usaState = (valor) => {
    return [valor, ()=>{ console.log('hola mundo')}];
}

const [nombre, satNombre] = usaState('goku');

console.log(nombre);
satNombre();