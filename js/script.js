document.getElementById("formDados").addEventListener("submit", function(e) {
  e.preventDefault();

  const pixTipos = Array.from(
    document.querySelectorAll('input[name="pixTipo"]:checked')
  ).map(el => el.value).join(", ");

  const dados = {
    nome: this.nome.value,
    cpf: this.cpf.value,
    telefone: this.telefone.value,
    email: this.email.value,
    pixTipo: pixTipos,
    pixChave: this.pixChave.value
  };

  emailjs.send(
    service_0d3rwsd,
    template_hwwjt38,
    dados
  ).then(() => {
    alert("Dados enviados com sucesso!");
    this.reset();
  }).catch((error) => {
    alert("Erro ao enviar. Tente novamente.");
    console.error(error);
  });
});
