/* exported pokedex */

var pokedex = [
  {
    number: '001',
    name: 'Bulbasaur',
    description: 'There is a plant seed on its back right from the day this Pokémon is born. The seed slowly grows larger.',
    imageUrl: 'images/bulbasaur.png'
  },
  {
    number: '004',
    name: 'Charmander',
    description: 'It has a preference for hot things. When it rains, steam is said to spout from the tip of its tail.',
    imageUrl: 'images/charmander.png'
  },
  {
    number: '007',
    name: 'Squirtle',
    description: 'When it retracts its long neck into its shell, it squirts out water with vigorous force.',
    imageUrl: 'images/squirtle.png'
  },
  {
    number: '002',
    name: 'Ivysaur',
    description: 'When the bulb on its back grows large, it appears to lose the ability to stand on its hind legs.',
    imageUrl: 'images/ivysaur.png'
  },
  {
    number: '005',
    name: 'Charmeleon',
    description: 'It has a barbaric nature. In battle, it whips its fiery tail around and slashes away with sharp claws.',
    imageUrl: 'images/charmeleon.png'
  },
  {
    number: '008',
    name: 'Wartortle',
    description: 'It is recognized as a symbol of longevity. If its shell has algae on it, that Wartortle is very old.',
    imageUrl: 'images/wartortle.png'
  },
  {
    number: '003',
    name: 'Venusaur',
    description: 'Its plant blooms when it is absorbing solar energy. It stays on the move to seek sunlight.',
    imageUrl: 'images/venusaur.png'
  },
  {
    number: '006',
    name: 'Charizard',
    description: 'It spits fire that is hot enough to melt boulders. It may cause forest fires by blowing flames.',
    imageUrl: 'images/charizard.png'
  },
  {
    number: '009',
    name: 'Blastoise',
    description: 'It crushes its foe under its heavy body to cause fainting. In a pinch, it will withdraw inside its shell.',
    imageUrl: 'images/blastoise.png'
  }
];

function renderPokemon(pokemon) {
  var newDiv = document.createElement('div');
  newDiv.setAttribute('class', 'column-third');

  var innerDiv = document.createElement('div');
  innerDiv.setAttribute('class', 'pokemon-card');

  newDiv.appendChild(innerDiv);

  var image = document.createElement('img');
  image.setAttribute('src', pokemon.imageUrl);
  innerDiv.appendChild(image);

  var innerMostDiv = document.createElement('div');
  innerMostDiv.setAttribute('class', 'pokemon-card-text');
  innerDiv.appendChild(innerMostDiv);

  var h2 = document.createElement('h2');
  var h2Text = document.createTextNode(pokemon.name);
  h2.appendChild(h2Text);
  innerMostDiv.appendChild(h2);

  var h3 = document.createElement('h3');
  var h3Text = document.createTextNode(pokemon.number);
  h3.appendChild(h3Text);
  innerMostDiv.appendChild(h3);

  var p = document.createElement('p');
  var pText = document.createTextNode(pokemon.description);
  p.appendChild(pText);
  innerMostDiv.appendChild(p);

  return newDiv;
}

var row = document.querySelector('.row');

for (let i = 0; i < pokedex.length; i++) {
  var mon = renderPokemon(pokedex[i]);
  row.appendChild(mon);
}
