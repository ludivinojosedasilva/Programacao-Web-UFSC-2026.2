# Instalar o PHP no ubuntu em conjunto com o servidor WEB nginx


## Instalando os pacotes
~~~
    sudo apt update
    sudo apt install nginx -y
    sudo systemctl status nginx
    sudo apt install php-fpm -y
~~~

Dependendo da sua versão do ubuntu, uma versão diferente do php será instalada. No meu sistema foi instalada a versão 8.3

## Configurar o servidor WEB

Edite o arquivo de configuração do nginx para configurar o site php

**sudo nano /etc/nginx/sites-available/default**

~~~
server {
        listen 80 default_server;
        listen [::]:80 default_server;
        root /var/www/html;
        index index.php ;

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

Perceba que dependendo o seu sistema a última linha  será diferente pela versão do PHP que foi instalada. Ajuste para o seu caso.

## Crie um arquivo (aplicação PHP)

**sudo nano /var/www/html/index.php**

~~~

<?php phpinfo(); ?>

~~~

Isso irá criar um arquivo **index.php** com uma instrução que será interpretada pelo php e substituida por informações da versão do php instalada da máquina.
