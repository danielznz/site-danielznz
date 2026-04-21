const hardSkills = [
  "Tailwind CSS", "TypeScript", "React", "Next.js", "API Rest",
  "Nest.js", "MongoDB", "MySQL", "PostgreSQL", "Prisma", "Git", "Docker"
];

const softSkills = [
  "Aprendizado contínuo", "Comunicação", "Proatividade",
  "Trabalho em equipe", "Organização"
];

function renderSkills(listId, skills, type) {
  const container = document.getElementById(listId);
  skills.forEach(skill => {
    container.innerHTML += `<span class="skill-tag skill-tag--${type}">${skill}</span>`;
  });
}

renderSkills("hard-skills-list", hardSkills, "hard");
renderSkills("soft-skills-list", softSkills, "soft");