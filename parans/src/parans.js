function paransCount(str) {
	var total = 0;

	for (var i = 0; i < str.length; i++) {
		if (total >= 0) {
			if (str[i] === '\(') {
				total += 1;
			}	
			else if (str[i] === '\)') {
				total -= 1;	
			} 
		}	

		else {
			return false;
		}
	}
	if (total === 0) {
		return true;
	}
	else {
		return false;
	}
}


module.exports = paransCount;
