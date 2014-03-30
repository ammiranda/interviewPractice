function braceChecker(arr) {
	
	for (var i = 0; i < arr.length; i++) {

		var count = 0;

		for (var j = 0; j < arr[i].length; j++) {
			if (count < 0)  {
				break;
			}	
			if (arr[i][j] === "\{" || arr[i][j] === "\[" || arr[i][j] === "\(") {
				count += 1;
			}	
			else if (arr[i][j] === "\}" || arr[i][j] === "\]" || arr[i][j] === "\)") {
				count -= 1;
			}
		}

		if (count === 0) {
			console.log(1);
		}
		else {
			console.log(0);
		}
	}	
}
braceChecker(["{{}}", "}(())", "[{]}"]);
