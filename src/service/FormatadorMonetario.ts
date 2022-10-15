export const formatadorMonetario = (valor: number) => {
  return valor.toLocaleString("pt-BR", {
    minimumFractionDigits: 2,
    style: "currency",
    currency: "BRL",
  });
};
