# Plataforma Web - ONG Raízes do Saber

![Status](https://img.shields.io/badge/status-concluído-green)

Projeto acadêmico desenvolvido para a disciplina de Desenvolvimento Front-End. O objetivo foi criar uma plataforma web completa e moderna para uma ONG fictícia focada em educação, aplicando conceitos de HTML5, CSS3 e JavaScript moderno.

---

## ✨ Funcionalidades

O projeto foi construído como uma **Single Page Application (SPA)**, garantindo uma experiência de usuário fluida e rápida, e implementa as seguintes funcionalidades:

* **Navegação Dinâmica:** O conteúdo das páginas é carregado com JavaScript (roteamento por hash) sem a necessidade de recarregar a página inteira, simulando o comportamento de uma aplicação nativa.
* **Design Responsivo:** O layout se adapta perfeitamente a diversos tamanhos de tela (desktops, tablets e celulares), utilizando técnicas modernas de CSS Grid para a estrutura principal e Flexbox para os componentes internos.
* **Modo Escuro (Dark Mode):** Um botão no cabeçalho permite ao usuário alternar entre o tema claro e escuro. A preferência é salva no navegador (`localStorage`) para persistir entre as visitas.
* **Validação de Formulário Avançada:** O formulário de cadastro possui validações de consistência de dados implementadas com JavaScript, fornecendo feedback visual e mensagens de erro claras ao usuário.
* **Acessibilidade (WCAG):** Foram implementadas práticas de acessibilidade, como o uso de HTML semântico, atributos ARIA para componentes interativos (menu hambúrguer) e descrições auxiliares em campos de formulário para melhorar a usabilidade com leitores de tela.

---

## 🚀 Tecnologias Utilizadas

* **HTML5:** Estruturação semântica do conteúdo.
* **CSS3:** Estilização completa, incluindo:
    * Design System com variáveis CSS.
    * Layouts com Flexbox e Grid.
    * Responsividade com Media Queries.
* **JavaScript (ES6+):**
    * Manipulação do DOM para a criação da SPA.
    * Lógica de interatividade para componentes (menu, toggle de tema).
    * Validação de formulários.
* **Git & GitHub:** Versionamento de código seguindo a estratégia GitFlow (branches `main`, `develop` e `feature`) e documentação de alterações através de Pull Requests.

---

## 💻 Como Executar

Este é um projeto front-end puro e não requer um passo de compilação ou instalação de dependências.

1.  Clone este repositório para a sua máquina local.
2.  Navegue até a pasta do projeto.
3.  Abra o arquivo `index.html` em seu navegador de preferência.

---

## 📁 Estrutura do Projeto

O repositório está organizado da seguinte forma para facilitar a manutenção e escalabilidade:\
├── index.html > **O arquivo HTML principal que serve como "shell" da SPA**\
├── README.md > **Esta documentação**\
├── assets/ > **Contém todos os recursos de imagem**\
├── css/ > **Contém os arquivos de estilo (original e minificado)**\
└── js/ > **Contém os arquivos de script (original e minificado)**

