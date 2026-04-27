export function formatLongDate(date: string | Date): string {
  const data = new Date(date);

  const day = data.getDate().toString().padStart(2, '0');
  const month = data.toLocaleString('pt-BR', { month: 'long' });
  const year = data.getFullYear();
  const hours = data.getHours().toString().padStart(2, '0');
  const minutes = data.getMinutes().toString().padStart(2, '0');

  return `${day} de ${month} de ${year} às ${hours}:${minutes}`;
}

export function formatDate(date: string | Date, format: string = "DD/MM/YYYY"): string {
  const data = new Date(date);

  const day = data.getDate().toString().padStart(2, '0');
  const month = (data.getMonth() + 1).toString().padStart(2, '0');
  const year = data.getFullYear();

  return format
    .replace('DD', day)
    .replace('MM', month)
    .replace('YYYY', year.toString());
}
