const experiences = [
  {
    title: "Desenvolvedor Front End JR",
    company: "Tucupy Tecnologia",
    date: "NOV 2024 – ATUALMENTE",
    description: `Atuo na área de desenvolvimento front end, focado na implementação e
      melhoria de interfaces e funcionalidades em projetos internos. Meu trabalho
      envolve colaboração com a equipe e integração com serviços internos da empresa.`
  },
  {
    title: "Estagiário de desenvolvimento fullstack",
    company: "Agência Virtú Marketing Digital",
    date: "MAI 2024 – SET 2024",
    description: `Fui responsável por um sistema de notícias, onde no frontend era utilizado React
      para consumir uma API feita em Node.js. O sistema consistia em diversas páginas com
      tópicos diferentes de notícias, além de uma área administrativa. Refatorei toda a API,
      melhorando o tempo de resposta, o SEO e o desempenho geral do sistema.`
  },
  {
    title: "Estagiário de T.I",
    company: "Medcare Consultoria e Serviços Hospitalares LTDA",
    date: "MAR 2023 – ABR 2024",
    description: `Trabalhava com montagem, manutenção, formatação e instalação de programas
      em computadores, além de suporte direto aos usuários. Também fazia instalação,
      configuração e troca de suprimentos de impressoras.`
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