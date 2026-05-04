# Bytebank - Planner Financeiro

> Aplicação web de gestão financeira pessoal desenvolvida com **Next.js 16**, **TypeScript** e **Tailwind CSS v4**.  
> Permite ao usuário acompanhar seu saldo, registrar depósitos e transferências, visualizar o extrato por mês e gerenciar cada transação com edição e exclusão.


## 🗂️ Estrutura do Projeto

```
bytebank/
├── data/
│   └── db.json              # Banco de dados local (JSON Server)
├── public/
│   └── images/              # Imagens públicas (logo, ícones, ilustrações)
└── src/
    └── app/
        ├── (dashboard)/     # Rotas autenticadas (home, extrato, transações)
        ├── assets/          # Assets internos (background, avatars)
        ├── components/
        │   ├── atoms/       # Button, Badge, Modal, Select, Skeleton
        │   ├── molecules/   # SaldoDashboard, TransactionCard, TransactionAmount
        │   └── organisms/   # Header, Footer, Hero, Sidebar, Extrato, TransactionDetailCard
        ├── hooks/           # useTransaction
        ├── services/        # transactionService, accountService
        ├── types/           # ITransaction, etc.
        └── utils/           # currencyFormatter, dateFormatter
    └── stories/             # Storybook (Atoms, Molecules, Organisms)
```
### Páginas disponíveis

| Rota | Descrição |
|---|---|
| `/` | Landing page pública |
| `/home` | Dashboard principal |
| `/transactions` | Tela de extrato completo |
---
## 🚀 Como Rodar o Projeto

### Pré-requisitos

- **Node.js** v18 ou superior
- **npm** v9 ou superior

### 1. Instalar as dependências

```bash
npm install
```


### 2. Rodar tudo de uma vez ou separadamente

O comando abaixo inicia o **frontend**, o **JSON Server** e o **Storybook** simultaneamente:

```bash
npm run dev:all
```

| Serviço | Endereço |
|---|---|
| Frontend (Next.js) | http://localhost:3000 |
| JSON Server (API) | http://localhost:3001 |
| Storybook | http://localhost:6006 |


### 📦 Scripts disponíveis

| Script | Descrição |
|---|---|
| `npm run dev` | Inicia o frontend Next.js |
| `npm run dev:server` | Inicia o JSON Server na porta 3001 |
| `npm run dev:storybook` | Inicia o frontend + Storybook |
| `npm run dev:all` | Inicia frontend + JSON Server + Storybook |
| `npm run build` | Gera o build de produção do Next.js |
| `npm run storybook` | Inicia o Storybook na porta 6006 |
| `npm run build-storybook` | Gera o build estático do Storybook |
| `npm run chromatic` | Publica o Storybook no Chromatic |
| `npm run lint` | Verifica o código com ESLint |

---

## 🛠️ Documentação de frameworks

| Tecnologia | Versão | Uso |
|---|---|---|
| [Next.js](https://nextjs.org/) | 16.2.3 | Framework frontend (App Router) |
| [React](https://react.dev/) | 19.2.4 | Biblioteca de UI |
| [TypeScript](https://www.typescriptlang.org/) | ^5 | Tipagem estática |
| [Tailwind CSS](https://tailwindcss.com/) | ^4 | Estilização utilitária |
| [Radix UI](https://www.radix-ui.com/) | ^1/^2 | Componentes acessíveis (Modal, Select) |
| [Lucide React](https://lucide.dev/) | ^1.8 | Ícones SVG |
| [JSON Server](https://github.com/typicode/json-server) | ^1.0.0-beta | API REST local para desenvolvimento |
| [Storybook](https://storybook.js.org/) | ^10.3 | Documentação de componentes |
| [Chromatic](https://www.chromatic.com/) | ^16 | Testes visuais e CI do Storybook |
| [Vitest](https://vitest.dev/) | ^4 | Testes unitários |
| [Playwright](https://playwright.dev/) | ^1.59 | Testes E2E |



## 👥 Equipe de Desenvolvimento

| Nome | RM |
|---|---|
| Amanda de Morais Vieira | 371614 |
| Camilla Tauany Ribeiro Gomes | 371254 |
| Gustavo Souza Silva Pantaleão | 370998 |
| Isabella Falanque Côrtes Arantes | 372374 |
| Lucas Nery de Araujo | 371141 |

---
---


