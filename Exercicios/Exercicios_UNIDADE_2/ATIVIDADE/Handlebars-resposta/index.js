const express = require('express');
const { engine } = require('express-handlebars');
const app = express();

app.engine('handlebars', engine());
app.set('view engine', 'handlebars')

app.use(express.static("public"));

app.set("views", "./views");



app.use(express.json());
app.use(express.urlencoded({ extended: true })); // support encoded bodies




app.post("/geraCertificado", (req, res) => {

  let {nome, instituicao, atividade, horas, data, lista} = req.body;


  res.render("certificado", {
    nome: nome,
    instituicao: instituicao,
    atividade: atividade,
    horas: horas,
    data: data,
    lista: lista,
  });
});


app.listen(3000, function () {
  console.log("Esta rodando na porta 3000");
});
