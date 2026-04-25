import type { Meta, StoryObj } from '@storybook/react';
import { Plus, Trash2, ArrowRight } from 'lucide-react';
import { Button } from '@/app/components/atoms/Button';
/**
O componente Button é o elemento interativo primário da aplicação.
Projetado para suportar diversas variantes visuais (Primary, Secondary, Danger, etc),
formatos (retangular ou arredondado) e ícones (esquerda ou direita).
*/
const meta: Meta<typeof Button> = {
  title: 'Atoms/Button',
  component: Button,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Botão altamente customizável com suporte a ícones do Lucide React, diferentes pesos semânticos (variantes) e modos visuais (solid, outline, ghost).',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      description: 'Define a cor e a semântica do botão.',
      control: 'select',
      options: ['primary', 'secondary', 'danger', 'default', 'ghost'],
      table: { defaultValue: { summary: 'primary' } },
    },
    outline: {
      description: 'Se verdadeiro, o botão terá um fundo transparente e bordas na cor da variante.',
      control: 'boolean',
      table: { defaultValue: { summary: 'false' } },
    },
    rounded: {
      description: 'Se verdadeiro, transforma o botão num círculo perfeito (ideal para icon-buttons).',
      control: 'boolean',
      table: { defaultValue: { summary: 'false' } },
    },
    label: {
      description: 'O texto exibido dentro do botão.',
      control: 'text',
    },
    iconLeft: {
      description: 'Ícone (Lucide) renderizado à esquerda do texto.',
      control: { disable: true },
    },
    iconRight: {
      description: 'Ícone (Lucide) renderizado à direita do texto.',
      control: { disable: true },
    },
  },
};
export default meta;
type Story = StoryObj<typeof meta>;
/**
Variante principal usada para a ação mais importante da tela (Call to Action).
*/
export const Primary: Story = {
  args: {
    variant: 'primary',
    label: 'Botão Principal',
  },
};
/**
Variante secundária usada para ações alternativas que não devem chamar tanta atenção.
*/
export const Secondary: Story = {
  args: {
    variant: 'secondary',
    label: 'Botão Secundário',
  },
};
/**
Usada exclusivamente para ações destrutivas, como excluir ou deletar itens.
*/
export const Danger: Story = {
  args: {
    variant: 'danger',
    label: 'Excluir',
    iconLeft: Trash2,
  },
};
/**
Variante padrão de sistema, neutra.
*/
export const Default: Story = {
  args: {
    variant: 'default',
    label: 'Padrão',
  },
};
/**
Estilo sem preenchimento, focado na borda. Ótimo em fundos brancos ou claros.
*/
export const Outline: Story = {
  args: {
    variant: 'primary',
    outline: true,
    label: 'Contorno',
  },
};
/**
Variante Ghost é um botão sem borda e sem fundo até o hover. Útil para ações sutis como "Voltar".
*/
export const Ghost: Story = {
  args: {
    variant: 'ghost',
    label: 'Voltar',
    iconLeft: ArrowRight,
  },
};
/**
Demonstra um botão apenas com ícone circular, ideal para ações rápidas.
*/
export const Rounded: Story = {
  name: 'Ícone Arredondado',
  args: {
    variant: 'primary',
    rounded: true,
    iconLeft: Plus,
    'aria-label': 'Adicionar',
  },
};
/**
Demonstra o uso de um ícone à direita do texto (ideal para avanço de tela).
*/
export const ComIconDireita: Story = {
  name: 'Com ícone à direita',
  args: {
    variant: 'primary',
    label: 'Continuar',
    iconRight: ArrowRight,
  },
};
