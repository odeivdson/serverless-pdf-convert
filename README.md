
# nestjs + serverless
https://docs.nestjs.com/faq/serverless


# serverless
https://www.serverless.com/framework/docs


####
### Start 
```
# Instalação de dependências:
npm install

# Serverless offline
npm run start
```

### Deploy
```
# Configure suas credenciais aws:
aws configure

# Execute o deploy automatizado:
npm run deploy
```

### Endpoint:
```
https://...amazonaws.com/dev/pdf/doc-to-pdf

POST Body {
  "contentBase64": "docxBase64"
}
```

### Todo
- Criar testes unitários


---
### Importante
```
Dependência Libreoffice resolvida via Libreoffice Layer
```
[shelfio/libreoffice-lambda-layer](https://github.com/shelfio/libreoffice-lambda-layer)