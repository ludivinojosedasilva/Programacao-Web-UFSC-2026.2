
# Exemplo de PHP

Neste exemplos, usaremos um exemplo PHP que faz um GET de um recurso. Esse recurso é selecionado usando um SELECT do html.  

Para rodar o código, podemos utilizar o nginx configurado para usar o PHP, tal como feito em exemplos passados. Porém, é mais fácil usar na minha de comando o interpretador PHP:
~~~
sudo php -S localhost:80
~~~

Desta forma, ele irá servir os arquivos do diretório corrente na porta 80. Ao acessar o browser, teremos o código resultante da execução do PHP.

Esse código é um exemplo simples de formulário PHP que usa o método GET. A ideia é:

Na primeira vez que a página é aberta, mostrar o formulário.
O usuário escolhe uma categoria.
Ao clicar em search, o navegador envia a categoria pela URL.
O PHP percebe que existe um parâmetro GET e mostra "Resultados da pesquisa".


~~~
<?php

if (empty($_GET)){

?>

<form  name="search" method="get" >
	<select name="category">
		<option value="filme">Filme</option>
		<option value="sport">Esporte</option>
		<option value="musica">Musica</option>
	</select></br>
	<input type="submit" value="search"/>
</form>

<?php
}else {
	echo "Resultados da pesquisa";
}
~~~
## Verifiação inicial

~~~
if (empty($_GET)){
~~~


**$_GET** é uma variável especial do PHP que contém os parâmetros enviados pela URL usando GET.

Por exemplo, quando a página é acessada assim:

~~~
pagina.php
~~~

não há parâmetros GET, então:

~~~
$_GET
~~~

está vazio.

Consequentemente:

~~~
empty($_GET)
~~~

return true

## O formulário é exibido

Como o if é verdadeiro, o PHP executa:
~~~
<form name="search" method="get">
~~~
O ponto importante aqui é:
~~~
method="get"
~~~
Isso significa que os valores do formulário serão colocados na URL.

O select é:

~~~
<select name="category">
    <option value="filme">Filme</option>
    <option value="sport">Esporte</option>
    <option value="musica">Musica</option>
</select>
~~~

O nome do campo é:

~~~
category
~~~

e os possíveis valores são:

~~~
filme
sport
musica
~~~

## O usuário escolhe "Filme"

Suponha que o usuário selecione:

~~~
Filme
~~~

e clique em:

~~~
search
~~~

O navegador fará uma requisição semelhante a:

~~~
pagina.php?category=filme
~~~

Agora existe um parâmetro GET:

~~~
$_GET['category']
~~~

que contém:

~~~
"filme"
~~~

## O PHP executa o else

~~~
empty($_GET)
~~~

retorna false, porque existe:

~~~
$_GET['category']
~~~

Então o PHP passa para:

~~~
}else {
    echo "Resultados da pesquisa";
}
~~~

E aparece:

~~~
Resultados da pesquisa
~~~
