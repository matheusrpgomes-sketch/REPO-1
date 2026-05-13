/*
    Dado um array de produtos com name e price, calcule usando apenas reduce, map e filter (sem for):
    O preço total de todos os produtos
    A média de preço
    O produto mais caro
    A lista de produtos com desconto de 10% aplicado'
*/
    let arr = [{price: 10, name: `Manga`}, {price: 7, name:`Tomate`},{price: 1, name: `Morango`}, {price: 6, name:`Banana`},{price: 3, name: `Maca`}, {price: 2, name:`Pera`}];
    let preço_total = arr.map(item => item.price);
    console.log(preço_total, `Preço dos Produtos ao todo e o preço total (soma)`, preço_total.reduce((Soma, ValorAtual) => Soma + ValorAtual, 0), "valor total");

    let media = preço_total.reduce((Soma, ValorAtual) => Soma + ValorAtual, 0);
    media = media/preço_total.length;
    console.log(media,"$", `É a média de preço`);

   
   // let Caro = preço_total.reduce((Maior, Atual) => if(Maior>Atual) { return Maior}, else {return Atual}
   // console.log("O item mais caro é o de", Caro);

   let Caro = preço_total.reduce((Maior, Atual) => {   
    if (Maior>Atual) {
       return Maior;
    }
    else {
        return Atual;
    }  
}, 0);
    console.log(Caro);

    let Desconto = preço_total.map(item => item = item*0.9);
    console.log(Desconto);


    


