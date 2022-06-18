# On17-TodasEmTech - Semana do Desafio (19/6 e 23/6)

## Desafio de API - Pokedex

O projeto será individual, mas nada impede que a troca de conhecimento aconteça! Nessa semana, vamos criar uma Pokedex, utilizando uma API que retorna dados de todos os pokemons que existem.

Teremos como base essa aplicação aqui: https://www.pokemon.com/us/pokedex/

Nela, é possível pesquisar um nome de pokemon através do campo de input e ao clicar no botão de pesquisa, ele retorna um card com o pokemon correspondente.

### Algumas orientações
- O projeto deverá ter 1 página.
- A página deve funcionar em todos os dispositivos (desktop, tablet e celular).
- Não é permitido o uso de Jquery ou nenhuma outra biblioteca/framework.
- O layout está como exemplo, mas pode ser personalizado de acordo com o conhecimento e criatividade de vocês
- Caso não tenha muito tempo, foque mais na lógica de requisição da API do que na beleza do projeto em si, é mais importante consumir os dados do que deixar CSS perfeito

### Fase 1
- Criar uma estrutura de cards para exibição dos pokémons! Todas as informações abaixo devem vir da API: https://pokeapi.co/
- O input recebe o nome do pokemon.  Quando clicar no botão “submit”, caso o nome exista dentro da base de dados da API, a aplicação deve mostrar os dados dessa forma: 
    - Exibir o nome dos pokémons e seu número da pokédex.
    - Exibir a imagem desse pokémons.
    - Exibir o tipo de pokemon. Se houver mais de um, separar por pipe (“ | “).

**Exemplo**:

<p align="center">
  <img src="./img/card-exemplo.png" />
</p>

_Atenção: a imagem deve ser requisitada em outra API, com este link: https://pokeres.bastionbot.org/images/pokemon/${id}.png_

### Fase 2
- Adicionar a cor de fundo na div “card”, de acordo com o primeiro tipo do pokemon. Veja no style.css o nome das cores.
- Criar a validação de, se não houver pokémon com aquele nome, exibir o texto “pokémon não encontrado :(” na tela

### Fase EXTRA
- Deixe seu card ainda mais informativo! Crie novos espaços para informações, acrescentando informações como peso, altura, força, etc.

<p align="center">
  <img src="./img/card-exemplo2.png" />
</p>

### Fase BÔNUS
- Permitir que o usuário adicione até 20 pokemons 
- Adicionar filtros, podendo ser por: tipos, fraquezas, alturas, pesos e quantitativo de números, etc.


