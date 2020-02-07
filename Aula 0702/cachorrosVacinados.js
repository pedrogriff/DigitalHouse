let cachorros = [{
    nome: "Malu",
    idade: 3,
    vacinado: true
},{
    nome: "Lola",
    idade: 6,
    vacinado: true
},{
    nome: "Pipo",
    idade: 1,
    vacinado: false
}]

function adicionarCachorro (nome, idade, vacinado) {
    cachorros.push({nome: "Catatau", idade: 15, vacinado: false})
}

adicionarCachorro("Jack", 4, true)

let vacinado = []
let naoVacinado = []
function vacinados () {    
    for (let i = 0; i < cachorros.length; i++) {
        if (cachorros[i].vacinado) {
            vacinado += cachorros[i].nome + " é vacinado. \n"
        } else {
            naoVacinado += cachorros[i].nome + " não é vacinado. \n"
        }
    }
    console.log(vacinado)
    console.log(naoVacinado)
}
vacinados()