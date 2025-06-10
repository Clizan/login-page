# LoginPage

Projeto criado com [Angular CLI](https://github.com/angular/angular-cli) — uma página de login moderna, pronta para customização e integração com backends de autenticação.

## ✨ Funcionalidades

- **Formulário de login:** Entrada de e-mail e senha, com validação (senha mínima de 6 caracteres).
- **Layout responsivo:** Interface amigável, personalizável via SCSS.
- **Feedback ao usuário:** Mensagens de sucesso e erro usando Toastr.
- **Armazenamento seguro:** Token salvo na sessão do navegador após login bem-sucedido.
- **Componentização:** Layout e campos desacoplados, facilitando manutenção e extensão.

## 🚀 Como rodar o projeto

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/Clizan/login-page.git
   cd login-page
   ```

2. **Instale as dependências:**
   ```bash
   npm install
   ```

3. **Inicie o servidor de desenvolvimento:**
   ```bash
   ng serve
   ```
   Acesse `http://localhost:4200/` no navegador.

## 🛠️ Estrutura Principal

- `src/app/pages/login/login.component.ts` — Componente principal da página de login, controla o formulário e integra com o serviço de autenticação.
- `src/app/components/default-login-layout/` — Layout base reutilizável para telas de autenticação.
- `src/app/services/login.service.ts` — Serviço responsável por autenticar o usuário e armazenar o token.
- `src/app/types/login-response.types.ts` — Tipagem para resposta do login.
- `src/styles/variables.scss` — Variáveis globais de estilo.

## 📦 Comandos úteis

- **Gerar novo componente:**
  ```bash
  ng generate component nome-do-componente
  ```
- **Build do projeto:**
  ```bash
  ng build
  ```
- **Rodar testes unitários:**
  ```bash
  ng test
  ```
- **Rodar testes E2E:**
  ```bash
  ng e2e
  ```

## 🖼️ Layout

A interface possui:
- Logo customizável
- Campos de e-mail e senha
- Botões de Login e Signup
- Feedback visual para ações e validações

## 📝 Customização

Edite os arquivos SCSS nos componentes para alterar cores, fontes e espaçamentos de acordo com sua identidade visual.

## 🤝 Contribuição

Pull requests são bem-vindos! Para maiores informações, abra uma issue.

---

> Para mais informações sobre comandos Angular CLI, consulte a [documentação oficial](https://angular.io/cli).
