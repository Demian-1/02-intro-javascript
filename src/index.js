// Se hace como una desestructuracion:       los que son como default no llevan {}
import  heroes, {owners} from "./data/heroes"

console.log(owners);

const getHeroeByID = (id) => {
    return heroes.find( (heroe) => heroe.id === id);
}

console.log(getHeroeByID(4));

const getHeroesByOwner = ( owner ) =>  heroes.filter((heroe)=>heroe.owner===owner);

console.log(getHeroesByOwner('Marvel'));