const NOME_PETSHOP = "Petshop DH"
let cachorro = {
    nome: "Lola",
    idade: 6,
    raca: "Shih-tzu",
    castrado: true,
    servicos: ["banho", "tosa"]
}
console.log("O nome do cachorro é " + cachorro.nome)

function eCastrado() {
    if (cachorro.castrado == true) {
        console.log("É castrado")
    } else {
        console.log("Não é castrado")
    }
}
eCastrado()