let pets = require("./pets.json")
//console.log(pets)

const servDarBanho = (pet) => {
    console.log("Dando banho em " + pet.nome)
    pet.servicos.push("Banho")
    return pet
}

const servTosar = (pet) => {
    console.log("Dando banho em " + pet.nome)
    pet.servicos.push("Tosa")
    return pet
}

const servCastrar = (pet) => {
    if (pet.castrado) {
        console.log(pet.nome + " já é castrado.")
    } else {
        pet.servicos.push("Castrar")
    }
 return pet
}

console.log(servCastrar(pets[1]))