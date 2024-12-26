document.querySelectorAll('.dropdown-header').forEach(header => {
    header.addEventListener('click', () => {
        const content = header.nextElementSibling;
        const arrow = header.querySelector('.arrow');
        
        content.classList.toggle('active');
        arrow.classList.toggle('active');
    });
});

function applyTheme() {
const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);
    if (currentTheme === 'dark') {
        document.getElementById('theme-toggle').checked = true;
    }
}
}

// Função para alternar o tema
function toggleTheme() {
if (document.documentElement.getAttribute('data-theme') === 'dark') {
    document.documentElement.setAttribute('data-theme', 'light');
    localStorage.setItem('theme', 'light');
} else {
    document.documentElement.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark');
}
}

// Adiciona o evento de clique ao switch
document.getElementById('theme-toggle').addEventListener('change', toggleTheme);

// Aplica o tema salvo ao carregar a página
applyTheme();