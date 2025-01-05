// Theme toggle functionality
document.querySelector('.theme-toggle').addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
});

// Add light-mode styles
document.addEventListener('DOMContentLoaded', () => {
    const style = document.createElement('style');
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

        .light-mode .theme-toggle {
            color: #666;
        }

        .light-mode .theme-toggle:hover {
            color: #000;
        }
    `;
    document.head.append(style);
});
