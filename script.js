const header = document.querySelector("[data-header]");
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelectorAll(".site-nav a");
const galleryButtons = document.querySelectorAll("[data-gallery]");
const modal = document.querySelector("[data-modal]");
const modalImage = document.querySelector("[data-modal-image]");
const closeModalButtons = document.querySelectorAll("[data-close-modal]");
const privacyModal = document.querySelector("[data-privacy]");
const openPrivacy = document.querySelector("[data-open-privacy]");
const closePrivacyButtons = document.querySelectorAll("[data-close-privacy]");

menuToggle?.addEventListener("click", () => {
  const isOpen = header.classList.toggle("nav-open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    header.classList.remove("nav-open");
    menuToggle?.setAttribute("aria-expanded", "false");
  });
});

galleryButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const src = button.getAttribute("data-gallery");
    const image = button.querySelector("img");

    if (!src || !modal || !modalImage) return;

    modalImage.src = src;
    modalImage.alt = image?.alt || "Foto da Drogaria Ultra Popular";
    modal.hidden = false;
    document.body.style.overflow = "hidden";
  });
});

function closeGallery() {
  if (!modal || !modalImage) return;
  modal.hidden = true;
  modalImage.src = "img/fachada.jpg";
  document.body.style.overflow = "";
}

closeModalButtons.forEach((button) => {
  button.addEventListener("click", closeGallery);
});

openPrivacy?.addEventListener("click", () => {
  if (!privacyModal) return;
  privacyModal.hidden = false;
  document.body.style.overflow = "hidden";
});

function closePrivacy() {
  if (!privacyModal) return;
  privacyModal.hidden = true;
  document.body.style.overflow = "";
}

closePrivacyButtons.forEach((button) => {
  button.addEventListener("click", closePrivacy);
});

document.addEventListener("keydown", (event) => {
  if (event.key !== "Escape") return;
  closeGallery();
  closePrivacy();
});
