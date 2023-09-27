# 🧑‍💻 Future Knowledge

O Future Knowledge é um projeto React desenvolvido com Vite que possui duas telas: Home e Ranking. Este aplicativo consome uma API externa para exibir informações relacionadas a pontos e classificações em quatro categorias diferentes.

## Você pode conferir esse projeto clicando [aqui](https://future-knowledge.netlify.app/)

## Funcionalidades

- **Destaques da Semana**: Exibe os melhores desempenhos da semana.
- **Top 10**: Mostra os 10 melhores no campo de sua preferência, o padrão é design mas pode ser alterado no componente Ranking.jsx.
- **Os Melhores de Cada Stack**: Exibe os melhores em cada categoria.
- **Top 5 da Semana**: Apresenta os 5 melhores da semana.

## 🎯 Como Usar

1. Clone este repositório para sua máquina local:

      ```bash
      git clone https://github.com/victornathanael/future-knowledge.git
      ```
   
2. Navegue até a pasta do projeto:
      
      ```bash
      cd future-knowledge
      ```

3. Instale as dependências:
   
      ```
       npm install
      ```

4. Renomeie o arquivo .env.example para .env e adicione o link da API que você deseja consumir:
         
      ```.env
      VITE_API_URL=SUA_URL_DA_API_AQUI
      ```

6. Para exemplificar as funcionalidades do site com dados reais existe um [mock](https://pt.wikipedia.org/wiki/Objeto_mock) no arquivo ```api.js``` em ```src/services/api.js``` 
     
7. Utilizei por padrão o [cors anywhere demo](https://cors-anywhere.herokuapp.com/corsdemo) para acessar a api externa.
   
   - Caso você não precise utiliza-lo remova o mock e edite a variável ```api``` da seguinte maneira:
   
      ```js
      const api = axios.create({
          baseURL: urlApi
      });
      ```
      
   - Caso você opite por utilizar o ```cors anywhere demo``` siga os passos abaixo:
     
      1. Adicione o link do ```cors anywhere demo``` na variável de ambiente da seguinte maneira:
           
            ```.env
            VITE_CORS_ANYWHERE=https://cors-anywhere.herokuapp.com
            ```
      2. Remova o mock e utilize a variável ```api``` sem alterações.
         
      3. Por fim, entre no link e clique no botão para desbloquear temporariamente o acesso à demo.
     
            ```
            https://cors-anywhere.herokuapp.com
            ```

9. Inicie o servidor de desenvolvimento:
    
      ```
      npm run dev
      ```

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
