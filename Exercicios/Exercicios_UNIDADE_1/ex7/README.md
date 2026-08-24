# Aplicação em PHP

## Copie todos os arquivos **.html** e **.php** para dentro de **/var/www/html**

## Configure o servidor nginx

** sudo nano /etc/nginx/sites-enabled/default **

~~~
server {
        listen 80 default_server;
        listen [::]:80 default_server;
        root /var/www/html;
        index index.html;

        location ~ \.php$ {
            include snippets/fastcgi-php.conf;
            fastcgi_pass unix:/run/php/php-fpm.sock;
        }

}
~~~

Acesse o diretório /var/www/html e crie um arquivo chamado etiquetas.txt. Esse arquivo será o banco de dados.

Torne todos os arquivos como pertencendo ao usuário **www-data**

~~~

sudo chown www-data:www-data -R /var/www/html/

ou ainda use a ferramenta:

~~~
sudo php -S localhost:80

~~~
