const closeMenu = () => {
  const menu = document.querySelector('.menu');
  menu.remove();
};

const openMenu = () => {
  const menuDiv = document.querySelector('#menu-div');

  const menu = document.createElement('div');
  menu.classList.add('menu');
  menuDiv.appendChild(menu);

  const closeButton = document.createElement('div');
  closeButton.classList.add('menu-button');
  menu.appendChild(closeButton);

  const closeIcon = document.createElement('img');
  closeIcon.src = 'images/icon-cancel.svg';
  closeIcon.alt = 'menu icon';
  closeButton.appendChild(closeIcon);
  closeButton.addEventListener('click', () => {
    closeMenu();
  });

  const menuList = document.createElement('ul');
  menuList.classList.add('menu-items');
  menu.appendChild(menuList);

  let menuItem = document.createElement('li');
  menuItem.classList.add('menu-item');
  let anchor = document.createElement('a');
  anchor.href = '#works';
  anchor.textContent = 'Portfolio';
  anchor.addEventListener('click', () => closeMenu());
  menuItem.appendChild(anchor);
  menuList.appendChild(menuItem);

  menuItem = document.createElement('li');
  menuItem.classList.add('menu-item');
  anchor = document.createElement('a');
  anchor.href = '#about';
  anchor.textContent = 'About';
  anchor.addEventListener('click', () => closeMenu());
  menuItem.appendChild(anchor);
  menuList.appendChild(menuItem);

  menuItem = document.createElement('li');
  menuItem.classList.add('menu-item');
  anchor = document.createElement('a');
  anchor.href = '#contact';
  anchor.textContent = 'Contact';
  anchor.addEventListener('click', () => closeMenu());
  menuItem.appendChild(anchor);
  menuList.appendChild(menuItem);
};

document.querySelector('.menu-button').addEventListener('click', () => {
  openMenu();
});
