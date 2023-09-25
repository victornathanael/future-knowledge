# 🧑‍💻 Future Knowledge

O Future Knowledge é um projeto React desenvolvido com Vite que possui duas telas: Home e Ranking. Este aplicativo consome uma API externa para exibir informações relacionadas a pontos e classificações em quatro categorias diferentes.

## Funcionalidades

- **Destaques da Semana**: Exibe os melhores desempenhos da semana.
- **Top 10**: Mostra os 10 melhores no campo de sua preferência, o padrão é design mas pode ser alterado no componente Ranking.jsx.
- **Os Melhores de Cada Stack**: Exibe os melhores em cada categoria.
- **Top 5 da Semana**: Apresenta os 5 melhores da semana.

## 🎯 Como Usar

1. Clone este repositório para sua máquina local:

   ```bash
   git clone https://github.com/seu-usuario/future-knowledge.git
2. Navegue até a pasta do projeto:
```
cd future-knowledge
```
3. Instale as dependências:
```npm install```

4. Renomeie o arquivo .env.example para .env e adicione o link da API que você deseja consumir (se necessário o cors anywhere):
```
VITE_API_URL=SUA_URL_DA_API_AQUI
VITE_CORS_ANYWHERE=URL_CORS_ANYWHERE
```

5. Inicie o servidor de desenvolvimento:
```
npm run dev
```

Agora você pode acessar o aplicativo em seu navegador em http://localhost:3000.

## 📊 Formato dos Dados da API
Os dados recebidos da API seguem o seguinte formato:

```
{
  "name": "string",
  "email": "user@example.com",
  "age": "string",
  "field": "string",
  "points": 0
}
```
## 🌹 Agradecimento

Obrigado por explorar este projeto! Espero que seja útil para você.

Desenvolvido por [Victor Nathanael](https://www.linkedin.com/in/victornathanael/)