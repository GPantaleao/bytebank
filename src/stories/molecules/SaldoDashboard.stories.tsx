import type { Meta, StoryObj } from '@storybook/react';
import { SaldoDashboard } from '@/app/components/molecules/SaldoDashboard';

/**
 * O componente `SaldoDashboard` é o painel principal de exibição financeira do usuário.
 * Ele mostra o saldo atual com a opção de ocultar/mostrar valores, 
 * além de exibir resumos de receitas e despesas com indicativos visuais (setas).
 * Também suporta a exibição de uma mensagem motivacional ou de alerta (metaMensagem).
 */
const meta: Meta<typeof SaldoDashboard> = {
  title: 'Molecules/SaldoDashboard',
  component: SaldoDashboard,
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'cinza',
      values: [{ name: 'cinza', value: '#f5f5f5' }],
    },
    docs: {
      description: {
        component: 'Painel superior da aplicação que resume as movimentações e saldos do usuário. Pode adaptar sua mensagem de acordo com a saúde financeira da conta.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    saldo: {
      description: 'O valor formatado do saldo atual em conta corrente.',
      control: 'text',
      table: {
        defaultValue: { summary: '"2.500,00"' },
      },
    },
    receitas: {
      description: 'O valor total formatado das receitas (entradas) do usuário.',
      control: 'text',
      table: {
        defaultValue: { summary: '"1.500,00"' },
      },
    },
    despesas: {
      description: 'O valor total formatado das despesas (saídas) do usuário.',
      control: 'text',
      table: {
        defaultValue: { summary: '"500,00"' },
      },
    },
    metaMensagem: {
      description: 'Mensagem exibida no rodapé do dashboard. Ideal para alertas ou parabenizações.',
      control: 'text',
      table: {
        defaultValue: { summary: '"Seu saldo superou a meta..."' },
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Visão padrão do dashboard com valores hardcoded iniciais. 
 * O ícone de olho permite ocultar o saldo.
 */
export const Default: Story = {
  name: 'Valores Padrão',
  args: {},
};

/**
 * Demonstração do comportamento visual e de espaçamento 
 * quando o usuário possui valores altos na casa de dezenas de milhares.
 */
export const ValoresAltos: Story = {
  name: 'Valores Altos',
  args: {
    saldo: '15.450,00',
    receitas: '8.200,00',
    despesas: '3.150,00',
  },
};

/**
 * Exibe o dashboard em estado de alerta. 
 * Demonstra como a `metaMensagem` pode ser usada para alertar o usuário de um saldo negativo.
 */
export const SaldoNegativo: Story = {
  name: 'Saldo Negativo (Alerta)',
  args: {
    saldo: '- 500,00',
    receitas: '1.000,00',
    despesas: '2.500,00',
    metaMensagem: 'Atenção: Seu saldo está negativo.\nRecomendamos rever suas despesas.',
  },
};
