import type { Meta, StoryObj } from '@storybook/react';
import { Modal } from '@/app/components/atoms/Modal';
import { Button } from '@/app/components/atoms/Button';
import { Trash2, LogOut, ShieldAlert } from 'lucide-react';

/**
 * # Modal Atom
 * 
 * O `Modal` é um componente de caixa de diálogo projetado para interromper o fluxo do usuário e exigir uma ação imediata ou confirmação.
 * 
 * ## Quando utilizar
 * - **Confirmação de Ações Críticas**: Exclusão de dados, cancelamento de assinaturas.
 * - **Alertas de Sistema**: Informações importantes que não podem ser ignoradas.
 * - **Formulários Rápidos**: Small inputs que não justificam uma nova página.
 * 
 * ## Modos de Operação
 * 1. **Não-Controlado (Trigger)**: Você passa um elemento no prop `trigger` e o Modal gerencia seu próprio estado de abertura.
 * 2. **Controlado (Open)**: Você gerencia o estado `open` externamente, ideal para lógica de negócios complexa.
 */
const meta: Meta<typeof Modal> = {
  title: 'Atoms/Modal',
  component: Modal,
  parameters: {
    layout: 'centered',
    docs: {
      subtitle: 'Diálogo de sobreposição para interações de alta prioridade.',
      description: {
        component: 'Construído com Framer Motion para animações fluidas e suporte nativo a acessibilidade (fechamento via ESC e Backdrop).',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      name: 'Variante de Contexto',
      description: 'Define a intenção visual do modal.',
      control: 'select',
      options: ['info', 'danger', 'warning', 'success'],
      table: { category: 'Aparência', defaultValue: { summary: 'info' } },
    },
    title: {
      name: 'Título Principal',
      description: 'Deve ser curto e imperativo.',
      control: 'text',
      table: { category: 'Conteúdo' },
    },
    description: {
      name: 'Corpo do Texto',
      description: 'Explica as consequências da ação de forma clara.',
      control: 'text',
      table: { category: 'Conteúdo' },
    },
    confirmLabel: {
      name: 'Label de Confirmação',
      control: 'text',
      table: { category: 'Conteúdo', defaultValue: { summary: 'Confirmar' } },
    },
    cancelLabel: {
      name: 'Label de Cancelamento',
      control: 'text',
      table: { category: 'Conteúdo', defaultValue: { summary: 'Cancelar' } },
    },
    trigger: {
      name: 'Elemento Ativador',
      description: 'Qualquer componente que aceite o evento onClick.',
      control: { disable: true },
      table: { category: 'Lógica' },
    },
    open: {
      name: 'Estado (Controlado)',
      description: 'Força o modal a ficar aberto ou fechado.',
      control: 'boolean',
      table: { category: 'Lógica' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * **Action: Danger (Confirmação de Exclusão)**
 * 
 * O modo mais comum de uso. O ícone vermelho e a variante `danger` comunicam risco imediato.
 */
export const Destrutivo: Story = {
  name: 'Confirmação de Exclusão',
  args: {
    variant: 'danger',
    title: 'Excluir transação permanentemente?',
    description: 'Esta ação não poderá ser desfeita. Todos os dados vinculados a este registro de "Alimentação" serão removidos do servidor.',
    confirmLabel: 'Sim, excluir',
    cancelLabel: 'Manter registro',
    trigger: <Button variant="danger" label="Excluir Registro" iconLeft={Trash2} />
  },
};

/**
 * **Action: Logout**
 * 
 * Uso da variante `warning` para ações que deslogam o usuário mas não deletam dados.
 */
export const Logout: Story = {
  name: 'Aviso de Saída',
  args: {
    variant: 'warning',
    title: 'Deseja encerrar sua sessão?',
    description: 'Você precisará de suas credenciais para acessar o painel financeiro novamente.',
    confirmLabel: 'Encerrar Sessão',
    cancelLabel: 'Continuar Logado',
    trigger: <Button outline variant="default" label="Sair da Conta" iconLeft={LogOut} />
  },
};

/**
 * **Action: Info/Success**
 * 
 * Utilizado para processos informativos positivos.
 */
export const Sucesso: Story = {
  name: 'Informativo / Sucesso',
  args: {
    variant: 'success',
    title: 'Verificação Completa',
    description: 'Sua conta foi verificada com sucesso. Agora você tem acesso ilimitado aos recursos de exportação.',
    confirmLabel: 'Entendido',
    cancelLabel: 'Depois',
    trigger: <Button variant="primary" outline label="Verificar Status" iconLeft={ShieldAlert} />
  },
};
