const educations = [
  {
    institution: "FATEC Itaquera",
    course: "Desenvolvimento de Software Multiplataforma",
    period: "2023 – 2026",
    description: "Graduação focada em desenvolvimento de software, estruturas de dados, banco de dados e engenharia de sistemas.",
    country: "br"
  },
  {
    institution: "Instituto Politécnico da Maia",
    course: "Tecnologias de Informação, Web e Multimédia",
    period: "2025",
    description: "Formação prática em desenvolvimento web moderno com foco em React, Node.js, APIs REST e boas práticas de código.",
    country: "pt"
  },
    {
    institution: "ETEC Ferraz de Vasconcelos",
    course: "Programação de Jogos Digitais",
    period: "2020 – 2022",
    description: "Formação prática em desenvolvimento web moderno com foco em React, Node.js, APIs REST e boas práticas de código.",
    country: "br"
  }
];

const grid = document.getElementById("education-grid");

educations.forEach((edu) => {
  grid.innerHTML += `
    <div class="education__card">
      <div class="education__card-header">
        <img
          class="education__flag"
          src="/assets/icons/flags/${edu.country}.png"
          alt="País: ${edu.country.toUpperCase()}"
        />
        <div>
          <h3 class="education__institution">${edu.institution}</h3>
          <span class="education__period">${edu.period}</span>
        </div>
      </div>
      <p class="education__course"><br>${edu.course}</p>
      <p class="education__description">${edu.description}</p>
    </div>
  `;
});