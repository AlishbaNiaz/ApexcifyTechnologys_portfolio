document.getElementById('year').textContent = new Date().getFullYear();

    function toggleMenu() {
      const m = document.getElementById('menu');
      m.classList.toggle('show');
    }

    document.querySelectorAll('#menu a').forEach(function (a) {
      a.addEventListener('click', function () {
        document.getElementById('menu').classList.remove('show');
      });
    });