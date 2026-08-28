var exec = require('child_process').exec;
var cont = 0;


exec('./teste', function (err, stdout, stderr) {
	console.log('ESTOU AQUI\n');

	
	let x = parseInt(stdout);

	console.log(100+x);

});



/*
setTimeout ( function(){
	exec('killall teste', function (err, stdout, stderr) {
	});

},10000);

*/