/* ==========================================
   PROJETOS - PORTFÓLIO DANIEL
========================================== */

/* ==========================================
   DADOS DOS PROJETOS
========================================== */

const fatecProjects = [
  {
    title: "Layout Site | 1º Semestre",
    description:
      "Protótipo de interface criado com foco em design moderno, usabilidade e experiência do usuário.",

    cover: "/assets/img/p1/p1-thumb.png",
    technologies: ["Figma", "Photoshop"],

    github:
      "https://www.figma.com/design/S9ktJk36m1krUVHgomcuxO/Recicle-Aqui?node-id=0-1&t=BNtTTun7oerF4gva-1",

    video: "/assets/img/p1/p1-video.mp4",

    aboutProject:
      "Projeto voltado para design de interfaces digitais, desenvolvido com foco em experiência do usuário, identidade visual e navegação intuitiva. O objetivo foi criar um layout moderno e funcional para uma plataforma digital.",

    myRole:
      "Fui responsável pela criação visual do projeto, prototipação das telas, definição de cores, organização de conteúdo e aplicação de conceitos de UI/UX utilizando Figma e Photoshop.",

    images: [
      "/assets/img/p1/p1-img1.png",
      "/assets/img/p1/p1-img2.png",
      "/assets/img/p1/p1-img3.png",
      "/assets/img/p1/p1-img4.png",
      "/assets/img/p1/p1-img5.png"
    ]
  },

  {
    title: "CRUD | 2º Semestre",
    description:
      "Sistema CRUD completo criado para praticar operações de backend e manipulação de dados.",

    cover: "/assets/img/p2/p2-thumb.png",
    technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],

    github: "https://github.com/danielznz/ProvaWebDaniel-main",
    video: "/assets/img/p2/p2-video.mp4",

    aboutProject:
      "Projeto desenvolvido com foco em aprendizado e evolução técnica na área de backend. A aplicação permitia criar, visualizar, editar e remover registros, aplicando na prática os conceitos fundamentais de um sistema CRUD.",

    myRole:
      "Fui responsável por desenvolver a lógica da aplicação, integração com banco de dados, operações de cadastro, atualização, exclusão e estruturação do backend.",

    images: [
      "/assets/img/p2/p2-img1.png",
      "/assets/img/p2/p2-img2.png",
      "/assets/img/p2/p2-img3.png",
      "/assets/img/p2/p2-img4.png",
      "/assets/img/p2/p2-img5.png"
    ]
  },

  {
    title: "E-commerce | 3º Semestre",
    description:
      "Catálogo digital interativo criado para apresentar produtos de forma divertida, moderna e intuitiva.",

    cover: "/assets/img/p3/p3-thumb.png",
    technologies: ["HTML", "CSS", "JavaScript", "Java", "Spring Boot"],

    github: "https://github.com/danielznz/SpringToys",
    video: "",

    aboutProject:
      "Projeto desenvolvido com foco em design visual, interatividade e experiência do usuário. O objetivo era criar uma plataforma online para exibir brinquedos de forma atrativa, dinâmica e intuitiva.",

    myRole:
      "Atuei no desenvolvimento do frontend, estilização das páginas, construção das interações em JavaScript e colaboração na integração com backend em Spring Boot.",

    images: [
      "/assets/img/p3/p3-img1.png",
      "/assets/img/p3/p3-img2.png",
      "/assets/img/p3/p3-img4.png",
      "/assets/img/p3/p3-img5.png"
    ]
  },

  {
    title: "Sistema Web | 4º Semestre",
    description:
      "Portal web completo para clientes e administradores, com agendamentos, gestão de serviços e relatórios.",

    cover: "/assets/img/p4/p4-thumb.png",
    technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],

    github: "https://github.com/danielznz/Projeto-Inter",
    video: "/assets/img/p4/p4-video.mp4",

    aboutProject:
      "Projeto desenvolvido em dupla com o objetivo de digitalizar a rotina de uma barbearia. O sistema atendia clientes e administradores, permitindo agendamentos, cancelamentos, gerenciamento de serviços e emissão de relatórios em PDF.",

    myRole:
      "Fui responsável pela modelagem e estruturação do banco de dados utilizando MySQL, além do desenvolvimento backend e regras de negócio da aplicação.",

    images: [
      "/assets/img/p4/p4-img1.png",
      "/assets/img/p4/p4-img2.png",
      "/assets/img/p4/p4-img3.png",
      "/assets/img/p4/p4-img4.png",
      "/assets/img/p4/p4-img5.png"
    ]
  },

  {
    title: "APP Mobile | 5º Semestre",
    description:
      "Aplicativo mobile desenvolvido como solução real para uma barbearia.",

    cover: "/assets/img/p5/p5-thumb.png",
    technologies: [
      "React Native",
      "TypeScript",
      "JavaScript",
      "Firebase",
      "Figma"
    ],

    github: "https://github.com/danielznz/PI_5_semestre",
    video: "/assets/img/p5/p5-video.mp4",

    aboutProject:
      "Aplicativo mobile criado como solução real para uma barbearia da zona leste de São Paulo. O sistema permitia agendamentos, gerenciamento de horários, métricas para barbeiros e uma experiência moderna para clientes.",

    myRole:
      "Desenvolvi o projeto de forma individual, atuando em todas as etapas: interface, lógica da aplicação, integração com Firebase, prototipação e estrutura geral do sistema.",

    images: [
      "/assets/img/p5/p5-img1.png",
      "/assets/img/p5/p5-img2.png",
      "/assets/img/p5/p5-img3.png",
      "/assets/img/p5/p5-img4.png",
      "/assets/img/p5/p5-img5.png"
    ]
  }
];

const personalProjects = [
  {
    title: "Barbearia App",
    description:
      "Sistema pessoal de agendamento online com painel administrativo.",

    cover: "/img/project3.jpg",
    technologies: ["PHP", "MySQL", "Bootstrap", "JavaScript"],

    github: "#",
    video: "",

    aboutProject:
      "Projeto pessoal focado em um sistema web de agendamento para barbearia, com funcionalidades administrativas e controle de horários.",

    myRole:
      "Desenvolvimento completo da aplicação, incluindo frontend, backend, banco de dados e estrutura administrativa.",

    images: ["/img/project3.jpg"]
  }
];

/* ==========================================
   TECH BADGES
========================================== */

function renderTechs(techs = []) {
  return techs
    .map((tech) => `<span class="tech-badge">${tech}</span>`)
    .join("");
}

/* ==========================================
   RENDER DOS CARDS
========================================== */

function renderProjects(list, containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = "";

  list.forEach((project) => {
    const card = document.createElement("article");
    card.className = "project-card";

    card.innerHTML = `
      <img 
        src="${project.cover || project.images[0]}" 
        alt="${project.title}" 
        class="project-thumb"
      >

      <div class="project-card__body">
        <h4>${project.title}</h4>
        <p>${project.description}</p>

        <div class="project-techs">
          ${renderTechs(project.technologies)}
        </div>

        <div class="project-actions">
          <button class="project-btn">Ver detalhes</button>

          <a
            href="${project.github}"
            class="project-link"
            target="_blank"
          >
            GitHub
          </a>
        </div>
      </div>
    `;

    card.querySelector(".project-btn").addEventListener("click", (e) => {
      e.stopPropagation();
      openProject(project);
    });

    container.appendChild(card);
  });
}

/* ==========================================
   ABRIR MODAL
========================================== */

function openProject(project) {
  const modal = document.getElementById("projectModal");
  const details = document.getElementById("projectDetails");

  if (!modal || !details) return;

  const hasVideo = project.video && project.video.trim() !== "";
  const isLocalVideo = hasVideo && project.video.endsWith(".mp4");

  details.innerHTML = `
    <div class="project-details">

      <h2>${project.title}</h2>
      <p>${project.description}</p>

      <div class="project-techs">
        ${renderTechs(project.technologies)}
      </div>

      ${hasVideo || project.images?.length
      ? `
        <div class="project-media-layout">

          ${hasVideo
        ? `
            ${isLocalVideo
          ? `
              <video class="project-video" controls>
                <source src="${project.video}" type="video/mp4">
              </video>
            `
          : `
              <iframe
                class="project-video"
                src="${project.video}"
                frameborder="0"
                allowfullscreen>
              </iframe>
            `
        }
          `
        : ""
      }

          <div class="project-gallery">
            ${project.images
        .map(
          (img) => `
                <img 
                  src="${img}" 
                  alt="${project.title}"
                  onclick="openImage('${img}')"
                >
              `
        )
        .join("")}
          </div>

        </div>
      `
      : ""
    }

      <div class="project-info-box">
        <h3>Sobre o Projeto</h3>
        <p>${project.aboutProject}</p>
      </div>

      <div class="project-info-box">
        <h3>Minha Participação</h3>
        <p>${project.myRole}</p>
      </div>

      <div class="project-actions" style="margin-top:2rem;">
        <a 
          class="project-link" 
          href="${project.github}" 
          target="_blank"
        >
          Ver GitHub
        </a>
      </div>

    </div>
  `;

  modal.classList.add("active");
  document.body.style.overflow = "hidden";
}

/* ==========================================
   FECHAR MODAL
========================================== */

function closeProject() {
  const modal = document.getElementById("projectModal");
  if (!modal) return;

  modal.classList.remove("active");

  document.body.style.overflowY = "auto";
  document.body.style.overflowX = "hidden";
}
/* ==========================================
   LIGHTBOX IMAGEM
========================================== */

function openImage(src) {
  let lightbox = document.getElementById("imageLightbox");

  if (!lightbox) {
    lightbox = document.createElement("div");
    lightbox.id = "imageLightbox";
    lightbox.className = "image-lightbox";
    lightbox.innerHTML = `<img alt="preview">`;

    lightbox.addEventListener("click", closeImage);

    document.body.appendChild(lightbox);
  }

  lightbox.querySelector("img").src = src;
  lightbox.classList.add("active");
}

function closeImage() {
  const lightbox = document.getElementById("imageLightbox");
  if (lightbox) lightbox.classList.remove("active");
}

/* ==========================================
   FECHAR AO CLICAR FORA
========================================== */

document.getElementById("projectModal")?.addEventListener("click", (e) => {
  if (e.target.id === "projectModal") {
    closeProject();
  }
});

/* ==========================================
   ESC FECHA MODAL
========================================== */

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeProject();
    closeImage();
  }
});

/* ==========================================
   SETAS CARROSSEL
========================================== */

function slideProjects(id, direction) {
  const slider = document.getElementById(id);
  if (!slider) return;

  slider.scrollBy({
    left: 360 * direction,
    behavior: "smooth"
  });
}

/* ==========================================
   DRAG SCROLL
========================================== */

document.querySelectorAll(".project-carousel").forEach((slider) => {
  let isDown = false;
  let startX = 0;
  let scrollLeft = 0;

  slider.addEventListener("mousedown", (e) => {
    isDown = true;
    slider.classList.add("dragging");

    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
  });

  slider.addEventListener("mouseleave", () => {
    isDown = false;
    slider.classList.remove("dragging");
  });

  slider.addEventListener("mouseup", () => {
    isDown = false;
    slider.classList.remove("dragging");
  });

  slider.addEventListener("mousemove", (e) => {
    if (!isDown) return;

    e.preventDefault();

    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 1.4;

    slider.scrollLeft = scrollLeft - walk;
  });
});

/* ==========================================
   INIT
========================================== */

renderProjects(fatecProjects, "fatec-projects");
renderProjects(personalProjects, "personal-projects");

/* ADICIONE NO SEU JS */

function openProject(project) {
  const details = document.getElementById("projectDetails");
  const isLocalVideo = project.video.endsWith(".mp4");

  details.innerHTML = `
    <div class="project-details">
      <h2>${project.title}</h2>

      <p>${project.description}</p>

      <div class="project-techs">
        ${renderTechs(project.technologies)}
      </div>

      ${isLocalVideo
      ? `
          <video class="project-video" controls>
            <source src="${project.video}" type="video/mp4">
          </video>
        `
      : `
          <iframe
            class="project-video"
            src="${project.video}"
            frameborder="0"
            allowfullscreen>
          </iframe>
        `
    }

      <div class="project-info-box">
        <h3>Sobre o projeto</h3>
        <p>${project.aboutProject}</p>
               <h3><br></h3>
              <h3>Minha Participação</h3>
            <p>${project.myRole}</p>
      </div>

      <div class="project-gallery">
        ${project.images.map(img => `
          <img src="${img}" onclick="openImage('${img}')">
        `).join("")}
      </div>

      <div class="project-actions" style="margin-top:2rem;">
        <a class="project-link" href="${project.github}" target="_blank">
          Ver GitHub
        </a>
      </div>
    </div>
  `;

  document.getElementById("projectModal").classList.add("active");
}

/* lightbox */
function openImage(src) {
  let lightbox = document.getElementById("imageLightbox");

  if (!lightbox) {
    lightbox = document.createElement("div");
    lightbox.id = "imageLightbox";
    lightbox.className = "image-lightbox";
    lightbox.innerHTML = `<img><span></span>`;
    lightbox.onclick = closeImage;
    document.body.appendChild(lightbox);
  }

  lightbox.querySelector("img").src = src;
  lightbox.classList.add("active");
}

function closeImage() {
  document.getElementById("imageLightbox").classList.remove("active");
}

/* =========================
   BOTÕES DAS SETAS
========================= */
function slideProjects(id, direction) {
  const slider = document.getElementById(id);
  const distance = 360;

  slider.scrollBy({
    left: distance * direction,
    behavior: "smooth"
  });
}

/* =========================
   ARRASTAR COM MOUSE
========================= */
document.querySelectorAll(".project-carousel").forEach(slider => {
  let isDown = false;
  let startX;
  let scrollLeft;

  slider.addEventListener("mousedown", e => {
    isDown = true;
    slider.classList.add("dragging");
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
  });

  slider.addEventListener("mouseleave", () => {
    isDown = false;
  });

  slider.addEventListener("mouseup", () => {
    isDown = false;
  });

  slider.addEventListener("mousemove", e => {
    if (!isDown) return;

    e.preventDefault();

    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 1.5;

    slider.scrollLeft = scrollLeft - walk;
  });
});