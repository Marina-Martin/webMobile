# Projeto Busca Lar

## Bruno Roveri - 10401752
## Marina Martin - 10403028

## Processo de Ideação - BuscaLar

### 1. Identificação do Problema
O problema central identificado é a dificuldade de encontrar um lar para animais encontrados nas ruas, especialmente devido à falta de divulgação organizada. Muitas pessoas tentam adotar animais através de redes sociais, mas a divulgação é desorganizada e limitada, dificultando a conexão entre quem encontrou o animal e possíveis adotantes. Além disso, nem todos têm condições de abrigar os animais temporariamente até encontrarem um dono.

### 2. Objetivo
Criar uma plataforma digital, o **BuscaLar**, que permita que pessoas que encontraram animais nas ruas possam cadastrá-los de forma simples e rápida. Ao mesmo tempo, o site deve fornecer filtros para que pessoas interessadas em adotar possam encontrar animais de forma fácil e organizada, facilitando o processo de adoção e garantindo maior visibilidade para os pets.

### 3. Público-Alvo
- **Pessoas que encontram animais nas ruas** e precisam de ajuda para encontrar um novo lar para eles.
- **Pessoas interessadas em adotar animais** (com ou sem raça definida, filhotes, adultos, etc).
- **ONGs e abrigos de animais** que podem ser parceiros para receber animais em situação de vulnerabilidade ou adicionar os animais que eles mesmos abrigam no site.

### 4. Caráter Extensionista
O **BuscaLar** é uma plataforma extensionista que vai além de facilitar a adoção de animais, com um forte compromisso social de promover a conscientização sobre o abandono e os benefícios da adoção responsável. O projeto busca transformar a realidade dos animais em situação de rua, oferecendo uma rede de apoio que envolva a comunidade e incentive a adoção como uma alternativa positiva e ética.

### 5. Wireframe
<img width="1200" height="1600" alt="image" src="https://github.com/user-attachments/assets/65059474-8b2e-4af5-ab82-dfc81fe83a43" />

### 6. Estrutura do Projeto
README.md: Contém a documentação do projeto, incluindo a identificação do problema, o objetivo, o público-alvo e o caráter extensionista
 project/: Pasta principal que abriga os arquivos da aplicação
Cachorro.jpg e Gato.jpg: Imagens usadas nas galerias da página inicial
forms.html: A página de formulário de cadastro de pets
formsScript.js: O arquivo JavaScript que controla a validação e as interações do formulário
formsStyle.css: O arquivo de design para a página de cadastro
home.html: A página inicial do site
homeScript.js: O arquivo JavaScript que cria as galerias de imagens e gerencia o pop-up
homeStyle.css: O arquivo de design para a página inicial

### 7. Como os Códigos Foram Construídos
HTML: A construção das páginas HTML partiu da definição de uma estrutura básica para o corpo do site A página inicial estabeleceu a navegação entre a busca por pets e o formulário de cadastro, definindo alvos (id="cachorros", id="gatos") para que o JavaScript pudesse injetar conteúdo dinamicamente e criando links diretos para a página de formulário. No formulário, elementos com identificadores únicos (id="nome-pet", id="email") foram criados para que o JavaScript pudesse acessá-los e validar os dados de forma específica.

CSS: A estilização foi construída com um enfoque minimalista, utilizando cores de alto contraste como preto e branco e definindo uma fonte padrão. As bordas de 2px foram aplicadas para criar um contorno em diversos elementos, como botões, cabeçalho e rodapé, mantendo uma identidade visual mínima. Efeitos de interação foram adicionados para dar feedback visual ao usuário, indicando que os elementos são clicáveis.

JavaScript: A lógica foi construída para automatizar tarefas e adicionar interatividade. Na página inicial, a função criarGaleria foi definida para receber um alvo (o id da seção), o caminho da imagem e a quantidade, e então usar um loop para criar múltiplos elementos de imagem e anexá-los ao HTML. Para o formulário, o código se conecta ao submit do formulário,
impede o envio padrão, e valida se campos essenciais estão preenchidos antes de processar os dados, garantindo que o usuário forneça as informações necessárias.

### 8. Como Replicar no Próprio Site
Para criar seu próprio projeto, a primeira etapa é definir a estrutura do seu HTML, o esqueleto da sua página. Onde você deseja que as imagens apareçam, crie um elemento como uma section ou outra tag apropriada e atribua a ele um id. Por exemplo, use <section id="minha-galeria"></section> Para que a página exiba as imagens, você precisará de arquivos de imagem salvos na mesma pasta do seu projeto ou em uma subpasta com o caminho correto. Em seguida, em seu arquivo JavaScript, você pode usar uma função como a criarGaleria para preencher essa seção dinamicamente. A função recebe o id da seção, o nome do arquivo da imagem e a quantidade de imagens que você deseja replicar. Para criar formulários, defina os campos com tags como <input> e ids únicos, como id="nome-do-usuario". Em seu JavaScript, você pode usar um "event listener" para capturar o envio do formulário, usar o id para pegar o valor de um campo e, com a ajuda de uma condicional (if), verificar se o campo foi preenchido corretamente. Essa abordagem modular permite que você construa e personalize a sua própria aplicação, garantindo que a estrutura do HTML, a lógica do JavaScript e a aparência do CSS funcionem em conjunto de forma eficiente


