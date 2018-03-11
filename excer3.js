class Card {
	constructor(color, value) {
		this._color = function() {
			var colors = ['Hearts', 'Clubs', 'Diamonds', 'Spades']
    		return colors[Math.floor(Math.random() * 5)];}
		
        this._value = function() {
        	var values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King', 'Ace']
  			return values[Math.floor(Math.random() * 15)];}
	    			}
		};


 
class Deck {
	constructor(num) {
		this._num = num;
	}


  
  
}


const card = new Card(color, value);

console.log(card);