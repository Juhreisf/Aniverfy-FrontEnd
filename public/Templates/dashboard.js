export default () => {
  const container = document.createElement('div');
  container.innerHTML = `
    <h1>Bem-vinda à Dashboard!</h1>
    <p>Fluxo completo funcionando!</p>
  `;
  return container;
};