//let promise = new Promise(function(resolve,reject) {

//});
// Basicamente: ele vai olhar, se tiver o arquivo e quando tiver ele roda, se deu bom ele fala que deu bom se deu ruim ele fala que deu ruim o arquivo e deu erro.
let nome = "Matheus"
function MelhorNome(nome) {
    let promise = new Promise(function(resolve,reject) {
        setTimeout(() => {

        if (nome === "Matheus") {
            resolve("Tem Matheus");
        } 
        else {
            reject("Não tem Matheus");
        }   
        },1000)    
        })
    } 
        return promise
    console.log(MelhorNome)
    console.log(await MelhorNome(nome))


