// Animación suave al hacer scroll
window.addEventListener("scroll", () => {
  const cards = document.querySelectorAll(".card");

  cards.forEach(card => {
    const position = card.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.2;

    if(position < screenPosition){
      card.style.opacity = "1";
      card.style.transform = "translateY(0)";
    }
  });
});

// Estado inicial
document.querySelectorAll(".card").forEach(card => {
  card.style.opacity = "0";
  card.style.transform = "translateY(50px)";
  card.style.transition = "0.8s";
});