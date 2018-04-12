var num = 0;
var enc;
var str;
function number(str) {
	for (var i = 0; i < str.length; i++)
		if (str[i] == str[0])
			num += 1;
	
};


function encript(str) {
	number(str); 
	str.toLowerCase();
	enc = str.replace(/[a-z]/g, L => String.fromCharCode(97+(L.charCodeAt(0) + num-97)%26));
  return enc;
};

encript('apple alarm');
console.log(num);
console.log(enc)