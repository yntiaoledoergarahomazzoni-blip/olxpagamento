// INICIALIZA EMAILJS
(function () {
  emailjs.init("SUA_PUBLIC_KEY_AQUI");
})();

const form = document.getElementById("formDados");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  emailjs.sendForm(
    "SEU_SERVICE_ID",
    "SEU_TEMPLATE_ID",
    this
  )
  .then(function () {
    alert("Dados enviados com sucesso!");
    form.reset();
  })
  .catch(function (error) {
    console.error("Erro EmailJS:", error);
    alert("Erro ao enviar. Verifique o console.");
  });
});
