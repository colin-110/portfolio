const toggleBtn = document.getElementById('toggleThemeBtn');
const body = document.body;

function setMode(isDark) {
  if (isDark) {
    body.classList.add('dark');
    toggleBtn.textContent = 'Light Mode';
    localStorage.setItem('theme', 'dark');
  } else {
    body.classList.remove('dark');
    toggleBtn.textContent = 'Dark Mode';
    localStorage.setItem('theme', 'light');
  }
}

toggleBtn.addEventListener('click', () => {
  const isDark = body.classList.contains('dark');
  setMode(!isDark);
});

const savedTheme = localStorage.getItem('theme');
setMode(savedTheme === 'dark');
