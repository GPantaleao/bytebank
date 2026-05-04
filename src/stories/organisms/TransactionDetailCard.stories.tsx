import type { Meta, StoryObj } from '@storybook/react';
import { ITransaction } from '@/types/transaction';
import { TransactionDetailCard } from '@/app/components/organisms/TransactionDetailCard';

/**
 * # TransactionDetailCard Organism
 *
 * O `TransactionDetailCard` é um **Organismo** complexo de gerenciamento de transações financeiras.
 * Ele representa o detalhe completo de uma transação, com capacidades de **visualização**, **edição inline** e **exclusão**.
 *
 * ## Composição de Átomos e Moléculas
 * - **Badge:** Exibe a categoria com ícone semântico (Alimentação, Lazer, Moradia, Renda, Outros)
 * - **TransactionAmount:** Renderiza o valor com formatação BRL e cor semântica
 * - **Button:** CTAs de "Editar detalhe" e "Excluir detalhe"
 * - **Select:** Seletores de tipo e categoria no modo de edição
 * - **Modal:** Diálogo de confirmação antes da exclusão definitiva
 * - **Skeleton:** Exibido enquanto os dados estão sendo carregados
 *
 * ## Estados
 * O card possui 3 estados principais:
 * 1. **Loading/Vazio** - Exibe skeletons animados enquanto os dados chegam
 * 2. **Visualização** - Apresenta todos os dados formatados com botões de ação
 * 3. **Edição** - Transforma os campos em inputs editáveis com confirmação
 */
const meta: Meta<typeof TransactionDetailCard> = {
  title: 'Organisms/TransactionDetailCard',
  component: TransactionDetailCard,
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'cinza',
      values: [{ name: 'cinza', value: '#f5f5f5' }],
    },
    docs: {
      description: {
        component:
          'Card de detalhamento completo de uma transação financeira. Suporta visualização, edição inline e exclusão com confirmação modal. Orquestra múltiplos átomos e moléculas do design system.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    transaction: {
      description: 'Objeto de transação com todos os dados a serem exibidos. Quando `null` ou `undefined`, o estado de skeleton/loading é renderizado.',
      table: {
        type: { summary: 'ITransaction | null | undefined' },
        category: 'Dados',
      },
      control: { disable: true },
    },
    isLoading: {
      description: 'Quando `true`, exibe os skeletons animados no lugar do conteúdo real.',
      control: 'boolean',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
        category: 'Estado',
      },
    },
    onEditSuccess: {
      description: 'Callback invocado após uma edição bem-sucedida. Recebe a transação atualizada como argumento.',
      table: { category: 'Eventos' },
      action: 'editSuccess',
    },
    onDeleteSuccess: {
      description: 'Callback invocado após a exclusão bem-sucedida da transação.',
      table: { category: 'Eventos' },
      action: 'deleteSuccess',
    },
    onClose: {
      description: 'Callback para fechar o componente pai (geralmente um Modal).',
      table: { category: 'Eventos' },
      action: 'closed',
    },
    className: {
      description: 'Classe CSS adicional para personalização do container.',
      control: 'text',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '""' },
        category: 'Aparência',
      },
    },
  },
} satisfies Meta<typeof TransactionDetailCard>;

export default meta;
type Story = StoryObj<typeof TransactionDetailCard>;

const transacaoDeposito: ITransaction = {
  id: 'txn-001',
  description: 'Salário Mensal',
  amount: 5400.0,
  type: 'deposito',
  date: new Date('2025-05-01T09:00:00').toISOString(),
  category: 'Renda',
};

const transacaoTransferencia: ITransaction = {
  id: 'txn-002',
  description: 'Aluguel Apartamento',
  amount: 1800.0,
  type: 'transferencia',
  date: new Date('2025-05-05T14:30:00').toISOString(),
  category: 'Moradia',
};

const transacaoAlimentacao: ITransaction = {
  id: 'txn-003',
  description: 'Supermercado Extra',
  amount: 312.87,
  type: 'transferencia',
  date: new Date('2025-05-10T11:20:00').toISOString(),
  category: 'Alimentação',
};

const transacaoLazer: ITransaction = {
  id: 'txn-004',
  description: 'Netflix Mensal',
  amount: 55.9,
  type: 'transferencia',
  date: new Date('2025-05-12T08:00:00').toISOString(),
  category: 'Lazer',
};

/**
 * **Estado: Loading / Skeleton**
 *
 * Exibe o estado de carregamento com skeletons animados.
 * Esse estado é renderizado enquanto os dados da transação são buscados da API.
 */
export const Loading: Story = {
  name: '1. Estado de Carregamento (Skeleton)',
  args: {
    transaction: null,
    isLoading: true,
  },
};

/**
 * **Tipo: Depósito (Renda)**
 *
 * Visualização de uma transação de entrada — salário mensal.
 * O valor é exibido com a formatação positiva (cor verde).
 */
export const Deposito: Story = {
  name: '2. Transação de Depósito',
  args: {
    transaction: transacaoDeposito,
  },
};

/**
 * **Tipo: Transferência (Moradia)**
 *
 * Visualização de uma transação de saída — pagamento de aluguel.
 * O valor é exibido com a formatação negativa (cor vermelha).
 */
export const Transferencia: Story = {
  name: '3. Transação de Transferência',
  args: {
    transaction: transacaoTransferencia,
  },
};

/**
 * **Categoria: Alimentação**
 *
 * Demonstra o ícone e badge da categoria "Alimentação" (Utensils).
 */
export const CategoriaAlimentacao: Story = {
  name: '4. Categoria — Alimentação',
  args: {
    transaction: transacaoAlimentacao,
  },
};

/**
 * **Categoria: Lazer**
 *
 * Demonstra o ícone e badge da categoria "Lazer" (Gamepad2).
 */
export const CategoriaLazer: Story = {
  name: '5. Categoria — Lazer',
  args: {
    transaction: transacaoLazer,
  },
};
