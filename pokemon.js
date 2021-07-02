let base_URL = "https://pokeapi.co/api/v2/pokemon/";
function getPokemonList(url) {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      let pokemon = data.results;
      console.log(pokemon);

      let container = document.querySelector(".pokemon-list-container");
      container.innerHTML = "";

      pokemon.forEach((btn) => {
        document.querySelector(
          ".pokemon-list-container"
        ).innerHTML += `<button onclick = "getPokemonInfo('${btn.url}')">${btn.name}
  </button>`;
      });
      container.innerHTML += `<br><br><button onclick="getPokemonList('${data.next}')">Next</button>`;
      container.innerHTML += `<br><br><button onclick="getPokemonList('${data.previous}')">Previous</button>`;
      container.innerHTML += ``;
    });
}

getPokemonList(base_URL);

function getPokemonInfo(url) {
  console.log(url);
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      document.querySelector(".pokemonInfo").innerHTML = ``;
      document.querySelector(
        ".pokemonInfo"
      ).innerHTML = `<img src="${data.sprites.other.dream_world.front_default}"> `;

      document.querySelector(
        ".pokemonInfo"
      ).innerHTML += `<br><span class = "span"> ${
        "Name: " + data.name
      } </span>`;

      document.querySelector(".pokemonInfo").innerHTML += `<br><span> ${
        " Weight: " + data.weight + " kg" + ""
      } </span>`;

      document.querySelector(
        ".pokemonInfo"
      ).innerHTML += `<br><span class = "span"> ${
        "Height: " + data.height + " m"
      } </span>`;

      document.querySelector(".pokemonInfo").innerHTML += `<br><span> ${
        "Type: " + data.types[0].type.name
      } </span>`;
    });
}
