const hardSkills = [
  "Javascript", "C#", "C++", "React Native", "Typescript", "HTML", "CSS", "MySQL", "Git",
  "Photoshop", "Figma"
];

const softSkills = [
  "Curiosidade por ferramentas novas", "Comunicação", "Capacidade de Adaptação", "Criatividade",
  "Trabalho em equipe", "Organização",
];

function renderSkills(listId, skills, type) {
  const container = document.getElementById(listId);
  skills.forEach(skill => {
    container.innerHTML += `<span class="skill-tag skill-tag--${type}">${skill}</span>`;
  });
}

renderSkills("hard-skills-list", hardSkills, "hard");
renderSkills("soft-skills-list", softSkills, "soft");