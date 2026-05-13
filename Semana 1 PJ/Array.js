//let arr =  [`a`, `b`, `c`];
//arr.pop();
//console.log(arr);
//arr.splice(0,1,3,4,5,6);
//console.log(arr);
    //Splicer um pedaço do array, alterar e adicionar naquele que eu peguei.
    //Slice - Copia os valores de um array tirando o ultimo ex. vetor.slice(0,2) - Copia os valores do array do indice 0 até o indice 2, ou seja, copia os valores do indice 0 e do indice 1. O indice 2 não é copiado. O slice não altera o array original, ele retorna um novo array com os valores copiados. O splice altera o array original, ele remove os valores do array original e adiciona os novos valores no lugar dos valores removidos. O splice tem a seguinte sintaxe: splice(indice, quantidade de elementos a serem removidos, elementos a serem adicionados). O slice tem a seguinte sintaxe: slice(indice inicial, indice final). O indice final não é incluído no novo array.
    // O -1 é usado como o penultimo. Exemplo se eu tenho um vetor e tenho n elementos, -1 seria como voltar do 0 para o n-1, ou seja, o ultimo elemento do array. Exemplo: vetor[vetor.length - 1] - Acessa o ultimo elemento do array. O vetor.length é o numero de elementos do array, ou seja, o indice do ultimo elemento é o numero de elementos - 1. O indice do primeiro elemento é 0, o indice do segundo elemento é 1, e assim por diante. O indice do ultimo elemento é o numero de elementos - 1. O indice do penultimo elemento é o numero de elementos - 2, e assim por diante.
    // O.splice() altera o array original. Já o .slice() é diferente — ele não altera nada, só copia um pedaço do array e devolve um novo.
        // Exemplo array;
    //arr = [1, 2, 3, 4, 5];
  //let a = arr.slice(0,3);
    //console.log(a);
    //arr.splice(0,3,'c','d','e');
    //console.log(arr);

    // Concat é responsavel por unir arrays em um novo array sem alterar os originais.
  //let a = [1, 2, 3];
    //let b = [4, 5, 6];
    //let c = a.concat(b,5);
    //console.log(c);

    // Ex.3 ForEach
   // let A = [`a`,`b`,`c`];
   //  A.forEach((iten, index, array)=> {
   //   console.log(`${iten} é maior`);
   //   });

   //Ex.4 Searching in array
   // # Array de Objetos e find()

   // ## Array de objetos
   // let users = [
   //   {id: 1, name: "John"},
    //  {id: 2, name: "Pete"},
    // {id: 3, name: "Mary"}
  //];
   // Um array normal guarda valores soltos como `["a", "b", "c"]`. Esse aqui guarda **objetos**, que são caixinhas com etiquetas.
   // ## `:` guarda, `.` busca
   // {id: 1}   // : está GUARDANDO o valor 1 com o nome id
   // item.id   // . está BUSCANDO o valor guardado com o nome id
    //  ## O `find()` sempre precisa de uma condição
      // Array simples
      //  arr.find(item => item == "a")

// Array de objetos
  //  users.find(item => item.id == 1)

  // O `find()` pega cada elemento do array, coloca em `item` e testa a condição.
  // Quando a condição for verdadeira ele para e retorna aquele elemento.
  // A única diferença entre os dois é que no objeto você precisa do `.id`
  // porque o `item` recebe o objeto inteiro, então você precisa entrar nele
  // para pegar o valor que quer comparar.
  // ## Regra de ouro

// > **`:` guarda, `.` busca, `find()` sempre precisa de uma condição**

  //let arr = [{a:1, b:2}, {a:3, b:4}, {a:5, b:6}];
  //console.log(arr.find(item => item.a==1));
// findindex => acha o primeiro endereçi do array que estou olhando, já o findlastindex acha o index do ultimo elemento que to procurando.

// Ex.5 Filter: Diferente do find o filter retorna um array com todos os elementos que satisfazem a condição, ou seja, ele não para quando encontra o primeiro elemento que satisfaz a condição, ele continua procurando até o final do array e retorna um array com todos os elementos que satisfazem a condição. Se nenhum elemento satisfazer a condição, ele retorna um array vazio. O filter tem a seguinte sintaxe: filter(condição). A condição é uma função que recebe cada elemento do array e retorna true ou false. Se a condição retornar true, o elemento é incluído no novo array. Se a condição retornar false, o elemento é excluído do novo array. O filter não altera o array original, ele retorna um novo array com os elementos que satisfazem a condição.
//let users = [
// {id: 1, name: "John"},
//  {id: 2, name: "Pete"},
//  {id: 3, name: "Mary"}
//];
//console.log(users.filter(item => item.name.length <= 4));

// Ex.6 Map: O map é usado para transformar um array em outro array, ou seja, ele pega cada elemento do array original, aplica uma função de transformação e retorna um novo array com os elementos transformados. O map tem a seguinte sintaxe: map(função de transformação). A função de transformação é uma função que recebe cada elemento do array e retorna o elemento transformado. O map não altera o array original, ele retorna um novo array com os elementos transformados.
    //let tamanho = [`São Paulo`, `Rio de Janeiro`, `Belo Horizonte`];
    //let tamanho2 = tamanho.map(item => item.length);
    //console.log(tamanho2);

// Ex.7 Sort: é o método para alterar a ordem dos elementos do array. Só usar arr.sort(); e sucesso.

// Ex.8 Split. Eu divido em um array com base em uma regra: ex a da virgula tenho lá let a = [`matheus`, `lucas`, `pedro`]; e quero dividir esse array em um array de letras, ou seja, cada letra é um elemento do array. Para isso eu uso o split: a.split(``); e ele vai dividir o array em um array de letras. O split tem a seguinte sintaxe: split(regra de divisão). A regra de divisão é uma string que indica onde o split deve dividir o array. Se a regra de divisão for uma string vazia, ele vai dividir o array em um array de caracteres. Se a regra de divisão for uma string com um caractere, ele vai dividir o array em um array de strings, onde cada string é um pedaço do array original separado pelo caractere da regra de divisão. O split não altera o array original, ele retorna um novo array com os elementos divididos.
// posso dividir em uma quantidade tbm!



  //To add/remove elements:

    //push(...items) – adds items to the end,
    // pop() – extracts an item from the end,
    //shift() – extracts an item from the beginning,
    //unshift(...items) – adds items to the beginning.
    //splice(pos, deleteCount, ...items) – at index pos deletes deleteCount elements and inserts items.
    //slice(start, end) – creates a new array, copies elements from index start till end (not inclusive) into it.
    //concat(...items) – returns a new array: copies all members of the current one and adds items to it. If any of items is an array, then its elements are taken.
   //  To search among elements:

  // indexOf/lastIndexOf(item, pos) – look for item starting from position pos, and return the index or -1 if not found.
    //includes(value) – returns true if the array has value, otherwise false.
    //find/filter(func) – filter elements through the function, return first/all values that make it return true.
    //findIndex is like find, but returns the index instead of a value.
    //To iterate over elements:

    //forEach(func) – calls func for every element, does not return anything.
//To transform the array:

 // map(func) – creates a new array from results of calling func for every element.
  //  sort(func) – sorts the array in-place, then returns it.
  // reverse() – reverses the array in-place, then returns it.
  // split/join – convert a string to array and back.
  // reduce/reduceRight(func, initial) – calculate a single value over the array by calling func for each element and passing an intermediate result between the calls. arr.reduce((resultado_anterior, valor_atual
  // Additionally:

  // Array.isArray(value) checks value for being an array, if so returns true, otherwise false.
//Please note that methods sort, reverse and splice modify the array itself.

  // These methods are the most used ones, they cover 99% of use cases. But there  are few others:

  // arr.some(fn)/arr.every(fn) check the array.

  // The function fn is called on each element of the array similar to map. If any/all results are true, returns true, otherwise false.

  //  These methods behave sort of like || and && operators: if fn returns a truthy value, arr.some() immediately returns true and stops iterating over the rest of items; if fn returns a falsy value, arr.every() immediately returns false and stops iterating over the rest of items as well.

  //  We can use every to compare arrays:

  //  function arraysEqual(arr1, arr2) {
  //  return arr1.length === arr2.length && arr1.every((value, index) => value === arr2[index]);
  // }

  // alert( arraysEqual([1, 2], [1, 2])); // true
  // arr.fill(value, start, end) – fills the array with repeating value from index start to end.

  // arr.copyWithin(target, start, end) – copies its elements from position start till position end into itself, at position target (overwrites existing).

  // arr.flat(depth)/arr.flatMap(fn) create a new flat array from a multidimensional array.