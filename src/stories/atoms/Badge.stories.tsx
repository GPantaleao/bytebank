import type { Meta, StoryObj } from '@storybook/react';
import { Utensils, Gamepad2, Home, Banknote, Package, Tag, Wallet, CreditCard } from 'lucide-react';
import { Badge } from '@/app/components/atoms/Badge';

/**
 * # Badge Atom
 * 
 * O componente `Badge` é um dos menores átomos do nosso sistema de design, mas crucial para a **hierarquia visual** e **categorização semântica**.
 * 
 * ## Quando usar
 * - Para rotular transações financeiras em extratos.
 * - Para indicar status pequenos (ex: Pendente, Pago).
 * - Para tags de filtragem em dashboards.
 * 
 * ## Anatomia
 * O componente é composto por um container arredondado (pill shape), um ícone opcional à esquerda para reforço cognitivo, e um label textual centralizado.
 */
const meta: Meta<typeof Badge> = {
  title: 'Atoms/Badge',
  component: Badge,
  parameters: {
    layout: 'centered',
    docs: {
      subtitle: 'Etiqueta compacta para categorização semântica automática.',
      description: {
        component: 'Implementado com Tailwind CSS, o Badge é altamente flexível, permitindo customização total de cores e suporte nativo a ícones do Lucide React.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    children: {
      name: 'Conteúdo do Texto',
      description: 'O texto que define a categoria. Recomenda-se manter curto (máx 2 palavras).',
      table: {
        category: 'Conteúdo',
        type: { summary: 'ReactNode' },
      },
      control: 'text',
    },
    icon: {
      name: 'Ícone Visual',
      description: 'Ícone que acompanha o texto. Melhora a acessibilidade e o escaneamento visual.',
      table: {
        category: 'Conteúdo',
        type: { summary: 'LucideIcon' },
      },
      control: { disable: true },
    },
    className: {
      name: 'Estilos Adicionais',
      description: 'Permite sobrepor estilos padrão utilizando classes utilitárias do Tailwind.',
      table: {
        category: 'Aparência',
        type: { summary: 'string' },
        defaultValue: { summary: '""' },
      },
      control: 'text',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * **Simples (Placeholder)**
 * 
 * Utilizado para categorias que não possuem um ícone mapeado ou quando o minimalismo é prioridade.
 */
export const SemIcone: Story = {
  name: 'Minimalista (Apenas Texto)',
  args: {
    children: 'Outros',
    className: 'bg-slate-900 text-white font-semibold shadow-sm',
  },
};

/**
 * **Categoria Principal: Alimentação**
 * 
 * Aplicado em transações de supermercados, restaurantes e delivery.
 */
export const Alimentacao: Story = {
  name: 'Alimentação',
  args: {
    children: 'Alimentação',
    icon: Utensils,
    className: 'bg-orange-100 text-orange-700 border border-orange-200/50',
  },
};

/**
 * **Categoria Principal: Lazer**
 * 
 * Abrange gastos com cinema, jogos, hobbies e entretenimento geral.
 */
export const Lazer: Story = {
  name: 'Lazer',
  args: {
    children: 'Lazer',
    icon: Gamepad2,
    className: 'bg-purple-100 text-purple-700 border border-purple-200/50',
  },
};

/**
 * **Categoria Principal: Moradia**
 * 
 * Identifica contas fixas como aluguel, condomínio e utilidades (luz/água).
 */
export const Moradia: Story = {
  name: 'Moradia',
  args: {
    children: 'Moradia',
    icon: Home,
    className: 'bg-blue-100 text-blue-700 border border-blue-200/50',
  },
};

/**
 * **Fluxo de Entrada: Renda**
 * 
 * Destaque visual positivo para salários, bônus, dividendos ou depósitos recebidos.
 */
export const Renda: Story = {
  name: 'Renda & Entradas',
  args: {
    children: 'Renda',
    icon: Banknote,
    className: 'bg-emerald-100 text-emerald-700 border border-emerald-200/50 font-bold',
  },
};

/**
 * **Estado: Pago**
 * 
 * Exemplo de uso para status de transação financeira.
 */
export const StatusPago: Story = {
  name: 'Exemplo: Status Pago',
  args: {
    children: 'Pago',
    className: 'bg-green-600 text-white px-4',
  },
};

/**
 * **Estado: Pendente**
 * 
 * Exemplo de uso para indicar que uma ação ainda é necessária.
 */
export const StatusPendente: Story = {
  name: 'Exemplo: Status Pendente',
  args: {
    children: 'Pendente',
    className: 'bg-amber-100 text-amber-800 border border-amber-300',
  },
};

/**
 * **Vários Ícones (Suporte Nativo)**
 * 
 * O Badge herda o tamanho correto para qualquer ícone do Lucide React.
 */
export const ComOutrosIcones: Story = {
  name: 'Suporte a Ícones Diversos',
  render: () => (
    <div className="flex gap-3">
      <Badge icon={Tag}>Tag</Badge>
      <Badge icon={Wallet}>Carteira</Badge>
      <Badge icon={CreditCard}>Crédito</Badge>
    </div>
  ),
};