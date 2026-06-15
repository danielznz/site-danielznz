# 🗂️ Portfólio — Daniel Teixeira da Silva

Site de portfólio pessoal desenvolvido com HTML, CSS e JavaScript puro, apresentando minha trajetória, experiências, projetos e habilidades como desenvolvedor.

🔗 **[Acessar portfólio](https://danielznz.github.io/site-danielznz/)**

---

## 📸 Preview

> *Acesse o link acima para visualizar o projeto ao vivo.*

---

## 🚀 Tecnologias utilizadas

- **HTML5** — estrutura semântica
- **CSS3** — estilização, variáveis CSS, animações e responsividade
- **JavaScript** — renderização dinâmica de conteúdo via arrays de dados
- **Google Fonts** — tipografia (Raleway)
- **Flag CDN** — bandeiras das instituições de formação
- **GitHub Pages** — hospedagem

---

## 📁 Estrutura do projeto

```
site-danielznz/
├── assets/
│   ├── icons/
│   │   └── logo.png
│   ├── img/
│   │   └── profile.jpeg
│   └── flags/
├── script/
│   ├── education.js
│   ├── experience.js
│   ├── footer.js
│   ├── project.js
│   ├── skills.js
│   └── script.js
├── style/
│   ├── about.css
│   ├── education.css
│   ├── experience.css
│   ├── footer.css
│   ├── hero.css
│   ├── project.css
│   ├── skillls.css
│   ├── style.css
│   └── responsive/
│       ├── responsive-about.css
│       ├── responsive-education.css
│       ├── responsive-experience.css
│       ├── responsive-hero.css
│       ├── responsive-project.css
│       └── responsive-skills.css
└── index.html
```

---

## ✨ Funcionalidades

- **Hero animado** — efeito de digitação no título com troca de palavras
- **Blur orbs animados** — background com gradientes flutuantes
- **Conteúdo dinâmico via JS** — experiências, formação e skills renderizados a partir de arrays, facilitando atualizações futuras
- **Carousel de projetos** — navegação por projetos com modal de detalhes
- **Menu hamburguer** — navegação responsiva para mobile
- **Responsividade completa** — adaptado para desktop, tablet e mobile

---

## 🧩 Como adicionar conteúdo

Toda a manutenção de conteúdo é feita diretamente nos arquivos JavaScript, sem precisar mexer no HTML.

**Nova experiência** → `script/experience.js`
```js
const experiences = [
  {
    title: "Cargo",
    company: "Empresa",
    date: "MÊS ANO – MÊS ANO",
    description: "Descrição da experiência."
  },
  // adicione aqui...
];
```

**Nova formação** → `script/education.js`
```js
const educations = [
  {
    institution: "Instituição",
    course: "Nome do curso",
    period: "ANO – ANO",
    description: "Descrição breve.",
    country: "br"
  },
  // adicione aqui...
];
```

**Nova skill** → `script/skills.js`
```js
const hardSkills = ["React", "Node.js", /* adicione aqui */];
const softSkills = ["Comunicação", /* adicione aqui */];
```

---

## 👤 Autor

**Daniel Teixeira da Silva**

- GitHub: [@danielznz](https://github.com/danielznz)
- LinkedIn: [danielznz](https://www.linkedin.com/in/danielznz/)
