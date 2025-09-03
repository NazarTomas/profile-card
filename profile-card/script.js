document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("themeToggle");

  const apply = (isDark) => {
    document.body.classList.toggle("dark", isDark);
    if (btn) {
      btn.textContent = isDark ? "Light theme" : "Dark theme";
      btn.setAttribute("aria-pressed", String(isDark));
    }
  };

  const saved = localStorage.getItem("theme");
  const prefersDark =
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches;

  const initialDark = saved ? saved === "dark" : prefersDark;
  apply(initialDark); // вот тут применяем, НЕ трогаем toggle заранее

  if (!btn) {
    console.warn("Button with id='themeToggle' was not found");
    return;
  }

  btn.addEventListener("click", () => {
    const next = !document.body.classList.contains("dark");
    apply(next);
    localStorage.setItem("theme", next ? "dark" : "light");
  });
});




