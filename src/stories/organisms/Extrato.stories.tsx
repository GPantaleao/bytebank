import type { Meta, StoryObj } from '@storybook/react';
import { Extrato } from '@/app/components/organisms/Extrato';
import { ITransaction } from '@/types/transaction';

/**
 * Dados reais extraídos do `data/db.json`.
 * Refletem o estado atual do banco de dados da aplicação.
 * Todas as transações são de Abril de 2026.
 */
const MOCK_TRANSACTIONS: ITransaction[] = [
  {
    id: '1',
    amount: 3000.5,
    type: 'transferencia',
    date: '2026-04-21T15:30:00Z',
    description: 'Pagamento de aluguel',
    category: 'Moradia',
  },
  {
    id: '2',
    amount: 1500.62,
    type: 'deposito',
    date: '2026-04-22T10:15:00Z',
    description: 'Supermercado',
    category: 'Alimentação',
  },
  {
    id: '3',
    amount: 1200,
    type: 'deposito',
    date: '2026-04-20T09:00:00Z',
    description: 'Depósito de Salário',
    category: 'Renda',
  },
  {
    id: '4',
    amount: 45,
    type: 'transferencia',
    date: '2026-04-21T18:45:00Z',
    description: 'Assinatura de Streaming',
    category: 'Lazer',
  },
  {
    id: 'fuscfgbl0-0',
    amount: 100,
    type: 'transferencia',
    date: '2026-04-28T12:54:52.345Z',
    description: 'Transferência',
  },
  {
    id: 'BX4LHDFZego',
    amount: 1234.56,
    type: 'deposito',
    date: '2026-04-29T02:15:31.006Z',
    description: 'Depósito',
  },
];

/**
 * Mock do `fetch` global para interceptar chamadas ao `transactionService`.
 * Retorna os dados do `db.json` sem precisar do servidor JSON Server rodando.
 */
const mockFetch = () => {
  const originalFetch = globalThis.fetch;

  globalThis.fetch = async (input: RequestInfo | URL) => {
    const url = input.toString();

    if (url.includes('/transactions')) {
      return new Response(JSON.stringify(MOCK_TRANSACTIONS), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    return originalFetch(input);
  };

  return () => {
    globalThis.fetch = originalFetch;
  };
};

/**
 * # Extrato Organism
 *
 * O `Extrato` é um **Organismo** completo para visualização e gerenciamento do histórico
 * de transações financeiras do usuário. Integra-se diretamente à API de transações e
 * orquestra múltiplos átomos e moléculas do Design System.
 *
 * ## Composição
 * - **Select:** Filtro de mês para segmentar o histórico de transações
 * - **Button + Link:** CTA "Ver mais" quando o extrato tem limite de exibição
 * - **Modal + TransactionDetailCard:** Abre o detalhe completo ao clicar em uma transação
 * - **Skeleton / Empty State:** Feedback visual para os estados de carregamento e lista vazia
 *
 * ## Estados
 * 1. **Carregando** — Enquanto a API retorna os dados
 * 2. **Vazio** — Nenhuma transação no mês selecionado
 * 3. **Populado** — Lista de transações filtradas por mês
 * 4. **Com Limite** — Exibe N transações com botão "Ver mais"
 *
 * ## Comportamentos
 * - Ao clicar em uma transação, abre um `Modal` com o `TransactionDetailCard`
 * - Edições e exclusões dentro do Modal atualizam a lista em tempo real (via `useImperativeHandle`)
 *
 * > **Dados:** Os stories abaixo usam os dados reais do `data/db.json`,
 * > interceptando o `fetch` via mock para dispensar o JSON Server.
 */
const meta: Meta<typeof Extrato> = {
  title: 'Organisms/Extrato',
  component: Extrato,
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'cinza',
      values: [{ name: 'cinza', value: '#f5f5f5' }],
    },
    docs: {
      description: {
        component:
          'Organismo de extrato financeiro que busca, filtra e exibe transações por mês. Permite visualizar detalhes, editar e excluir transações através de um Modal. Os stories utilizam os dados reais do `data/db.json` via mock do `fetch`.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    limit: {
      description:
        'Limita o número de transações exibidas. Quando definido e há mais transações no mês, exibe um botão "Ver mais" que redireciona para a tela de extrato completo.',
      control: { type: 'number', min: 1, max: 20 },
      table: {
        type: { summary: 'number | undefined' },
        defaultValue: { summary: 'undefined (sem limite)' },
        category: 'Comportamento',
      },
    },
  },
} satisfies Meta<typeof Extrato>;

export default meta;
type Story = StoryObj<typeof Extrato>;

export const ComLimiteDashboard: Story = {
  name: '2. Com Limite de Exibição - Dashboard (3 itens)',
  args: {
    limit: 3,
  },
  beforeEach: mockFetch,
  parameters: {
    docs: {
      description: {
        story:
          'Com `limit: 3` e 6 transações em Abril no banco, o botão "Ver mais" é exibido para levar à página específica de transferência/extrato. Este é o comportamento esperado para o widget do dashboard.',
      },
    },
  },
};

/**
 * **Page Transferências / Extrato**
 *
 * Exibe todas as **6 transações** do banco de dados do mês de Abril/2026, sem limite de exibição.
 * O botão "Ver mais" não aparece, pois o limite não foi atingido.
 */
export const PageExtrato: Story = {
  name: '3. Sem limite de exibição - Page Transferências / Extrato',
  args: {},
  beforeEach: mockFetch,
  parameters: {
    docs: {
      description: {
        story:
          'Esse cenário é válido para a exibição do extrato em uma tela que não tem um limite de exibição, como a tela de Transferências/ extrato. Como há 6 transações no mês e não há limite, todas são exibidas e o botão "Ver mais" não aparece.',
      },
    },
  },
};
