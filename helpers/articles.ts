/**
 * Formats date to custom format
 * @param dateString date given in this format 2019-12-06T17:50:17.735Z
 * @returns date formatted as 1 de Julio de 2019
 */
export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  const day = date.getDate();
  const month = new Intl.DateTimeFormat("es-ES", { month: "long" }).format(
    date
  );
  const year = date.getFullYear();
  return `${day} de ${month} de ${year}`;
}
