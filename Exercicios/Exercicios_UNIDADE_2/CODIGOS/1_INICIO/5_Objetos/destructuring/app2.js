import * as BD from "./src/BD.js";

BD.addUser("Maria", "32");
BD.addUser("Pedro", "32");
BD.addUser("luis", "32");
BD.addUser("Marco", "32");

let x = BD.search("luis");

console.log(x);
