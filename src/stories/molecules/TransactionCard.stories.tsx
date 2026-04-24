import type { Meta, StoryObj } from '@storybook/react';
import { TransactionCard } from '@/app/components/molecules/TransactionCard';

/**
 * # TransactionCard Molecule
 * 
 * O `TransactionCard` é uma **Molécula** rica, composta por átomos de Input, Button e Select (implícitos). 
 * Ele é a interface principal para a entrada de dados financeiros.
 * 
 * ## Funcionalidades
 * - Seleção de tipo de transação (Depósito, Transferência, Pagamento).
 * - Entrada numérica com máscara visual.
 * - Validação em tempo real de valores negativos ou zerados.
 * - Feedback visual de processamento (Loading) e resultado (Sucesso/Erro).
 */
const meta: Meta<typeof TransactionCard> = {
  title: 'Molecules/TransactionCard',
  component: TransactionCard,
  parameters: {
    layout: 'centered',
    docs: {
      subtitle: 'Painel completo de formulário para movimentações financeiras.',
      description: {
        component: 'Esta molécula gerencia o fluxo completo de transação, desde a entrada até o feedback da API simplificada via onSubmit.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    title: {
      name: 'Título do Card',
      description: 'Define o nome da operação no cabeçalho.',
      control: 'text',
      table: { category: 'Conteúdo', defaultValue: { summary: 'Nova Transação' } },
    },
    onSubmit: {
      description: 'Função de callback que recebe os dados e deve retornar uma Promise.',
      action: 'submitted',
      table: { category: 'Lógica' },
    },
  },
} satisfies Meta<typeof TransactionCard>;

export default meta;
type Story = StoryObj<typeof TransactionCard>;

/**
 * **Estado: Inicial / Idle**
 * 
 * Estado limpo, pronto para preenchimento. O botão de conclusão fica desabilitado até que o campo de valor receba conteúdo.
 */
export const Initial: Story = {
  name: '1. Estado Inicial',
  args: {
    title: 'Nova Transação',
    onSubmit: async (data) => {
      console.log('Storybook Submission:', data);
      await new Promise((resolve) => setTimeout(resolve, 1500));
    },
  },
};

/**
 * **Estado: Sucesso (Happy Path)**
 * 
 * Simula uma resposta positiva da API. Após o processamento, o card exibe um feedback verde e limpa o valor.
 */
export const SuccessPath: Story = {
  name: '2. Simulação de Sucesso',
  args: {
    title: 'Operação de Depósito',
    onSubmit: async () => {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      // Simula sucesso
    },
  },
};

/**
 * **Erro: Validação Local (Front-end)**
 * 
 * Bloqueio de submissão para valores inválidos (<= 0 ou NaN). O erro é exibido imediatamente ao tentar enviar.
 */
export const ValidationError: Story = {
  name: '3. Erro de Validação Local',
  args: {
    title: 'Teste de Negativo',
    onSubmit: async () => {
      await new Promise((resolve) => setTimeout(resolve, 500));
    },
  },
};

/**
 * **Erro: Falha no Servidor (Back-end)**
 * 
 * Simula um erro vindo da rede ou banco de dados. A Promise disparada pelo `onSubmit` é rejeitada.
 */
export const ServerError: Story = {
  name: '4. Erro de Servidor',
  args: {
    title: 'Falla na Conexão',
    onSubmit: async () => {
      await new Promise((_, reject) => setTimeout(() => reject('Network Error'), 2000));
    },
  },
  parameters: {
    docs: {
      description: {
        story: 'Neste cenário, a função onSubmit lança uma exceção (Reject Promise), acionando o estado de erro visual no card.',
      },
    },
  },
};
