const essays = [
  {
    id: 1,
    title: "A Importância da Educação no Século XXI",
    content: "A educação representa um dos pilares fundamentais..."
  },
  {
    id: 1,
    title: "A Importância da Educação no Século XXI",
    content: "A educação representa um dos pilares fundamentais..."
  },
  {
    id: 1,
    title: "A Importância da Educação no Século XXI",
    content: "A educação representa um dos pilares fundamentais..."
  },
  {
    id: 1,
    title: "A Importância da Educação no Século XXI",
    content: "A educação representa um dos pilares fundamentais..."
  },
  {
    id: 1,
    title: "A Importância da Educação no Século XXI",
    content: "A educação representa um dos pilares fundamentais..."
  },
  {
    id: 1,
    title: "A Importância da Educação no Século XXI",
    content: "A educação representa um dos pilares fundamentais..."
  },
  {
    id: 1,
    title: "A Importância da Educação no Século XXI",
    content: "A educação representa um dos pilares fundamentais..."
  },
  {
    id: 1,
    title: "A Importância da Educação no Século XXI",
    content: "A educação representa um dos pilares fundamentais..."
  },
  {
    id: 1,
    title: "A Importância da Educação no Século XXI",
    content: "A educação representa um dos pilares fundamentais..."
  },
  {
    id: 1,
    title: "A Importância da Educação no Século XXI",
    content: "A educação representa um dos pilares fundamentais..."
  },
  {
    id: 1,
    title: "A Importância da Educação no Século XXI",
    content: "A educação representa um dos pilares fundamentais..."
  },
  {
    id: 1,
    title: "A Importância da Educação no Século XXI",
    content: "A educação representa um dos pilares fundamentais..."
  },
  {
    id: 1,
    title: "A Importância da Educação no Século XXI",
    content: "A educação representa um dos pilares fundamentais..."
  },
  {
    id: 1,
    title: "A Importância da Educação no Século XXI",
    content: "A educação representa um dos pilares fundamentais..."
  },
];
function createChevronIcon(isExpanded) {
  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg" );
  svg.setAttribute("fill", "none");
  svg.setAttribute("viewBox", "0 0 24 24");
  svg.setAttribute("stroke", "currentColor");
  svg.style.color = isExpanded ? "#2563eb" : "#9ca3af";
  
  const path = document.createElementNS("http://www.w3.org/2000/svg", "path" );
  path.setAttribute("stroke-linecap", "round");
  path.setAttribute("stroke-linejoin", "round");
  path.setAttribute("stroke-width", "2");
  path.setAttribute("d", "M19 9l-7 7-7-7");
  
  svg.appendChild(path);
  return svg;
}
function createEssayCard(essay) {
  const card = document.createElement('div');
  card.className = 'essay-card';
  card.dataset.id = essay.id;
  
  // Header do card
  const header = document.createElement('div');
  header.className = 'card-header';
  
  const title = document.createElement('h3');
  title.className = 'card-title';
  title.textContent = essay.title;
  
  const iconWrapper = document.createElement('div');
  iconWrapper.className = 'card-icon';
  iconWrapper.appendChild(createChevronIcon(false));
  
  header.appendChild(title);
  header.appendChild(iconWrapper);
  
  // Conteúdo do card
  const content = document.createElement('div');
  content.className = 'card-content';
  
  const contentInner = document.createElement('div');
  contentInner.className = 'card-content-inner';
  
  const text = document.createElement('p');
  text.className = 'card-text';
  text.textContent = essay.content;
  
  contentInner.appendChild(text);
  content.appendChild(contentInner);
  
  card.appendChild(header);
  card.appendChild(content);
  
  card.addEventListener('click', () => toggleCard(essay.id));
  
  return card;
}
function toggleCard(cardId) {
  const card = document.querySelector(`.essay-card[data-id="${cardId}"]`);
  const content = card.querySelector('.card-content');
  const iconWrapper = card.querySelector('.card-icon');
  
  const isExpanded = card.classList.contains('expanded');
  
  if (isExpanded) {
    // Colapsa o card
    card.classList.remove('expanded');
    content.classList.remove('expanded');
    iconWrapper.classList.remove('expanded');
    iconWrapper.innerHTML = '';
    iconWrapper.appendChild(createChevronIcon(false));
  } else {
    // Expande o card
    card.classList.add('expanded');
    content.classList.add('expanded');
    iconWrapper.classList.add('expanded');
    iconWrapper.innerHTML = '';
    iconWrapper.appendChild(createChevronIcon(true));
  }
}
function renderEssays() {
  const grid = document.getElementById('essaysGrid');
  essays.forEach(essay => {
    const card = createEssayCard(essay);
    grid.appendChild(card);
  });
}
function updateYear() {
  const yearElement = document.getElementById('currentYear');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }
}
document.addEventListener('DOMContentLoaded', () => {
  renderEssays();
  updateYear();
});