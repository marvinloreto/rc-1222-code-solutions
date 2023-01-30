console.log('Lodash is loaded:', typeof _ !== 'undefined');

const players = [
  {
    name: 'Mary',
    hand: [],
    score: 0
  },
  {
    name: 'Tina',
    hand: [],
    score: 0
  },
  {
    name: 'Patrick',
    hand: [],
    score: 0
  },
  {
    name: 'Joselle',
    hand: [],
    score: 0
  }
];

const deck = [];
const rank = ['Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King'];
const suit = ['Clubs', 'Spades', 'Hearts', 'Diamonds'];

function createDeck(ranks, suits) {
  for (let i = 0; i < ranks.length; i++) {
    for (let j = 0; j < suits.length; j++) {
      deck.push({
        rank: ranks[i],
        suit: suits[j]
      });
    }
  }
}
createDeck(rank, suit);

function shuffleDeck(deck) {
  return _.shuffle(deck);
}

const shuffledDeck = shuffleDeck(deck);

function dealCards() {
  for (let i = 0; i < players.length; i++) {
    for (let j = 0; j < 2; j++) {
      players[i].hand.push(shuffledDeck[j]);
      shuffledDeck.splice(0, 2);
    }
    console.log(`${players[i].name}'s Hand:`, players[i].hand);
  }
}
dealCards();

function getScore(players) {
  for (let i = 0; i < players.length; i++) {
    for (let j = 0; j < players[i].hand.length; j++) {
      const playerCards = players[i].hand[j].rank;
      if (playerCards === 'Ace') {
        players[i].score += 11;
      } else if (playerCards === 'Jack' || playerCards === 'Queen' || playerCards === 'King') {
        players[i].score += 10;
      } else {
        players[i].score += Number(playerCards);
      }
    }
    console.log(`${players[i].name}'s Score:`, players[i].score);
  }
}
getScore(players);

function getWinner(players) {
  if (players[0].score > players[1].score && players[0].score > players[2].score && players[0].score > players[3].score) {
    console.log(`${players[0].name} wins with a score of ${players[0].score}`);
  } else if (players[1].score > players[0].score && players[1].score > players[2].score && players[1].score > players[3].score) {
    console.log(`${players[1].name} wins with a score of ${players[1].score}`);
  } else if (players[2].score > players[0].score && players[2].score > players[1].score && players[2].score > players[3].score) {
    console.log(`${players[2].name} wins with a score of ${players[2].score}`);
  } else if (players[3].score > players[0].score && players[3].score > players[1].score && players[3].score > players[2].score) {
    console.log(`${players[3].name} wins with a score of ${players[3].score}`);
  } else {
    console.log('Tie game!');
  }
}
getWinner(players);
