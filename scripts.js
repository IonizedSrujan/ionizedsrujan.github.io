// Theme toggle functionality
const toggleTheme = document.getElementById("toggle-theme");
toggleTheme.addEventListener("change", () => {
    document.body.classList.toggle("light-mode");
});

// Add light-mode styles dynamically
document.addEventListener("DOMContentLoaded", () => {
    const style = document.createElement("style");
    style.textContent = `
        .light-mode {
            background-color: #f0f0f0;
            color: #121212;
        }

        .light-mode .nav-link {
            background-color: #fff;
            color: #121212;
            border: 1px solid #ccc;
        }

        .light-mode .nav-link:hover {
            background-color: #eee;
        }

        .light-mode .slider {
            background-color: #ccc;
        }
    `;
    document.head.append(style);
});
