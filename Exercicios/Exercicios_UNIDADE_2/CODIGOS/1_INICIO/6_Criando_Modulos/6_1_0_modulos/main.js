var express = require('express');

var abc = require ('./src/hello');
var mat = require ('./src/matematica');
var xyz = require ('./src/outro');

abc.setaNome('ana');
abc.setaIdade(40);
abc.mostra();
