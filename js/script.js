document.getElementById("formDados").addEventListener("submit", function (e) {
  e.preventDefault();

  const campos = this.querySelectorAll("input[required]");
  for (let campo of campos) {
    if (!campo.value.trim()) {
      alert("Preencha todos os campos obrigatórios.");
      campo.focus();
      return;
    }
  }

  alert("Dados enviados com sucesso (simulação).");
  this.reset();
});
