/**
 * Formata um número para o padrão de moeda brasileiro (BRL) sem o símbolo R$.
 * Ex: 2500.35 -> "2.500,35"
 */
export const formatCurrency = (value: number): string => {
  return new Intl.NumberFormat('pt-BR', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value);
};

/**
 * Converte uma string formatada em moeda brasileira de volta para um número.
 * Ex: "2.500,35" -> 2500.35
 */
export const parseCurrency = (value: string): number => {
  const cleanValue = value.replace(/\./g, '').replace(',', '.');
  return parseFloat(cleanValue) || 0;
};

/**
 * Aplica uma máscara de moeda brasileira a uma string enquanto o usuário digita.
 * Ex: "250035" -> "2.500,35"
 */
export const maskCurrency = (value: string): string => {
  const onlyDigits = value.replace(/\D/g, '');
  
  const amount = (Number(onlyDigits) / 100).toFixed(2);

  return formatCurrency(Number(amount));
};
