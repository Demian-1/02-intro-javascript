import { heroes } from "./data/heroes"

const getHeroeByID = (id) => {
    return heroes.find( (heroe) => heroe.id === id);
}

console.log(getHeroeByID(4));

const getHeroesByOwner = ( owner ) =>  heroes.filter((heroe)=>heroe.owner===owner);

console.log(getHeroesByOwner('Marvel'));