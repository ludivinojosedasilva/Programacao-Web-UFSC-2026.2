# Rodar o nginx dentro do docker


## Instalar o docker

~~~
sudo apt-get update
sudo apt-get install ca-certificates curl
sudo install -m 0755 -d /etc/apt/keyrings
sudo curl -fsSL https://download.docker.com/linux/ubuntu/gpg -o /etc/apt/keyrings/docker.asc
sudo chmod a+r /etc/apt/keyrings/docker.asc

# Add the repository to Apt sources:
echo \
  "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.asc] https://download.docker.com/linux/ubuntu \
  $(. /etc/os-release && echo "${UBUNTU_CODENAME:-$VERSION_CODENAME}") stable" | \
  sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
sudo apt-get update

sudo apt-get install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin

sudo adduser aluno docker
~~~

## Crie uma pasta com as páginas para usar:
por exemplo,vamos criar o site1:

~~~
mkdir -p /home/aluno/nginx/paginas/site1 
~~~

e nessa pasta cria um index.html com o conteudo:

~~~
<html>
    <body>
        <h1> oi mundo </h1>
    </body>
</html>
~~~


## Crie uma pasta com a configuração do site:

~~~
mkdir -p /home/aluno/nginx/conf
~~~

e crie site.conf com o seguinte conteudo:

~~~
server {
    listen 80;
    server_name localhost;

    root /usr/share/nginx/html/site1;
    index index.html;

    location / {
        try_files $uri $uri/ =404;
    }
}
~~~


## Rode o docker e associe os paths de páginas e configuração aos paths da imagem docker. Também precisamos mapear a porta externa com a porta interna que será utilizada. No exemplo, utilizamos a porta 80.

~~~
docker run -d   --name servidor-nginx \
 -p 80:80   \
 -v /home/aluno/nginx/paginas:/usr/share/nginx/html   \
 -v /home/aluno/nginx/conf:/etc/nginx/conf.d \
  nginx
~~~





