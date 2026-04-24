import type { Meta, StoryObj } from '@storybook/react';
import { TransactionAmount } from '@/app/components/molecules/TransactionAmount';

/**
 * ## Documentação Técnica: TransactionAmount
 * 
 * ### Visão Geral
 * O `TransactionAmount` é uma **Molécula** especializada na representação visual de dados monetários. 
 * Sua principal função é converter valores numéricos brutos (float) em uma representação legível 
 * e semanticamente colorida para o usuário final.
 * 
 * ### Decisões de Engenharia
 * - **Localização (i18n):** O componente utiliza a API nativa `Intl.NumberFormat` para garantir que a formatação de moeda (BRL - R$) siga os padrões geográficos e linguísticos brasileiros.
 * - **Feedback Semântico:** Implementa o conceito de "Cores Semânticas", onde a cor não é apenas estética, mas comunica o status da transação (Entrada vs. Saída) de forma imediata, reduzindo a carga cognitiva.
 * - **Imutabilidade:** O componente é tratado como um "Pure Component", recebendo dados via props e renderizando a interface sem efeitos colaterais internos.
 * 
 * ### Acessibilidade
 * - O uso de cores para diferenciar os tipos de transação é acompanhado por sinais lógicos (no código subjacente) para garantir que usuários com daltonismo ou deficiências visuais possam compreender o fluxo através de leitores de tela ou contextos de uso.
 */
const meta: Meta<typeof TransactionAmount> = {
  title: 'Molecules/TransactionAmount',
  component: TransactionAmount,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Exibidor de valores financeiros com formatação dinâmica BRL e aplicação de lógica de cores para fluxos de caixa.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      description: 'Define a natureza da transação. Influencia diretamente a cor da fonte com base no Design System.',
      control: 'inline-radio',
      options: ['deposito', 'transferencia'],
      table: {
        type: { summary: "'deposito' | 'transferencia'" },
        defaultValue: { summary: "'deposito'" },
      },
    },
    amount: { 
      description: 'Valor numérico (double/float) que será processado pela máscara monetária.',
      control: { type: 'number', min: 0 },
      table: {
        type: { summary: 'number' },
      }
    },
  },
} satisfies Meta<typeof TransactionAmount>;

export default meta;

type Story = StoryObj<typeof TransactionAmount>;

/**
 * **Fluxo de Entrada (Cash-in):**
 * Representa um acréscimo ao patrimônio do usuário. 
 * A estilização utiliza tokens de cor positivos (geralmente verdes) 
 * para reforçar a percepção de ganho.
 */
export const PositiveCashFlow: Story = {
  name: '1. Fluxo Positivo (Depósito)',
  args: {
    amount: 1500.5,
    type: 'deposito',
  },
};

/**
 * **Fluxo de Saída (Cash-out):**
 * Representa uma redução de saldo. 
 * A estilização utiliza tokens de alerta ou negativos (vermelhos) 
 * para sinalizar a saída de recursos.
 */
export const NegativeCashFlow: Story = {
  name: '2. Fluxo Negativo (Transferência)',
  args: {
    amount: 350.0,
    type: 'transferencia',
  },
};

/**
 * **Precisão e Escala:**
 * Demonstra a capacidade do componente em lidar com grandes volumes numéricos, 
 * validando o posicionamento de separadores de milhar e a precisão de duas casas decimais.
 */
export const HighValueFormatting: Story = {
  name: '3. Formatação em Larga Escala',
  args: {
    amount: 125850.99,
    type: 'deposito',
  },
};

/**
 * **Tratamento de Valores Zerados:**
 * Valida a exibição visual quando o valor da transação é zero, 
 * garantindo que a máscara `R$ 0,00` seja mantida corretamente.
 */
export const ZeroValue: Story = {
  name: '4. Valor Zero/Neutro',
  args: {
    amount: 0,
    type: 'transferencia',
  },
};