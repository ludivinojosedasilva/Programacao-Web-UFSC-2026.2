var Meu = require('./outro.js');

var meu = new Meu();

const express = require('express');

const app = express();


app.get('/roda', function(req, resp){
    meu.trataExecucao(req.query.ID, function(erro, x){
        let valor='';
        if (erro)
        {
            console.log('Erro');
        }
        else
        {
            // faz as coisas
           valor = x;

        }
       
        resp.send(valor);
    });

});


app.listen(3000);


