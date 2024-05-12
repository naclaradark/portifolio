function abrirEnvelope() {
    var envelope = document.getElementById("envelope");
    var mensagem = document.getElementById("mensagem");
  
    envelope.style.height = "300px";
    mensagem.style.display = "block";
  }
  
  function criarFlores() {
    var floresContainer = document.getElementById("flores");
    for (var i = 0; i < 50; i++) {
      var flor = document.createElement("div");
      flor.classList.add("flor");
      flor.style.top = Math.random() * 100 + "vh";
      flor.style.left = Math.random() * 100 + "vw";
      floresContainer.appendChild(flor);
    }
  }
  
  criarFlores();
  