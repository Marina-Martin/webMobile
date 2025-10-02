# Projeto Busca Lar

## Bruno Roveri - 10401752
## Marina Martin - 10403028

## 1. Processo de Ideação – BuscaLar

### 1.1 Identificação do Problema
O problema central identificado é a dificuldade de encontrar um lar para animais encontrados nas ruas, especialmente devido à falta de divulgação organizada. Muitas pessoas tentam adotar animais através de redes sociais, mas a divulgação é desorganizada e limitada, dificultando a conexão entre quem encontrou o animal e possíveis adotantes. Além disso, nem todos têm condições de abrigar os animais temporariamente até encontrarem um dono.

### 1.2 Objetivo
Criar uma plataforma digital, o **BuscaLar**, que permita que pessoas que encontraram animais nas ruas possam cadastrá-los de forma simples e rápida. Ao mesmo tempo, o site deve fornecer filtros para que pessoas interessadas em adotar possam encontrar animais de forma fácil e organizada, facilitando o processo de adoção e garantindo maior visibilidade para os pets.

### 1.3 Público-Alvo
- Pessoas que encontram animais nas ruas e precisam de ajuda para encontrar um novo lar para eles.
- Pessoas interessadas em adotar animais (com ou sem raça definida, filhotes, adultos, etc).
- ONGs e abrigos de animais que podem ser parceiros para receber animais em situação de vulnerabilidade ou adicionar os animais que eles mesmos abrigam no site.

### 2. Caráter Extensionista
O BuscaLar vai além de ser apenas um site: ele assume um compromisso social.
- Impacto real: oferece visibilidade organizada aos animais em situação de rua.
- Conscientização: promove a adoção responsável, combatendo o abandono.
- Rede comunitária: aproxima tutores temporários, adotantes e ONGs, criando uma rede de apoio.

### 5. Wireframe
<img width="1200" height="1600" alt="image" src="https://github.com/user-attachments/assets/65059474-8b2e-4af5-ab82-dfc81fe83a43" />

### 4. Estrutura do Projeto
- README.md: documentação do projeto.
- Cachorro.jpg e Gato.jpg: imagens iniciais da galeria.
- home.html: página inicial com seções de cães e gatos.
- homeScript.js: cria as galerias dinamicamente e exibe pop-ups.
- homeStyle.css: estilos da página inicial.
- forms.html: formulário de cadastro de pets.
- formsScript.js: validação e captura de dados do formulário.
- formsStyle.css: estilos da página de cadastro.

### 5. Como os Códigos Foram Construídos
### 5.1 HTML
O HTML é a estrutura base do site. Ele define o conteúdo e a semântica.
### home.html
- Usa um header com o título Busca Lar.
- O main contém duas sections: uma para cachorros (id="cachorros") e outra para gatos (id="gatos").
- Esses IDs são fundamentais porque o JavaScript localiza esses elementos para inserir as imagens dinamicamente.
- Também há botões que levam ao formulário ou disparam pop-ups.

### forms.html
- Estrutura um formulário dentro de fieldset para agrupar os campos.
- Campos importantes como nome do pet e e-mail têm IDs únicos (id="nome-pet", id="email") para serem validados no JS.
- O botão de envio dispara o event listener no formsScript.js.

### 5.2 CSS
O CSS foi pensado para ser minimalista, mas garantindo identidade visual.
### homeStyle.css
- Define fonte padrão e centraliza elementos.
- As imagens da galeria recebem largura e altura fixas (150px).
- object-fit: cover garante que a imagem preencha o espaço sem distorcer.

### formsStyle.css
- Aplica bordas de 2px pretas em vários elementos (form, header, footer, botões).
- Usa fieldset e legend para dar clareza visual aos grupos de inputs.
- Botões têm hover para dar feedback visual.

### 5.3 JavaScript
O JavaScript dá vida e dinamismo ao projeto. Foram implementadas três lógicas principais:
### Criação dinâmica da galeria (homeScript.js)
- A função criarGaleria(id, src, alt, quantidade) recebe:
- o id da seção onde as imagens serão inseridas,
- o caminho da imagem (src),
- o texto alternativo (alt),
- e quantas imagens devem ser criadas.
- Um loop for é usado para criar várias imagens sem precisar escrever img manualmente no HTML.

### Pop-up informativo (homeScript.js e formsScript.js)
- A função mostrarPopup usa alert para informar que a funcionalidade ainda está em desenvolvimento.
- É uma interação simples, mas mostra como JS consegue interagir diretamente com o usuário.

### Validação do formulário (formsScript.js)
- O formulário é “interceptado” com addEventListener("submit", ...).
- O event.preventDefault() evita que a página recarregue automaticamente.
- Depois, os valores são capturados com document.getElementById("id").value.
- Se nome ou email estiverem vazios, um alerta é mostrado.
- Caso contrário, exibe um resumo dos dados digitados.

### 6. Como Replicar no Próprio Site
### Monte o HTML
- Crie seções com id para permitir que o JS injete imagens.
- Use form com campos input e id únicos.

### Adicione CSS
- Estilize as imagens com object-fit: cover.
- Use hover em botões para dar retorno ao usuário.

### Escreva o JS
- Use document.getElementById() para localizar elementos.
- Crie funções reutilizáveis (criarGaleria para imagens, validação para formulário).
- Intercepte o submit para validar os campos antes de enviar.
Essa modularização permite que cada parte seja reaproveitada em outros projetos.

### 7. Conclusão – Aprendizados Adquiridos
Durante o desenvolvimento do Busca Lar, tivemos uma série de aprendizados importantes tanto no aspecto técnico quanto no extensionista:
- HTML5: aprendemos a importância de estruturar a página de forma semântica, usando elementos como section, header e footer para organizar o conteúdo de forma clara. Também percebemos como a definição de ids é fundamental para integrar o HTML com o JavaScript.
- CSS3: compreendemos como o design influencia diretamente a experiência do usuário. Pequenos ajustes, como hover em botões ou object-fit: cover em imagens, fazem diferença para transmitir profissionalismo e facilitar a navegação.
- JavaScript: Vimos como manipular o DOM com createElement e appendChild, como interceptar eventos de formulário com addEventListener, e como validar dados antes de processá-los. Isso mostrou na prática como o JavaScript torna a aplicação dinâmica e interativa.
- Caráter extensionista: Aprendemos a enxergar a programação como um meio de resolver problemas reais da comunidade — neste caso, conectando animais em situação de vulnerabilidade a pessoas dispostas a adotar.

Em resumo: aprendemos a transformar um problema real em uma solução digital mínima, unindo conceitos de HTML, CSS e JS de forma prática e didática, com foco em impacto social. Esse processo nos mostrou que, mesmo com um site simples, é possível gerar valor para a comunidade e criar a base de um projeto maior.

