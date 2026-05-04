import type { Meta, StoryObj } from '@storybook/react';
import Footer from '@/app/components/organisms/Footer';

/**
 * # Footer Organism
 *
 * O `Footer` é o **Organismo** de rodapé da landing page pública do Bytebank.
 * Apresenta os créditos da equipe de desenvolvimento, a identidade visual da marca
 * e links para redes sociais, organizados em um grid de 3 colunas.
 *
 * ## Composição
 * - **Créditos:** Nome e RM de cada integrante do grupo de desenvolvimento
 * - **Brand:** Logo + nome "bytebank" reforçando a identidade visual
 * - **Socials:** Imagem com ícones de redes sociais
 *
 * ## Observação
 * O Footer é um componente estático sem props configuráveis, refletindo
 * informações fixas da equipe e da marca.
 */
const meta: Meta<typeof Footer> = {
  title: 'Organisms/Footer',
  component: Footer,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Rodapé da aplicação Bytebank. Exibe os créditos da equipe de desenvolvimento, a identidade de marca e links para redes sociais em um layout de grid responsivo.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * **Visão Padrão**
 *
 * Apresenta o footer completo com todos os créditos da equipe,
 * a marca Bytebank e os ícones de redes sociais.
 */
export const Default: Story = {
  name: '1. Visão Padrão',
};


