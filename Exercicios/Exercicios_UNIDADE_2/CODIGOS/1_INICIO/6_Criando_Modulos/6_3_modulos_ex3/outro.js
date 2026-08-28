
function MeuObjeto (ome) {
	console.log('iniciou...');
}

MeuObjeto.prototype.metodo1 = function (x)
{
	console.log('chamou o modulo1:'+x);
}

MeuObjeto.prototype.trataExecucao = function (nome, cb)
{
    
	//return cb ('Erro do tipo dificil', ''); 
	return cb (undefined, 'ola'+nome);


}

MeuObjeto.prototype.recebe = function (x)
{
	this.valor = x;
	
}

MeuObjeto.prototype.metodo2 = function ()
{
	console.log('chamou o modulo2:'+this.valor);
}

module.exports = MeuObjeto;

