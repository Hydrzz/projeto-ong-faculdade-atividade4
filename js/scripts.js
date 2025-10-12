// 1. TEMPLATES

function renderHomePage() {
    return `
        <section class="hero">
            <h2>Transformando o futuro através da educação. Uma criança de cada vez.</h2>
            <p>Acreditamos que toda criança merece a chance de florescer. Nossas oficinas despertam a curiosidade e fortalecem as raízes do conhecimento.</p>
            <img src="assets/images/hero-image.jpg" alt="Crianças sorrindo e levantando as mãos em uma sala de aula." width="800">
        </section>
        <section class="nossa-historia">
            <h3>Como Tudo Começou</h3>
            <p>A ONG Raízes do Saber nasceu em 2020, do sonho de Ana Oliveira, uma pedagoga que acreditava no poder transformador da educação.
            O que começou em uma garagem emprestada, com livros doados e muita vontade de fazer a diferença, hoje se tornou uma organização que já impactou a vida de mais de 200 crianças e suas famílias.</p>
        </section>
        <section class="missao-visao-valores">
            <h3>Nossos Pilares</h3>
            <article>
                <h4>Nossa Missão</h4>
                <p>Despertar o potencial de cada criança através de uma educação complementar criativa, lúdica e humanizada.</p>
            </article>
            <article>
                <h4>Nossos Valores</h4>
                <ul>
                    <li>Empatia e Respeito</li>
                    <li>Criatividade e Inovação</li>
                    <li>Transparência e Colaboração</li>
                </ul>
            </article>
        </section>
        <section class="contato-info">
            <h3>Entre em Contato</h3>
            <p>Adoraríamos ouvir você. Envie suas dúvidas e sugestões!</p>
            <ul>
                <li><strong>E-mail:</strong> contato@raizesdosaber.org</li>
                <li><strong>Telefone:</strong> (XX) 99999-8888</li>
                <li><strong>Endereço:</strong> Rua da Educação, 123 - Cidade do Saber</li>
            </ul>
        </section>
    `;
}

function renderProjetosPage() {
    return `
        <section class="page-title">
            <h2>Nossas Oficinas do Saber</h2>
            <p>Projetos pensados para despertar a curiosidade, a criatividade e o amor pelo conhecimento em cada criança.</p>
        </section>
        <section class="lista-projetos">
            <article class="projeto-item">
                <img src="assets/images/projeto-leitura.jpg" alt="Crianças sentadas em círculo lendo livros com entusiasmo." width="600">
                <h3>Clube de Leitura</h3>
                <p>Nossa oficina de leitura é uma jornada pelo mundo da imaginação, transformando a leitura em uma aventura divertida e fortalecendo a capacidade de interpretação e escrita dos participantes.</p>
            </article>
            <article class="projeto-item">
                <img src="assets/images/projeto-robotica.jpg" alt="Criança concentrada montando um pequeno robô feito de materiais recicláveis." width="600">
                <h3>Robótica com Sucata</h3>
                <p>As crianças aprendem conceitos básicos de lógica e mecânica construindo seus próprios robôs a partir de materiais recicláveis, estimulando o raciocínio e a consciência ambiental.</p>
            </article>
        </section>
        <section class="como-ajudar">
            <h2>Faça Parte da Mudança</h2>
            <p>O seu apoio é fundamental para que nosso trabalho continue crescendo e alcançando mais crianças. Veja como você pode se envolver:</p>
            <article class="ajuda-item">
                <h3>Seja um Voluntário</h3>
                <p>Doe seu tempo e talento para inspirar nossos pequenos. Você pode ajudar a conduzir oficinas, organizar eventos ou na comunicação. Cada gesto conta!</p>
                <a href="#cadastro" class="cta-button">Quero me cadastrar</a>
            </article>
            <article class="ajuda-item">
                <h3>Faça uma Doação</h3>
                <p>Sua contribuição financeira se transforma em livros, materiais para as oficinas e lanches para as crianças. Ajude-nos a manter nosso espaço funcionando.</p>
                <p><strong>Chave PIX (CNPJ):</strong> 99.999.999/0001-99</p>
            </article>
        </section>
    `;
}

function renderCadastroPage() {
    return `
        <section class="page-title">
            <h2>Formulário de Cadastro</h2>
            <p>Ficamos felizes com seu interesse! Preencha seus dados abaixo.</p>
            <img src="assets/images/cadastro-image.jpg" alt="Mãos de diversas pessoas se unindo em um gesto de colaboração." width="600">
        </section>
        <section class="form-container">
            <form id="cadastro-form" action="#" method="post">
                <fieldset>
                    <legend>Dados Pessoais</legend>
                    <label for="nome">Nome Completo:</label>
                    <input type="text" id="nome" name="nome" required>
                    <label for="email">E-mail:</label>
                    <input type="email" id="email" name="email" required>
                    <label for="cpf">CPF:</label>
                    <input type="text" id="cpf" name="cpf" placeholder="000.000.000-00" required>
                    <label for="telefone">Telefone:</label>
                    <input type="tel" id="telefone" name="telefone" placeholder="(00) 00000-0000" required>
                    <label for="nascimento">Data de Nascimento:</label>
                    <input type="date" id="nascimento" name="nascimento" required>
                </fieldset>
                <fieldset>
                    <legend>Endereço</legend>
                    <label for="cep">CEP:</label>
                    <input type="text" id="cep" name="cep" placeholder="00000-000" required>
                    <label for="endereco">Endereço:</label>
                    <input type="text" id="endereco" name="endereco" required>
                    <label for="cidade">Cidade:</label>
                    <input type="text" id="cidade" name="cidade" required>
                    <label for="estado">Estado:</label>
                    <input type="text" id="estado" name="estado" required>
                </fieldset>
                <button type="submit">Finalizar Cadastro</button>
            </form>
        </section>
    `;
}


// 2. ROTEADOR

const app = document.getElementById('app');

function router() {
    // Pega o hash atual da URL (ou usa '#inicio' como padrão)
    const hash = window.location.hash || '#inicio';

    switch (hash) {
        case '#inicio':
            app.innerHTML = renderHomePage();
            break;
        case '#projetos':
            app.innerHTML = renderProjetosPage();
            break;
        case '#cadastro':
            app.innerHTML = renderCadastroPage();
            break;
        default:
            app.innerHTML = renderHomePage();
    }
    
    // Inicializa os event listeners após renderizar a página
    initEventListeners();
}

// =3. INICIALIZAÇÃO DE EVENTOS

// Adiciona o event listener do menu hamburguer apenas uma vez, assim que o DOM estiver pronto
document.addEventListener('DOMContentLoaded', () => {
    const menuHamburguer = document.querySelector('.menu-hamburguer');
    const nav = document.querySelector('nav');
    if (menuHamburguer && nav) {
        menuHamburguer.addEventListener('click', () => {
            nav.classList.toggle('menu-aberto');
        });
        // Fecha o menu ao clicar em um link
        nav.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                nav.classList.remove('menu-aberto');
            });
        });
    }
});

function initEventListeners() {
    // Só cuida dos eventos dinâmicos das páginas (ex: formulário)
    const cadastroForm = document.getElementById('cadastro-form');
    if (cadastroForm) {
        cadastroForm.addEventListener('submit', function(event) {
            //Impede o envio padrão do formulário
            event.preventDefault(); 
            
            //Limpa erros antigos antes de validar novamente
            clearErrors();

            //Valida cada campo e armazena se há erro ou não
            let hasError = false;
            
            // Validação do Nome
            const nome = document.getElementById('nome');
            if (nome.value.trim().length < 3) {
                showError(nome, 'O nome deve ter pelo menos 3 caracteres.');
                hasError = true;
            }

            // Validação do Email
            const email = document.getElementById('email');
            if (!isValidEmail(email.value)) {
                showError(email, 'Por favor, insira um e-mail válido.');
                hasError = true;
            }
            
            // Validação do CPF
            const cpf = document.getElementById('cpf');
            if (!isValidCPF(cpf.value)) {
                showError(cpf, 'CPF inválido. Use o formato XXX.XXX.XXX-XX.');
                hasError = true;
            }

             // Validação do Telefone
            const telefone = document.getElementById('telefone');
            if (!isValidPhone(telefone.value)) {
                showError(telefone, 'Telefone inválido. Use o formato (XX) XXXXX-XXXX.');
                hasError = true;
            }

            // Validação da Data de Nascimento
            const nascimento = document.getElementById('nascimento');
            if (!isValidBirthdate(nascimento.value)) {
                showError(nascimento, 'Data de nascimento inválida. A data não pode ser hoje ou no futuro.');
                hasError = true;
            }

            // Validação do CEP
            const cep = document.getElementById('cep');
            if (!isValidCEP(cep.value)) {
                showError(cep, 'CEP inválido. Use o formato XXXXX-XXX.');
                hasError = true;
            }

            // Verificação de campos de endereço
            const endereco = document.getElementById('endereco');
            if (endereco.value.trim() === '') {
                showError(endereco, 'O endereço é obrigatório.');
                hasError = true;
            }
            const cidade = document.getElementById('cidade');
            if (cidade.value.trim() === '') {
                showError(cidade, 'A cidade é obrigatória.');
                hasError = true;
            }
            const estado = document.getElementById('estado');
            if (estado.value.trim() === '') {
                showError(estado, 'O estado é obrigatório.');
                hasError = true;
            }

            //Se não houver erros, mostra mensagem de sucesso
            if (!hasError) {
                this.innerHTML = `<p class="success-message">Cadastro realizado com sucesso! Obrigado por se juntar a nós.</p>`;
            }
        });
    }
}

// ===== Funções Auxiliares para Validação =====

// Mostra a mensagem de erro
function showError(input, message) {
    const fieldContainer = input.parentElement; // Pega o elemento pai do input
    const errorElement = document.createElement('span');
    errorElement.className = 'error-message';
    errorElement.innerText = message;
    fieldContainer.appendChild(errorElement); // Adiciona a mensagem de erro
    input.classList.add('invalid'); // Adiciona uma classe para estilizar o campo
}

// Limpa todas as mensagens de erro
function clearErrors() {
    const errorMessages = document.querySelectorAll('.error-message');
    errorMessages.forEach(msg => msg.remove());

    const invalidFields = document.querySelectorAll('.invalid');
    invalidFields.forEach(field => field.classList.remove('invalid'));
}

// Valida o formato do e-mail usando uma expressão regular (Regex)
function isValidEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

// Valida o formato do CPF (XXX.XXX.XXX-XX)
function isValidCPF(cpf) {
    const re = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
    return re.test(cpf);
}

// Valida o formato do Telefone ((XX) XXXXX-XXXX)
function isValidPhone(phone) {
    const re = /^\(\d{2}\)\s\d{5}-\d{4}$/;
    return re.test(phone);
}

// Valida o formato do CEP (XXXXX-XXX)
function isValidCEP(cep) {
    const re = /^\d{5}-\d{3}$/;
    return re.test(cep);
}

// Valida a Data de Nascimento (não pode ser no futuro)
function isValidBirthdate(dateString) {
    if (!dateString) return false; // Verifica se não está vazio
    const birthDate = new Date(dateString);
    const today = new Date();
    // Ajusta para comparar apenas a data, ignorando a hora
    today.setHours(0, 0, 0, 0); 
    return birthDate < today;
}

// 4. GATILHOS DO ROTEADOR

// Roda o roteador quando a página carrega pela primeira vez
window.addEventListener('DOMContentLoaded', router);

// Roda o roteador quando o hash na URL mudar
window.addEventListener('hashchange', router);