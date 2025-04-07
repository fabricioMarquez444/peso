document.getElementById("pesoForm").addEventListener("submit", function(event) {
  event.preventDefault();

  const peso = parseFloat(document.getElementById("peso").value);
  const imagen = document.getElementById("imagen");
  const audio = document.getElementById("audio");

  if (peso > 67) {
    imagen.classList.remove("oculto");
    audio.play();
  } else {
    imagen.classList.add("oculto");
    audio.pause();
    audio.currentTime = 0;
  }
});
