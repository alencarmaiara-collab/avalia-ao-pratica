// Função para o Botão de Tema (Claro / Escuro)
const themeToggleBtn = document.getElementById('theme-toggle');

themeToggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  
  if (document.body.classList.contains('dark-mode')) {
    themeToggleBtn.textContent = '☀️ Modo Claro';
  } else {
    themeToggleBtn.textContent = '🌙 Modo Escuro';
  }
});

// Função para o Botão de Curtida
const likeBtn = document.getElementById('like-btn');
const likeCount = document.getElementById('like-count');

let likes = 0;
let liked = false;

likeBtn.addEventListener('click', () => {
  if (!liked) {
    likes++;
    liked = true;
    likeBtn.style.backgroundColor = '#b71c1c';
  } else {
    likes--;
    liked = false;
    likeBtn.style.backgroundColor = 'var(--accent-color)';
  }
  likeCount.textContent = likes;
});