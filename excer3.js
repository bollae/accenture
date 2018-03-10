class Card {
	constructor(value, color) {
		this._color = color
		this._value = value
	}

set name(value) {
  return Math.floor(Math.random() * 10);
  }
  
set name(color) {
	var colors = ['Hearts', 'Clubs', 'Diamonds', 'Spades']
    return colors[Math.floor(Math.random() * 5)]
}
  
};

class Deck {
	constructor(num) {
		this._num = num;
	}
}



console.log(card);