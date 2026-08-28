//app.js

import Cliente from "./src/Cliente.js";
import * as util from "./src/log.js";
import * as BD from "./src/BD.js";

const cliente1 = new Cliente("Luiz", 31, "contato@luiztools.com.br");
const cliente2 = new Cliente("Ana", 28, "ana@ufsc.br");

BD.addUser("Maria", "32");
BD.addUser("Pedro", "32");
BD.addUser("luis", "32");
BD.addUser("Marco", "32");

let x = BD.search("luis");

util.log(cliente1.getIdade());

let x = util.soma(10, 20);
util.log("O valor vale" + x);
