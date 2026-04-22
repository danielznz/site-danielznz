const experiences = [
  {
    title: "Estágio - Desenvolvedor de Software",
    company: "BRVANT / BRV UAV & Flight Systems",
    date: "JAN 2026 – ATUALMENTE",
    description: `Atuo como estagiário em desenvolvimento de software na BRVANT, trabalhando principalmente com tecnologias web como HTML, CSS e JavaScript.
Também tenho experiência com desenvolvimento embarcado, utilizando C++ e C#, além de participar e apoiar demandas relacionadas à Inteligência Artificial.`
  },
  {
    title: "Monitor",
    company: "Fatec Itaquera",
    date: "AGO 2023 – DEZ 2023",
    description: `Fui membro do Programa de Monitoria na Fatec Itaquera, onde auxiliei alunos do 1º semestre do curso de Desenvolvimento de Software Multiplataforma na disciplina de Design Digital.`
  }
];

const list = document.getElementById("experience-list");

experiences.forEach((exp) => {
  list.innerHTML += `
    <div class="experience__item">
      <div class="experience__left">
        <h3>${exp.title}</h3>
        <span class="experience__company">${exp.company}</span>
        <span class="experience__date">${exp.date}</span>
      </div>
      <div class="experience__line">
        <div class="experience__dot"></div>
      </div>
      <div class="experience__right">
        <p>${exp.description}</p>
      </div>
    </div>
  `;
});