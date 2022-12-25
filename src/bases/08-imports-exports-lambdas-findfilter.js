// Se hace como una desestructuracion:       los que son como default no llevan {}
import  heroes from "../data/heroes"

// console.log(owners);

export const getHeroeByID = (id) => {
    return heroes.find( (heroe) => heroe.id === id);
}

// console.log(getHeroeByID(4));

export const getHeroesByOwner = ( owner ) =>  heroes.filter((heroe)=>heroe.owner===owner);

// console.log(getHeroesByOwner('Marvel'));