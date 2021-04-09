## Upload de arquivos

Serviço back-end utilizando o padrão Rest para upload de arquivos

## Tecnologias Utilizadas

Javascript, Node, MongoDB, React

## Libs Utilizadas

<p>express - biblioteca para configuração de servidor</p>
<p>morgan - biblioteca para gerenciamento de logs de requisições HTTP no servidor</p>
<p>mongoose - biblioteca para gerenciar conexão com o banco de dados mongo.db</p>
<p>multer - biblioteca para manipular requisicições do tipo multipart/form</p>
<p>multer-s3 - biblioteca que serve como provider para o multer, come ela é possível fazer um storage na AWS</p>
<p>aws-sdk - biblioteca de integração com o SDK da amazon com ela é possível fazer a configuração com o serviço s3</p>
<p>dotenv  - biblioteca para auxilio na configuração de variáveis de ambiente</p>
<p>nodemon - biblioteca para ambiente de desenvolvimento para manipular o restart do servidor</p>
<p>pdfkit - biblioteca para para geração de arquivos em PDF</p>
<p>cors - biblioteca para configuração de CORS, liberar acesso para que outros dominios possam acessar a API</p>

## DOCKER MONGODB CONFIG

1. Baixar: docker pull MongoDB
2. Adicionar imagem em um container e executar: docker run --name mongo -p 27017:27017 -d mongo 
3. Acessar o MongoDB: docker exec -it mongo mongo admin