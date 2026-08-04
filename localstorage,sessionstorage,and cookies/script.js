const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
const THEME_KEY = "theme";

function applyTheme(theme) {
    document.body.className = theme;
}

function getSystemTheme() {
    return mediaQuery.matches ? "dark" : "light";
}

document.addEventListener("DOMContentLoaded", () => {
    // Load saved theme or use system theme
    const savedTheme = localStorage.getItem(THEME_KEY);
    applyTheme(savedTheme || getSystemTheme());

    // Change with system only if user hasn't chosen a theme
    mediaQuery.addEventListener("change", () => {
        if (!localStorage.getItem(THEME_KEY)) {
            applyTheme(getSystemTheme());
        }
    });

    document.getElementById("themeBtn").addEventListener("click", () => {
        const newTheme = document.body.classList.contains("dark")
            ? "light"
            : "dark";

        applyTheme(newTheme);
        localStorage.setItem(THEME_KEY, newTheme);
    });
});