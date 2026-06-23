const menu = document.querySelector("[data-nav-menu]");
const toggle = document.querySelector("[data-nav-toggle]");
const closeButton = document.querySelector("[data-nav-close]");
const header = document.querySelector(".site-header");

if (menu && toggle && closeButton) {
  const setMenu = (open) => {
    menu.classList.toggle("open", open);
    toggle.setAttribute("aria-expanded", String(open));
    document.body.classList.toggle("menu-open", open);
  };

  toggle.addEventListener("click", () => setMenu(true));
  closeButton.addEventListener("click", () => setMenu(false));
  menu.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => setMenu(false)));
  window.addEventListener("keydown", (event) => {
    if (event.key === "Escape") setMenu(false);
  });
}

if (header) {
  const syncHeader = () => header.classList.toggle("scrolled", window.scrollY > 8);
  syncHeader();
  window.addEventListener("scroll", syncHeader, { passive: true });
}
