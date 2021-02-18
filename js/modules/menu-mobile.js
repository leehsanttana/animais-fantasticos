import outsideClick from './outsideclick.js';

export default function initMenuMobile() {
  const menuBtn = document.querySelector('[data-menu="button"]');
  const menuList = document.querySelector('[data-menu="list"]');
  const eventos = ['click', 'touchstart'];

  function openMenu() {
    menuList.classList.toggle('active');
    menuBtn.classList.toggle('active');
    outsideClick(menuList, eventos, () => {
      menuList.classList.remove('active');
      menuBtn.classList.remove('active');
    });
  }

  eventos.forEach((evento) => {
    menuBtn.addEventListener(evento, openMenu);
  });
}
