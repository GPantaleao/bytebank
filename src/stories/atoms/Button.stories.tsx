import type { Meta, StoryObj } from '@storybook/react';
import { Plus, Trash2, ArrowRight, Save, Send, ChevronLeft } from 'lucide-react';
import { Button } from '@/app/components/atoms/Button';

/**
 * # Button Atom
 * 
 * O `Button` é o principal ponto de interatividade do usuário. Ele comunica ações e gatilhos em toda a interface.
 * 
 * ## Hierarquia Visual
 * - **Primary**: Ação principal da página. Use apenas uma vez por contexto.
 * - **Secondary**: Ações de suporte.
 * - **Ghost/Outline**: Ações secundárias ou de navegação.
 * - **Danger**: Ações destrutivas ou irreversíveis.
 */
const meta: Meta<typeof Button> = {
  title: 'Atoms/Button',
  component: Button,
  parameters: {
    layout: 'centered',
    docs: {
      subtitle: 'Componente de ação versátil com suporte a variantes semânticas.',
      description: {
        component: 'Totalmente acessível, suporta estados de foco, hover e pressionado. Integrado com Lucide React para iconografia consistente.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      name: 'Variante Semântica',
      description: 'Define o peso visual e o contexto da ação.',
      control: 'select',
      options: ['primary', 'secondary', 'danger', 'default', 'ghost'],
      table: { category: 'Aparência', defaultValue: { summary: 'primary' } },
    },
    outline: {
      name: 'Modo Outline',
      description: 'Remove o fundo sólido e adiciona bordas.',
      control: 'boolean',
      table: { category: 'Aparência', defaultValue: { summary: 'false' } },
    },
    rounded: {
      name: 'Circular (Icon Button)',
      description: 'Transforma o botão em um círculo perfeito.',
      control: 'boolean',
      table: { category: 'Aparência', defaultValue: { summary: 'false' } },
    },
    label: {
      name: 'Texto do Botão',
      description: 'O rótulo principal da ação.',
      control: 'text',
      table: { category: 'Conteúdo' },
    },
    iconLeft: {
      name: 'Ícone Esquerda',
      table: { category: 'Conteúdo' },
      control: { disable: true },
    },
    iconRight: {
      name: 'Ícone Direita',
      table: { category: 'Conteúdo' },
      control: { disable: true },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * **Action: Primary**
 * 
 * Utilize para o fluxo principal (Submit, Próximo, Salvar).
 */
export const Primary: Story = {
  name: 'Principal (CTA)',
  args: {
    variant: 'primary',
    label: 'Salvar Alterações',
    iconLeft: Save,
  },
};

/**
 * **Action: Secondary**
 * 
 * Para ações que complementam a principal sem competir por atenção.
 */
export const Secondary: Story = {
  name: 'Secundário',
  args: {
    variant: 'secondary',
    label: 'Cancelar',
  },
};

/**
 * **Action: Danger**
 * 
 * Indica risco. Sempre acompanhado de confirmação em contextos críticos.
 */
export const Danger: Story = {
  name: 'Destrutivo',
  args: {
    variant: 'danger',
    label: 'Apagar Registro',
    iconLeft: Trash2,
  },
};

/**
 * **Estilo: Outline**
 * 
 * Reduz a carga cognitiva em interfaces densas.
 */
export const Outline: Story = {
  name: 'Contorno (Outline)',
  args: {
    variant: 'primary',
    outline: true,
    label: 'Exportar PDF',
    iconRight: Send,
  },
};

/**
 * **Estilo: Ghost**
 * 
 * Ideal para navegação ou botões dentro de listas/tabelas.
 */
export const Ghost: Story = {
  name: 'Sutil (Ghost)',
  args: {
    variant: 'ghost',
    label: 'Voltar ao Início',
    iconLeft: ChevronLeft,
  },
};

/**
 * **Icon Button**
 * 
 * Ações rápidas e compactas. Requer `aria-label` para acessibilidade.
 */
export const Rounded: Story = {
  name: 'Botão de Ícone',
  args: {
    variant: 'primary',
    rounded: true,
    iconLeft: Plus,
  },
};

/**
 * **Fluxo de Navegação**
 * 
 * Combinação de texto e ícone à direita para indicar progressão.
 */
export const ComIconDireita: Story = {
  name: 'Progressão',
  args: {
    variant: 'default',
    label: 'Continuar para Pagamento',
    iconRight: ArrowRight,
  },
};
