const CLAVE_TEMA = 'portafolio-tema';
const raiz       = document.documentElement;
const btnTema    = document.querySelector('.nav__tema');

function aplicarTema(tema) {
  if (tema === 'claro') {
    raiz.setAttribute('data-theme', 'claro');
  } else {
    raiz.removeAttribute('data-theme');
  }

  if (btnTema) {
    const esClaro = tema === 'claro';
    btnTema.setAttribute('aria-pressed', String(esClaro));
    btnTema.setAttribute(
      'aria-label',
      esClaro ? 'Activar modo oscuro' : 'Activar modo claro'
    );
  }
}

function temaInicial() {
  const guardado = localStorage.getItem(CLAVE_TEMA);
  if (guardado === 'claro' || guardado === 'oscuro') {
    return guardado;
  }
  const prefiereClaro =
    window.matchMedia &&
    window.matchMedia('(prefers-color-scheme: light)').matches;
  return prefiereClaro ? 'claro' : 'oscuro';
}

aplicarTema(temaInicial());

if (btnTema) {
  btnTema.addEventListener('click', () => {
    const nuevoTema = raiz.getAttribute('data-theme') === 'claro'
      ? 'oscuro'
      : 'claro';

    aplicarTema(nuevoTema);
    localStorage.setItem(CLAVE_TEMA, nuevoTema);
  });
}


const navToggle = document.querySelector('.nav__toggle');
const navMenu   = document.querySelector('.nav__menu');

if (navToggle && navMenu) {

  navToggle.addEventListener('click', () => {
    const estaAbierto = navMenu.classList.toggle('is-abierto');
    navToggle.setAttribute('aria-expanded', String(estaAbierto));
  });

  navMenu.querySelectorAll('.nav__link').forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('is-abierto');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navMenu.classList.contains('is-abierto')) {
      navMenu.classList.remove('is-abierto');
      navToggle.setAttribute('aria-expanded', 'false');
      navToggle.focus();
    }
  });
}
