document.getElementById("pesoForm").addEventListener("submit", function(event) {
    event.preventDefault();
  
    const peso = parseFloat(document.getElementById("peso").value);
    const imagen = document.getElementById("img");
    const audio = document.getElementById("sonido");
  
    if (peso > 67) {
      imagen.classList.remove("oculto");
      audio.play();
    } else {
      imagen.classList.add("oculto");
      audio.pause();
      audio.currentTime = 0;
    }
  });
  