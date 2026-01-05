(function () {
  emailjs.init("mtr3UbcISizngEXR8"); // SUA PUBLIC KEY
})();

const form = document.getElementById("formDados");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  emailjs.sendForm(
    "service_0d3rwsd",      // SERVICE ID
    "template_hwwjt38",     // TEMPLATE ID
    this
  )
  .then(() => {
    alert("Dados enviados com sucesso!");
    form.reset();
  })
  .catch((error) => {
    console.error("Erro EmailJS:", error);
    alert("Erro ao enviar. Tente em Instantes.");
  });
});
