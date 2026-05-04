import type { Meta, StoryObj } from '@storybook/react';
import Header from '@/app/components/organisms/Header';
import Sidebar from '@/app/components/organisms/Sidebar';

/**
 * # Navegação — Header & Sidebar
 *
 * O Bytebank possui dois componentes de navegação principal, cada um destinado a um contexto de uso distinto:
 *
 * ## `Header` — Landing Page Pública
 * Usado na página inicial (não autenticada). Combina identidade de marca, links de seção e CTAs de autenticação.
 * - **Brand:** Logo + nome "bytebank" + slogan
 * - **Nav:** Links "Sobre" e "Serviços"
 * - **CTAs:** Botões "Abrir minha conta" e "Já tenho conta"
 *
 * ## `Sidebar` — Painel Autenticado
 * Usado no dashboard interno. Exibe a marca, o perfil do usuário e os links de navegação do app.
 * - **Brand:** Logo branco + nome + slogan
 * - **User Info:** Avatar + nome carregado dinamicamente via `accountService`
 * - **Nav:** Início, Transferências, Investimentos, Outros serviços
 * - **Rota Ativa:** O link da página atual é destacado em negrito via `usePathname`
 */
const meta: Meta<typeof Header> = {
  title: 'Organisms/Navegação',
  component: Header,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Componentes de navegação do Bytebank. O `Header` serve a landing page pública, enquanto o `Sidebar` serve o painel autenticado. Ambos carregam a identidade visual da marca, mas para contextos e públicos distintos.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * **Header — Landing Page**
 *
 * Cabeçalho da área pública da aplicação. Apresenta a marca, navegação de seções
 * e os dois CTAs principais de autenticação: "Abrir minha conta" e "Já tenho conta".
 */
export const HeaderPublico: Story = {
  name: '1. Header (Landing Page)',
};

/**
 * **Sidebar — Painel Autenticado**
 *
 * Navegação lateral da área interna da aplicação. Exibe o logo, o avatar e nome
 * do usuário logado (carregado via `accountService`), e os links do painel.
 * O link da rota atual é automaticamente destacado em negrito via `usePathname`.
 */
export const SidebarPainel: Story = {
  name: '2. Sidebar (Painel Autenticado)',
  render: () => (
    <div style={{ display: 'flex', height: '100vh' }}>
      <Sidebar />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Navegação lateral do painel autenticado. O nome do usuário é carregado assincronamente via `accountService`.',
      },
    },
  },
};
