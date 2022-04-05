const newMenuItem = (text, ref) => {
  let anchor = document.createElement('a');
  anchor.href = ref;
  anchor.textContent = text;
  let menuItem = document.createElement('li');
  menuItem.classList.add('menu-item');
  menuItem.appendChild(anchor);
  return menuItem;
};

const openMenu = (img) => {
  document.querySelector('.logo-text').textContent = '';
  img.src = 'images/icon-cancel.svg';
  img.alt = 'cancel icon';

  const menuList = document.createElement('ul');
  menuList.classList.add('menu-items');

  menuList.appendChild(newMenuItem('Portfolio', '#'));
  menuList.appendChild(newMenuItem('About', '#'));
  menuList.appendChild(newMenuItem('Contact', '#'));

  const menu = document.createElement('div');
  menu.classList.add('menu');
  menu.appendChild(menuList);

  const menuDiv = document.querySelector('#menu-div');
  menuDiv.appendChild(menu);
};

document.querySelector('.menu-button').addEventListener('click', (event) => {
  if (event.target.alt === 'menu icon') {
    openMenu(event.target);
  }
});
