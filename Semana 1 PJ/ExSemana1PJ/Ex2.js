/*
    Implemente uma função fetchUserData(userId) que simula uma chamada assíncrona 
    (use setTimeout de 1 segundo) e retorna um objeto { id, name, email }. 
    Consuma essa função com async/await e trate o caso 
    em que o userId não existe (retorne um erro com mensagem clara).
*/
// Base Teste
let usuarios = [{id:1, name: "Gustavo Generoso", email: `gg@pj.com.br`}, {id:2, name: `Mathias`, email:`Mathias@pj.com.br`}, {id:4, name: `Padilha`, email: `padilha@pj.com.br`}, {id:8, name: "Rafael Zuffo", email: "zuffo@pj.com.br"}]

function fetchUserId(userId) {
    let promise = new Promise(function(resolve,reject) {
        setTimeout(() => {
            let info = usuarios.find(item => item.id === userId);
            if (info !== undefined) {
                resolve(info);
            }
            else {
                reject(new Error(`Usuário ${userId} inexistente!`));
            }
        }, 1000)
    })
        return promise
    }
    console.log("Teste");
    console.log(fetchUserId(1)); // Aqui ta dando <pending>
    


    async function Result(userId) {
        try {
            let Resultado = await fetchUserId(userId);
            console.log(Resultado);
        }    catch (erro) {
                console.log(erro.message);
             }
    }
             
             
    Result(1)
    Result(8)
    Result(23)  

    //1. criou a Promise (a caixinha)
    // 2. setTimeout espera 1 segundo
    //    3. busca o usuário
    //    4. tem usuário? → resolve entrega o resultado
     //   n    ão tem?    → reject entrega o erro
       //     5. return promise → entrega a caixinha pra fora da função

 //criou uma função fetchUserId que retorna uma new Promise, ela recebe um userId, espera 1 segundo com o setTimeout e depois tenta achar o usuário no array com o find. Se achar, chama o resolve passando os dados do usuário, se não achar chama o reject com uma mensagem de erro. O return promise no final da função entrega a Promise pra quem chamou. Pra consumir usa a função async com await, que fica monitorando a Promise e quando o resolve dispara o resultado cai no try dentro da variável que você escolheu, e quando o reject dispara o erro cai no catch. A Promise sozinha não faz nada de especial ,quem cria a assincronicidade de verdade é o setTimeout, a Promise só organiza o resultado dele e te permite usar await e .then pra pegar esse resultado depois, coisa que uma função normal não consegue fazer porque ela termina antes do setTimeout disparar e o return some

