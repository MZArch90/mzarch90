const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.site-nav');

menuButton.addEventListener('click', () => {
  const open = navigation.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(open));
  document.body.style.overflow = open ? 'hidden' : '';
});

navigation.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navigation.classList.remove('open');
    menuButton.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  });
});

document.getElementById('year').textContent = new Date().getFullYear();

document.getElementById('contact-form').addEventListener('submit', event => {
  event.preventDefault();
  document.getElementById('form-note').textContent =
    'Спасибо! Это демонстрационная форма. На следующем этапе подключим отправку заявок.';
});
