import { IAccount } from "@/types/account";

const BASE_URL = "http://localhost:3001";

export const accountService = {
  /**
   * Busca os dados da conta pelo ID
   */
  async getById(id: string): Promise<IAccount | null> {
    try {
      const response = await fetch(`${BASE_URL}/accounts/${id}`, {
        method: 'GET',
        cache: 'no-store',
      });

      if (response.status === 404) return null;

      if (!response.ok) {
        throw new Error(`Falha ao buscar conta ${id}: ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      console.error(`Erro ao buscar conta ${id}:`, error);
      throw error;
    }
  },

  /**
   * Busca apenas o nome do usuário
   */
  async getUserName(id: string = "1"): Promise<string> {
    try {
      const account = await this.getById(id);
      return account?.userName || "Usuário";
    } catch (error) {
      console.error("Erro ao buscar nome do usuário:", error);
      return "Usuário";
    }
  },
};
