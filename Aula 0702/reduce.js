let pets = [ 
    { nome: "A", serv: ["banho"] },
    { nome: "B", serv: ["vacina", "tosa"] },
    { nome: "C", serv: ["vacina"] },
    { nome: "D", serv: [] }
]

let somaServs = pets.reduce((acum, el) => {
    return acum + el.serv.length
}, 0)

console.log(somaServs)