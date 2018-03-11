class Card {
	constructor() {
		this._color = function() {
			var colors = ['Hearts', 'Clubs', 'Diamonds', 'Spades']
    		return colors[Math.floor(Math.random() * 5)];}
		
        this._value = function() {
        	var values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King', 'Ace']
  			return values[Math.floor(Math.random() * 15)];}
	    			}

	 toString() {
  		return this.value + ' ' + this.colors;
		};


 
class Deck {
	constructor(num) {
		this._num = num;
	}

draw() {
console.log(card.toString(new Card()))
}

deck() {
  	var cardlist = [];
	for (var i = 1; i<= num; i++) 
    	cardlist = cardlist.push(card.toString(new Card()));
    
}
  
}


const card = card.toString(new Card());

console.log(card);