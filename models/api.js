
const fetch = require('node-fetch')

function obterCep(req, res){
    let url = 'https://cep.awesomeapi.com.br/json/' + req.params.cep
    fetch(url)
    .then( (dado)=>{
        return dado.json()
    })
    .then((rows)=> {
        res.json(rows)
    })
}
module.exports = {obterCep}