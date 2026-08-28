import { GET, POST } from "./rede.js";

GET("http://www.ufsc.br/access/id=123");


POST('http://www.ufsc.br/access/setUser', { id: 'fabio', cpf: 123 });


import * as acesso from "./rede.js";

acesso.GET("http://www.ufsc.br/access/id=123");
acesso.POST('http://www.ufsc.br/access/setUser', { id: 'fabio', cpf: 123 });
