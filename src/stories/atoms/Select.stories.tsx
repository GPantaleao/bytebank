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

// Wrapper para manter o estado e limitar a largura (evita que o select estique na tela toda)
const SelectWrapper = (args: any) => {
  const [value, setValue] = useState(args.value ?? '');
  return (
    <div className="w-full max-w-[280px]">
      <Select {...args} value={value} onChange={setValue} />
    </div>
  );
};

const meta: Meta<typeof Select> = {
  title: 'Atoms/Select',
  component: Select,
  parameters: {
    layout: 'centered',
    // Fundo levemente acinzentado para destacar o Select que é Gray-50/Branco
    backgrounds: {
      default: 'light',
      values: [{ name: 'light', value: '#fcfcfc' }],
    },
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div className="p-10 border border-dashed border-gray-200 rounded-xl bg-white shadow-sm flex justify-center min-w-[400px]">
        <Story />
      </div>
    ),
  ],
  argTypes: {
    options: { name: 'Opções' },
    value: { name: 'Valor Atual' },
    label: { name: 'Rótulo (Label)' },
    placeholder: { name: 'Placeholder' },
    className: { table: { disable: true } },
    buttonClassName: { table: { disable: true } },
  },
  render: (args) => <SelectWrapper {...args} />,
};

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * **Categorização Financeira**
 * Exemplo padrão com rótulo superior e lista de categorias.
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
 * Configuração utilizada para definir o tipo de movimentação financeira.
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
 * **Minimalista**
 * Versão sem rótulo, ideal para filtros rápidos ou cabeçalhos de tabelas.
 */
export const SemLabel: Story = {
  name: 'Minimalista (Sem Label)',
  args: {
    options: categoryOptions,
    value: '',
    placeholder: 'Filtrar por...',
  },
};

/**
 * **Visão Geral**
 * Comparativo dos estados do componente lado a lado.
 */
export const VisaoGeral: Story = {
  name: 'Variações de Estado',
  render: () => (
    <div className="flex flex-col gap-8 p-12 w-full max-w-[300px]">
      <div className="space-y-1">
        <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Estado Inicial</p>
        <Select
          options={categoryOptions}
          value=""
          onChange={() => { }}
          placeholder="Selecione..."
        />
      </div>

      <div className="space-y-1">
        <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Com Label</p>
        <Select
          options={categoryOptions}
          value="alimentacao"
          onChange={() => { }}
          label="Categoria"
        />
      </div>

      <div className="space-y-1">
        <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Variação de Botão (Pill)</p>
        <Select
          options={transactionOptions}
          value="transferencia"
          onChange={() => { }}
          buttonClassName="rounded-full px-6 border-primary-200"
        />
      </div>
    </div>
  ),
  parameters: {
    controls: { disable: true },
  },
};