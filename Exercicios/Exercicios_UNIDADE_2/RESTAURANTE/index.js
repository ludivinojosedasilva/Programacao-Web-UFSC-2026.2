//var express = require('express');

import express from "express";
import path from "path";
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


var app = express();

let cardapio = [
  { dia: '16/8', prato: 'Macarrão', sobremesa: 'fruta' },
  { dia: '17/8', prato: 'almondegas', sobremesa:'gelatina'}
];

app.use(express.static(__dirname + '/publica'));

app.get("/status", function (entrada, saida) {
  saida.send("Servidor esta rodando ok");
})

app.get("/cardapio/:mes/:dia", function (entrada, saida) {
  let mes = entrada.params.mes;
  let dia = entrada.params.dia;


  console.log('mes = ', mes);
  console.log('dia = ', dia);

  let busca = dia + "/" + mes;
  for (let x = 0; x < cardapio.length; x++)
  {



    if (busca == cardapio[x].dia)
    {
      saida.send(cardapio[x]);
      return;
    }
  }
  saida.send();
})


app.listen(3000, function () {
  console.log("O servidor esta rodando na porta 3000");
})
