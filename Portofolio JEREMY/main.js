 // js/main.js
document.addEventListener("DOMContentLoaded", () => {
  // 1) Animasi progress bar (dari 0 -> target)
  const bars = document.querySelectorAll(".skill-progress");
  bars.forEach(bar => {
    const target = bar.style.width || bar.getAttribute("data-target") || "0%";
    bar.style.width = "0";
    // beri sedikit delay agar transisi terlihat
    setTimeout(() => {
      bar.style.width = target;
    }, 300);
  });

  // 2) Toggle menu (hamburger) untuk mobile
  const toggle = document.querySelector(".menu-toggle");
  const navMenu = document.querySelector(".main-nav ul");
  if (toggle && navMenu) {
    toggle.addEventListener("click", () => {
      const isShown = navMenu.classList.toggle("show");
      // perbarui aria-expanded untuk aksesibilitas
      toggle.setAttribute("aria-expanded", isShown ? "true" : "false");
    });
  }

  // 3) Update tahun di footer
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
});
