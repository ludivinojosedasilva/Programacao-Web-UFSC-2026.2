# Vamos agora modificar a aplicação PHP


## Configurar o servidor WEB

Edite o arquivo de configuração do nginx para configurar o site php

**sudo nano /etc/nginx/sites-available/default**

~~~
server {
        listen 80 default_server;
        listen [::]:80 default_server;
        root /var/www/html;
        index index.html ;

        location ~ \.php$ {
            include snippets/fastcgi-php.conf;
            fastcgi_pass unix:/run/php/php-fpm.sock;
        }

    }
~~~

## Teste a configuração do nginx, de o start no servidor web e também do fpm do php 

~~~
    sudo nginx -t
    sudo systemctl restart nginx
    sudo systemctl restart php8.3-fpm
~~~

## Crie um arquivo (aplicação PHP)

**sudo nano /var/www/html/msg.php**

~~~

<?php

phpinfo();
?>

~~~

Isso irá criar um arquivo **msg.php** que ao ser interpretado enviará informações para o cliente.

## Crie uma página WEB


**sudo nano /var/www/html/index.html**

~~~
<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="utf-8">
    <title>Página web com dinâmica</title>
    <style>
    #demo {
        border: 1px solid red;
        width:90;
    }
    </style>
</head>

<script>
    function carrega() {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("demo").innerHTML = xhttp.responseText;
            }
        };
        xhttp.open("GET", "/msg.php", true);
        xhttp.send();
    }
</script>


<body>

    <h1>Oi mundo</h1>
    Essa é uma página dinâmica. Ao clicar no botão abaixo, será feita chamada a um arquivo php. O nginx invoca o php para insterpretar o código e o resultado é o retorno de uma mensagem para o cliente.

    <button onclick="carrega()">Carrega</button>

    <div id="demo">
    </div>


</body>

</html>

~~~
