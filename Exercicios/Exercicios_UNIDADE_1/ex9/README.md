# nginx e php em containers

Neste exemplo utilizaremos 2 containers, um para o nginx e outro para o php

Quando uma aplicação e formada por mais de um container, tipicamente utiliza-se o docker-compose para "orquestrar" a execução desses containers.

No arquivo docker-compose criamos uma seção nginx dentro de services que configura o container do nginx. No exemplo abaixo o nginx utiliza uma imagem do linux alpine que é um container leve, ele ocupa pouca memória, ou seja, o linux dele é o mínimo possível.

O codigo estabelece que o container fará um mapeamento de portas, dentro do container o nginx escuta a porta 80, as externamente ele usa o mapeamento para a porta 8080, assim quando tudo estiver configurado devemos acessar via browser usando **http://localhost:8080**

Os arquivos de configuração do nginx e as páginas (html/php, etc) estão numa pasta local e serão mapeadas para pastas dentro do container.

O mapeamento permite que tenhamos os arquivos dentro da pasta de trabalho mas estes serão usados pelo container como se estivessem dentro dele.  Se nao usarmos o mapeamento, teriamos que instalar as páginas html/php/etc dentro da imagem do container e pior, se por acaso a imagem for atualizada e passamos a usar essa nova versão, os arquivos internos seriam perdidos e precisariam ser re-instalados.


Esse serviço depende de outro serviço para funcionar, no caso o PHP. Para o PHO, usamos a imagem do PHP 8.3 e mapeamos para usar a mesma pasta onde estão as páginas. Esse PHP é um servidor que roda na porta 9000, e assim seria possivel acessá-lo usando a porta 9000 pois nesse caso nao fo feito mapeamento.  A configuração do nginx diz que ele fará requisições a essa porta 9000. Desta forma, o container do nginx consegue acessar o container do PHP e ambos os containers são acessíveis pelo host. Essa não é a forma ideal que organizar uma aplicação, mas para manter o exemplo simples é a que será utilizada.

~~~
services:
  nginx:
    image: nginx:alpine
    ports:
      - "8080:80"
    volumes:
      - ./src:/var/www/html
      - ./nginx/default.conf:/etc/nginx/conf.d/default.conf
    depends_on:
      - php

  php:
    image: php:8.3-fpm-alpine
    volumes:
      - ./src:/var/www/html

~~~


## Rodar o orquestrador de containers

na pasta onde está o docker-compose, rode: **docker-compose up -d**


Essa linha irá rodar os 2 containers. Como as imagens dos containers do nginx e do php existem ainda, elas serão automaticamente baixadas pela internet e instaladas. O docker possui alguns comandos que podemos utilizar para saber o que está acontecendo.


### Ver os containers rodando.
 
Digitando **docker ps** teremos uma relação de containers rodando. Se tudo foi feito corretamente veremos algo como:

~~~
4ca2cc9a9f03   nginx:alpine                       "/docker-entrypoint.…"   4 minutes ago   Up 4 minutes           0.0.0.0:8080->80/tcp, [::]:8080->80/tcp                                                                                                                                                                                                     ex9-nginx-1
e53719844fea   php:8.3-fpm-alpine                 "docker-php-entrypoi…"   4 minutes ago   Up 4 minutes           9000/tcp                                                                                                                                                                                                                                    ex9-php-1
~~~

Ambos os containers podem ser acessados na máquina local usando as portas 8080 e a porta 9000 mas o container do nginx pode ser acessado de outras máquinas externas também, ou seja, ela está acessível pela Internet. Um fato curioso é que mesmo que tenhamos criado um firewall bloqueando o acesso externo à porta 8080, o container docker do nginx continuará acessível. Para aumentar a segunça, devemos configurar o nginx para fazer um mapeamento de portas assim:

  - "127.0.0.1:8080:80"

Isso garante que apenas dentro do host o nginx pode ser acessado.


### Parando o orquestrador :
   Faça **docker-compose down**

### Parando um container:
    docker stop [nome do container]
### Removendo um container
    docker rm [nome do container]
### Listando as imagens de containers que estão instaladas
    docker images
  
Ao rodar esse comando  na minha instalação, verifica-se que existem 2 imagens dferentes do nginx. Uma que havia sido utilizada no exemplo anterior que utiliza a ultima versão da imagem da imagem do nginx e ocupa bastante espaço e a outra imagem que é baseada no linux alpine e gasta pouca memória.

~~~
nginx:alpine                                               f0ba77f796e5       62.4MB             0B    U   
nginx:latest                                               5253dc86cc93        161MB             0B     
~~~

Para poupar memória é preferível escolher uma imagem e utilizar a mesma em todos os seus projetos com docker. Ao rodar a mesma imagem em dois containers o uso de memória não será o dobro. O docker usa alguns mecanismos para reutilizar as páginas de memória em uso.

### removendo uma imagem:

 Caso a imagem não esteja em uso  por algum container, podemos removê-la usando o comando:
 **docker rmi nginx:latest**

Se ela estiver em uso, devemos parar o container, removê-lo e depois remover a imagem.


