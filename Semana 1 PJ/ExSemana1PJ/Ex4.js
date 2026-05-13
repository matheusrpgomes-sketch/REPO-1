/*
    Implemente uma função que recebe um array de userIds, 
    busca todos em paralelo usando Promise.all e fetchUserData do problema 2, 
    e retorna um array com os nomes dos usuários encontrados. 
    Trate o caso em que um dos IDs não existe sem quebrar toda a operação.
*/
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
    function All(userIds) { // Promise.allseted
        Promise.all(
        userIds.map(id => 
            fetchUserId(id).then(null, erro => 
                console.error("Erro no id", id, ":", erro.message)
            )   
        )
    ).then(resultados => {
        console.log(resultados.filter(item=> item !== undefined).map(item => item.name));
    
    });
}

console.log(All([1, 8, 24, 4]))

