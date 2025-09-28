function mostrarPopup() {
  alert("Em construção");
}

const form = document.querySelector("form");
form.addEventListener("submit", function (event) {
  event.preventDefault(); 

  const nome = document.getElementById("nome-pet").value.trim();
  const email = document.getElementById("email").value.trim();

  if (!nome || !email) {
    alert("Por favor, preencha o nome do pet e o e-mail.");
    return; 
  }

  alert("Dados do Pet: Nome - " + nome + ", E-mail - " + email);
});