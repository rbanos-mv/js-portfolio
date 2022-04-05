const projects = [
  {
    title: '1Multi-Post Stories Gain+Glory',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    imageUrl: 'images/image.svg',
    technologies: ['Ruby on rails', 'css', 'JavaScript', 'html'],
    liveVersion: '',
    source: '',
  },
  {
    title: '2Multi-Post Stories Gain+Glory',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    imageUrl: 'images/image.svg',
    technologies: ['Ruby on rails', 'css', 'JavaScript', 'html'],
    liveVersion: '',
    source: '',
  },
  {
    title: '3Multi-Post Stories Gain+Glory',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    imageUrl: 'images/image.svg',
    technologies: ['Ruby on rails', 'css', 'JavaScript', 'html'],
    liveVersion: '',
    source: '',
  },
  {
    title: '4Multi-Post Stories Gain+Glory',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    imageUrl: 'images/image.svg',
    technologies: ['Ruby on rails', 'css', 'JavaScript', 'html'],
    liveVersion: '',
    source: '',
  },
  {
    title: '5Multi-Post Stories Gain+Glory',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    imageUrl: 'images/image.svg',
    technologies: ['Ruby on rails', 'css', 'JavaScript', 'html'],
    liveVersion: '',
    source: '',
  },
  {
    title: '6Multi-Post Stories Gain+Glory',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    imageUrl: 'images/image.svg',
    technologies: ['Ruby on rails', 'css', 'JavaScript', 'html'],
    liveVersion: '',
    source: '',
  },
];

const newElement = (type, classes = [], text = null) => {
  const element = document.createElement(type);
  if (!!classes && classes.length) element.classList.add(...classes);
  if (text) element.textContent = text;
  return element;
};

const newTechnologies = (technologies) => {
  const list = newElement('ul', ['card-tags']);
  for (const tech of technologies) {
    list.appendChild(newElement('li', ['tag'], tech));
  }
  return list;
};

const newActionButton = (text) => {
  const actionBtn = newElement('button', ['card-button'], text);
  actionBtn.type = 'button';
  const action = newElement('div', ['card-action']);
  action.appendChild(actionBtn);
  return action;
};

const newCard = (project) => {
  const cardContent = newElement('div', ['card-content']);
  cardContent.appendChild(newElement('h4', ['card-title'], project.title));
  cardContent.appendChild(newTechnologies(project.technologies));
  cardContent.appendChild(newActionButton('See Project', project));

  const card = newElement('div', ['card']);
  card.appendChild(cardContent);
  return card;
};

const cardContainer = document.querySelector('.card-container');
for (const project of projects) {
  cardContainer.appendChild(newCard(project));
}
