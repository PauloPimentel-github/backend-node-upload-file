## Upload de arquivos

Serviço back-end utilizando o padrão Rest para upload de arquivos

## Tecnologias Utilizadas

Javascript, Node, MongoDB, React

## Libs Utilizadas

express - biblioteca para configuração de servidor
morgan - biblioteca para gerenciamento de logs de requisições HTTP no servidor
mongoose - biblioteca para gerenciar conexão com o banco de dados mongo.db
multer - biblioteca para manipular requisicições do tipo multipart/form
multer-s3 - biblioteca que serve como provider para o multer, come ela é possível fazer um storage na AWS
aws-sdk - biblioteca de integração com o SDK da amazon com ela é possível fazer a configuração com o serviço s3
dotenv  - biblioteca para auxilio na configuração de variáveis de ambiente
nodemon - biblioteca para ambiente de desenvolvimento para manipular o restart do servidor
pdfkit - biblioteca para para geração de arquivos em PDF
cors - biblioteca para configuração de CORS, liberar acesso para que outros dominios possam acessar a API

## DOCKER MONGODB CONFIG

1. Baixar: docker pull MongoDB
2. Adicionar imagem em um container e executar: docker run --name mongo -p 27017:27017 -d mongo 
3. Acessar o MongoDB: docker exec -it mongo mongo admin