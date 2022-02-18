export default function initFetchAnimais() {
  function createAniamal(animal) {
    const div = document.createElement('div');
    div.classList.add('numero-animal');

    div.innerHTML = `<h3>${animal.especies}</h3><span data-numero>${animal.total}</span>`;
    return div;
  }

  async function fetchAnimais(url) {
    try {
      const animaisResponse = await fetch(url);
      const animaisJson = await animaisResponse.json();
      const numeroGrid = document.querySelector('.numeros-grid');
      animaisJson.forEach((animal) => {
        const divAnimal = createAniamal(animal);

        numeroGrid.appendChild(divAnimal);
      });
    } catch (erro) {
      console.log(erro);
    }
  }
  fetchAnimais('./animaisapi.json');
}
