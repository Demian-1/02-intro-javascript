import {getHeroeByID} from './bases/08-imports-exports-lambdas-findfilter';

// const promesa = new Promise((resolve,reject)=>{
//     setTimeout(()=>{

//         const p1 = getHeroeByID(2);
//         resolve(p1);
//         // reject('No se pudo encontrar el heroe');
//     },2000);
// });


// promesa.then((heroe)=>{
//     console.log('Then de la promesa, heroe: ', heroe);
// })
// .catch(err => console.warn(err));

const getHeroeByIdAsync = (id) =>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
    
            const p1 = getHeroeByID(id);
            if (p1) { resolve(p1) } else { reject('No se encontro el heroe') };
            
        },2000);
    });
};

// getHeroeByIdAsync(10)
//     .then((heroe)=>{
//         console.log('Hola desde el then:', heroe);
//     })
//     .catch(err=>console.warn(err));

getHeroeByIdAsync(2)
    .then(console.log)
    .catch(console.warn);