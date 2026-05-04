import type { Meta, StoryObj } from '@storybook/react';
import Hero from '@/app/components/organisms/Hero';
import Vantagens from '@/app/components/organisms/vantagens';

/**
 * # Landing Page Conteúdo
 *
 * Estas duas seções formam o **corpo principal** da landing page pública do Bytebank,
 * exibidas em sequência logo abaixo do `Header`.
 *
 * ## `Hero` — Seção de Destaque
 * Primeira seção que o usuário vê. Comunica a proposta de valor da marca com
 * uma headline persuasiva e uma ilustração de boas-vindas.
 * - **Headline:** Chamada em dourado (`#b8860b`) convidando a criar conta
 * - **Ilustração:** Imagem `welcome.png` reforçando o apelo visual
 * - **Background:** Classe `hero-bg` com gradiente radial de pontos
 *
 * ## `Vantagens` — Seção de Benefícios
 * Segunda seção, logo abaixo do Hero. Lista os 4 principais diferenciais do banco.
 * - **Conta e cartão gratuitos**
 * - **Saques sem custo**
 * - **Programa de pontos**
 * - **Seguro para dispositivos**
 * - **Background:** Mesma classe `hero-bg` para consistência visual entre as seções
 */
const meta: Meta<typeof Hero> = {
  title: 'Organisms/Landing Page Conteúdo',
  component: Hero,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Corpo principal da landing page do Bytebank, composto pelo `Hero` (proposta de valor + ilustração) e pela seção `Vantagens` (4 benefícios do banco). As duas seções compartilham o mesmo background temático (`hero-bg`) e são exibidas em sequência.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * **Hero — Seção de Destaque**
 *
 * Exibe apenas o componente `Hero`: headline dourada à esquerda e
 * ilustração de boas-vindas à direita, em layout horizontal.
 */
export const HeroSection: Story = {
  name: '1. Hero',
};

/**
 * **Vantagens — Seção de Benefícios**
 *
 * Exibe apenas o componente `Vantagens`: grid com os 4 benefícios do banco,
 * cada um com ícone ilustrativo, título em dourado e descrição.
 */
export const VantagensSection: Story = {
  name: '2. Vantagens',
  render: () => <Vantagens />,
  parameters: {
    docs: {
      description: {
        story:
          'Seção de benefícios isolada. Exibe os 4 cards de vantagens (conta gratuita, saques, pontos, seguro) em grid de 4 colunas.',
      },
    },
  },
};

/**
 * **Corpo Completo da Landing Page**
 *
 * Renderiza as duas seções em sequência, exatamente como aparecem
 * na landing page pública entre o `Header` e o `Footer`.
 */
export const CorpoCompleto: Story = {
  name: '3. Hero + Vantagens (Corpo Completo)',
  render: () => (
    <>
      <Hero />
      <Vantagens />
    </>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Composição completa do corpo da landing page: `Hero` seguido de `Vantagens`. Representa a visualização real do conteúdo entre o Header e o Footer.',
      },
    },
  },
};
