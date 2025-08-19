document.addEventListener('DOMContentLoaded', function () {
  const burger = document.querySelector('.burger');
  const menu = document.getElementById('menu');

  if (!burger || !menu) return;

  function setAria(open) {
    burger.setAttribute('aria-expanded', open ? 'true' : 'false');
  }

  burger.addEventListener('click', function () {
    const isOpen = menu.classList.toggle('show');
    setAria(isOpen);
  });

  menu.addEventListener('click', function (e) {
    if (e.target.tagName === 'A') {
      menu.classList.remove('show');
      setAria(false);
    }
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && menu.classList.contains('show')) {
      menu.classList.remove('show');
      setAria(false);
    }
  });
});
