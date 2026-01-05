// INICIALIZA EMAILJS
(function () {
  emailjs.init(mtr3UbcISizngEXR8);
})();

const form = document.getElementById("formDados");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  emailjs.sendForm(
    service_0d3rwsd,
    s0ervice_0d3rwsd,
    this
  )
  .then(function () {
    alert("Dados enviados com sucesso!");
    form.reset();
  })
  .catch(function (error) {
    console.error("Erro EmailJS:", error);
    alert("Erro ao enviar. Tente em Instantes..");
  });
});
