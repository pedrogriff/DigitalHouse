
  // Carregando o json do arquivo pets e armazenando
  // na variável pets como um array;
  let pets = require("./pets.json");

  //Transformando strings de data em objetos Date
  let objetosDate = pets.map(
    (pet) => {
        pet.nascimento = new Date(pet.nascimento)
        return pet
    }
  )

  const servDarBanho = pet => {
    console.log("Dando banho em " + pet.nome);
    pet.servicos.push("banho");
    return pet;
  };
  
  // Criem uma função que faz o equivalente
  // a servDarBanho, mas que TOSA
  const servTosar = pet => {
    console.log("Tosando " + pet.nome);
    pet.servicos.push("tosa");
    return pet;
  };
  
  // Verifica se o cachorro foi vacinado
  // Caso não tenha sido, altera a prop vacinado para
  // true e adiciona "vacina" ao array de servicos
  // Caso ja tenha sido vacinado, imprime uma msg de erro
  const servVacinar = pet => {
    if (pet.vacinado) {
      console.log(pet.nome + " já foi vacinado");
    } else {
      pet.vacinado = true;
      pet.servicos.push("vacina");
      console.log(pet.nome + " vacinado");
    }
    return pet;
  };

console.log(pets.map(servVacinar))
 // console.log(pets)