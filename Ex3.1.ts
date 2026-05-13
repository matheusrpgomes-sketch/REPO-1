/*
    Dado um array de produtos com name e price, calcule usando apenas reduce, map e filter (sem for):
    O preço total de todos os produtos
    A média de preço
    O produto mais caro
    A lista de produtos com desconto de 10% aplicado'
*/
    type product = {
        price: number
        name: string
    }
const Produtos : product [] = [ {price: 10, name: `Manga`}, {price: 7, name:`Tomate`},{price: 1, name: `Morango`}, {price: 6, name:`Banana`},{price: 3, name: `Maca`}, {price: 2, name:`Pera`}
] 
const total = Produtos.map(item => item.price)
console.log(total)
const soma = total.reduce<number>((acc, curr) => acc + curr, 0)
console.log("Valor da media é", soma/total.length)
console.log("O item mais caro tem o valor de " )
const caro = total.reduce<number>((Maior, Atual) => {   
    if (Maior>Atual) {
       return Maior;
    }
    else {
        return Atual;
    }  
}, 0);
console.log(`${caro}`,"É o item mais caro")

console.log("Os produtos com 10% de desconto é ",total.map(item => item = item*0.9))