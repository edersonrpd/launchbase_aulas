const modalOverlay = document.querySelector(".modal-overlay");
const cards = document.querySelectorAll(".card");

// função para pegar  o id do video e inserir no modal
/* Modal Desativado

for (let card of cards) {
  card.addEventListener("click", () => {
    const videoID = card.getAttribute("id");
    modalOverlay.classList.add("active");
    modalOverlay.querySelector(
      "iframe"
    ).src = `https://www.youtube.com/embed/${videoID}`;
  });
}*/

for (let card of cards) {
  card.addEventListener("click", () => {
    const videoID = card.getAttribute("id");
    window.location.href = `/video?id=${videoID}`
  });
}

//Fechar o modal
document.querySelector("close-modal").addEventListener("click", function () {
  modalOverlay.classList.remove("active");
  modalOverlay.querySelector("iframe").src = "";
});

