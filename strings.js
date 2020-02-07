let str = "Adoro minha família!"

strNova = str.replace("família", "esposa")

console.log(strNova)

console.log(str.indexOf("o"))

console.log(str.slice(2))

//function primeiroNome(nomeCompleto) {
//    let primeiro = nomeCompleto.split(" ")
//    console.log(primeiro[0])
//}
//primeiroNome("Pedro Marcincowski")

//arrow
const primeiroNome = nomeCompleto => (console.log(nomeCompleto.split(" ")[0]))

primeiroNome("Pedro Marcincowski")