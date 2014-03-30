function checkAnagrams(firstWords, secondWords) {
	var bool = true;
	
	for (var i = 0; i < firstWords.length; i++) {
		if (firstWords[i].length !== secondWords[i].length) {
			console.log(0);
		}
		else if (firstWords[i] === secondWords[i]) {
			console.log(1);
		}
		else {
			var obj = {};
			var obj2 = {};
			for (var j = 0; j < firstWords[i].length; j++) {
				if (obj[firstWords[i][j]]) {
					obj[firstWords[i][j]] += 1;
				}
				else {
					obj[firstWords[i][j]] = 1;
				}
				if (obj2[secondWords[i][j]]) {
					obj2[secondWords[i][j]] += 1;
				}
				else {
					obj2[secondWords[i][j]] = 1;
				}
			}
			
			for (var k = 0; k < firstWords[i].length; k++) {
				if (obj[firstWords[i][k]] !== obj2[firstWords[i][k]]){
					bool = false;
					break;	
				}
			}	
			if (bool) {
				console.log(1);
			}
			else {
				console.log(0);
			}						

		}

	}

}

checkAnagrams(['aaa','bb'], ['a','b']);
checkAnagrams(['aba'], ['baa']);
