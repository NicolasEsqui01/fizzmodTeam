export const Activacion = (numero) => ({
  type: 'ACTIVATION',
  numero,
});

export const Desactivacion = () => ({
  type: 'DESACTIVATION',
  numero: 0,
});
