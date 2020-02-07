let pets = require('./pets.json');

const buscaPorNome = (string, array) => {
    let pets = array.filter(el => el.nome.includes(string));
    return pets;
}

console.log(buscaPorNome("im", pets));