const openBtn = document.getElementById("openBtn");
const cover = document.querySelector(".cover");

openBtn.addEventListener("click", (e) => {
  e.preventDefault();

  cover.classList.add("zooming");

  setTimeout(() => {
    window.location.href = "surat.html";
  }, 1000);
});