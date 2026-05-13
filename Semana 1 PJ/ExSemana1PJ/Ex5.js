/*
    Implemente uma função groupBy(array, key) que agrupa um array de objetos por uma chave.
    Deve funcionar assim:
    groupBy(users, 'city') // agrupa por city
    groupBy(users, 'address.city') // agrupa por chave aninhada
    groupBy(users, 'address.country.code') // agrupa por chave 2 níveis aninhada
*/

let Cidade = [{city: "BH", nome: "GG"}, {city: "Vitoria", nome: "Mathias"},{city:"SP", nome: "Matheus"}, {city: "Vitoria", nome: "Gabriel"}]

function groupBy(array, key) { 
    let X = array.reduce((grupo, item) => {
        let Chave = item[key];
            if (grupo[Chave] === undefined) {
                grupo[Chave] = [] ;
            } 
                grupo[Chave].push(item);
            return grupo
        })  
        console.log(X)
    }
        
groupBy(Cidade, `city`);

//Peguei um array de cidades, joguei numa função que usa o reduce pra percorrer cada objeto. A cada volta eu pego o valor da chave que eu quero agrupar, tipo "SP" ou "Vitoria". Se esse grupo ainda não existe eu crio ele como array vazio, depois jogo o objeto inteiro dentro. No final sai um objeto com cada cidade como chave e dentro um array com todo mundo daquela cidade.
