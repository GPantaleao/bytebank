import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Select } from '@/app/components/atoms/Select';

const categoryOptions = [
  { value: 'alimentacao', label: 'Alimentação' },
  { value: 'lazer', label: 'Lazer' },
  { value: 'moradia', label: 'Moradia' },
  { value: 'renda', label: 'Renda' },
  { value: 'outros', label: 'Outros' },
];

const transactionOptions = [
  { value: 'transferencia', label: 'Transferência' },
  { value: 'deposito', label: 'Depósito' },
];

const SelectWrapper = (args: any) => {
  const [value, setValue] = useState(args.value ?? '');
  return <Select {...args} value={value} onChange={setValue} />;
};

/**
 * # Select Atom
 * 
 * O `Select` é um componente de entrada que permite ao usuário escolher uma opção em uma lista pré-definida.
 * 
 * ## Design & Acessibilidade
 * - **Interação**: Feedback visual no hover e foco com anéis de luz indigo.
 * - **Estética**: Bordas arredondadas (Pill shape) para manter consistência com o `TransactionCard`.
 * - **Tipografia**: Uso de labels em uppercase com tracking aumentado para facilitar o escaneamento de campos.
 */
const meta: Meta<typeof Select> = {
  title: 'Atoms/Select',
  component: Select,
  parameters: {
    layout: 'centered',
    docs: {
      subtitle: 'Seletor de opções com interface refinada.',
      description: {
        component: 'Dropdown estilizado que substitui o visual padrão do navegador por um design moderno e limpo, sem perder a funcionalidade nativa de acessibilidade.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    options: {
      name: 'Lista de Opções',
      description: 'Array de objetos { value, label }.',
      table: { category: 'Conteúdo' },
    },
    value: {
      name: 'Valor Atual',
      description: 'Controla qual opção está selecionada.',
      table: { category: 'Lógica' },
    },
    label: {
      name: 'Rótulo (Label)',
      description: 'Texto descritivo posicionado acima do campo.',
      table: { category: 'Conteúdo' },
    },
    placeholder: {
      name: 'Texto de Placeholder',
      description: 'Dica exibida quando o campo está vazio.',
      table: { category: 'Conteúdo' },
    },
  },
  render: (args) => <SelectWrapper {...args} />,
};

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * **Categorização Financeira**
 * 
 * Utilizado para classificar transações em grupos específicos.
 */
export const Categorias: Story = {
  name: 'Seleção de Categorias',
  args: {
    options: categoryOptions,
    value: '',
    placeholder: 'Escolha uma categoria...',
    label: 'Categoria de Gasto',
  },
};

/**
 * **Contexto de Transação**
 * 
 * Configuração compacta para definir o tipo de movimentação.
 */
export const TipoTransacao: Story = {
  name: 'Tipo de Transação',
  args: {
    options: transactionOptions,
    value: 'transferencia',
    label: 'Fluxo de Caixa',
  },
};

/**
 * **Estilo: Clean**
 * 
 * Versão sem label, ideal para uso dentro de formulários densos ou cabeçalhos de tabela.
 */
export const SemLabel: Story = {
  name: 'Minimalista (Sem Label)',
  args: {
    options: categoryOptions,
    value: '',
    placeholder: 'Filtrar por...',
  },
};
