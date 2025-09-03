const toggle = document.getElementById("themeToggle");
toggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  const pressed = document.body.classList.contains("dark");
  toggle.setAttribute("aria-pressed", pressed);
  toggle.textContent = pressed ? "Light theme" : "Dark theme";
});
