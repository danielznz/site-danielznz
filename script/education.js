const educations = [
  {
    institution: "FATEC Itaquera",
    course: "Desenvolvimento de Software Multiplataforma",
    period: "2023 – 2026",
    description: "Formação focada no desenvolvimento de aplicações desktop, web e mobile. Durante o curso, adquiri conhecimentos sólidos em diversas tecnologias e ferramentas, aplicando-os em projetos práticos ao longo da graduação.",
    country: "br"
  },
  {
    institution: "Instituto Politécnico da Maia",
    course: "Tecnologias de Informação, Web e Multimédia",
    period: "2025",
    description: "Participei do programa de mobilidade internacional da FATEC (CPS) em 2025, tendo a oportunidade de cursar um semestre no IPMAIA, em Portugal. Essa experiência contribuiu significativamente para meu crescimento profissional, permitindo contato com novas tecnologias, ferramentas e diferentes culturas.",
    country: "pt"
  },
    {
    institution: "ETEC Ferraz de Vasconcelos",
    course: "Programação de Jogos Digitais",
    period: "2020 – 2022",
    description: "Cursei o ensino técnico em Jogos Digitais integrado ao Ensino Médio em 2020. Essa formação foi fundamental para minha introdução na área de tecnologia, despertando meu interesse por desenvolvimento e lógica de programação.",
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
          src="./assets/icons/flags/${edu.country}.png"
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