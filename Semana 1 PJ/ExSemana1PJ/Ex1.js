/*
  Dado o array abaixo, retorne apenas os usuários ativos e maiores de 18 anos, 
  ordenados por nome em ordem alfabética. Use filter, sort e nenhum loop for.
*/
const users = [
  { name: 'Ana', age: 17, active: true },
  { name: 'Diego', age: 25, active: true},
  { name: 'Carla', age: 22, active: true },
  { name: 'Bruno', age: 25, active: false },
  { name: 'Eva', age: 15, active: true },
];

let a = users.filter(item => item.active == true && item.age >= 18);
console.log(a);
let x = a.sort((a, b) => a.name.localeCompare(b.name));

console.log(x);


