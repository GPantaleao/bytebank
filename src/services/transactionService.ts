import { ITransaction } from "@/types/transaction";

const BASE_URL = "http://localhost:3001";

export const transactionService = {
  /**
   * Busca uma transação pelo ID
   */
  async getById(id: string): Promise<ITransaction | null> {
    try {
      const response = await fetch(`${BASE_URL}/transactions/${id}`, {
        method: 'GET',
        cache: 'no-store'
      });
      
      if (response.status === 404) return null;

      if (!response.ok) {
        throw new Error(`Falha ao buscar transação ${id}: ${response.status}`);
      }
      
      return await response.json();
    } catch (error) {
      console.error(`Erro ao buscar transação ${id}:`, error);
      throw error;
    }
  },

  /**
   * Deleta uma transação pelo ID
   */
  async delete(id: string): Promise<boolean> {
    try {
      const response = await fetch(`${BASE_URL}/transactions/${id}`, {
        method: 'DELETE',
      });
      
      return response.ok;
    } catch (error) {
      console.error(`Erro ao deletar transação ${id}:`, error);
      return false;
    }
  },

  /**
   * Placeholder para atualização (Edição)
   */
  async update(id: string, data: Partial<ITransaction>): Promise<ITransaction | null> {
    try {
      const response = await fetch(`${BASE_URL}/transactions/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!response.ok) return null;
      return await response.json();
    } catch (error) {
      console.error(`Erro ao atualizar transação ${id}:`, error);
      return null;
    }
  }
};
