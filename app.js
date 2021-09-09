const express = require('express')
const app = express()

app.get('/alunos/todos',(req,res)=>{
    let alunos= [
        {'nome': 'Paulo', 'idade': '20'},
        {'nome': 'Paula', 'idade': '21'},
        {'nome': 'Lucas', 'idade': '22'},
        {'nome': 'Silva', 'idade': '21'}
    ]
    res.json(alunos)
})

app.listen(8080);