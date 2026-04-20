const fatecProjects = [
  {
    title: "Design",
    description: "Plataforma para gestão de alunos, notas e disciplinas.",
    github: "#",
    video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    images: ["/img/project1.jpg", "/img/project2.jpg"]
  },

   {
    title: "Design",
    description: "Plataforma para gestão de alunos, notas e disciplinas.",
    github: "#",
    video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    images: ["/img/project1.jpg", "/img/project2.jpg"]
  },

     {
    title: "Design",
    description: "Plataforma para gestão de alunos, notas e disciplinas.",
    github: "#",
    video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    images: ["/img/project1.jpg", "/img/project2.jpg"]
  },

     {
    title: "Design",
    description: "Plataforma para gestão de alunos, notas e disciplinas.",
    github: "#",
    video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    images: ["/img/project1.jpg", "/img/project2.jpg"]
  },

     {
    title: "Projeto Barbeária | 5º Semestre",
    description: "Aplicativo mobile desenvolvido como uma solução real para uma Barbearia da zona leste de São Paulo.",
    github: "#",
    video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    images: ["/img/project1.jpg", "/img/project2.jpg"]
  }

  
];

const personalProjects = [
  {
    title: "Barbearia App",
    description: "Sistema de agendamento online com painel administrativo.",
    github: "#",
    video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    images: ["/img/project3.jpg"]
  }
];

function renderProjects(list, containerId) {
  const container = document.getElementById(containerId);

  list.forEach(project => {
    const card = document.createElement('article');
    card.className = 'project-card';
    card.innerHTML = `
      <h4>${project.title}</h4>
      <p>${project.description}</p>
      <a href="${project.github}" target="_blank">GitHub</a>
    `;

    card.addEventListener('click', () => openProject(project));
    container.appendChild(card);
  });
}

function openProject(project) {
  const details = document.getElementById('projectDetails');

  details.innerHTML = `
    <h2>${project.title}</h2>
    <p>${project.description}</p>
    <a href="${project.github}" target="_blank">Ver GitHub</a>
    <iframe width="100%" height="400" src="${project.video}" frameborder="0" allowfullscreen></iframe>
    <div class="project-gallery">
      ${project.images.map(img => `<img src="${img}" alt="${project.title}">`).join('')}
    </div>
  `;

  document.getElementById('projectModal').classList.add('active');
}

function closeProject() {
  document.getElementById('projectModal').classList.remove('active');
}

renderProjects(fatecProjects, 'fatec-projects');
renderProjects(personalProjects, 'personal-projects');