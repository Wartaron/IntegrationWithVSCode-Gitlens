"use strict";

//let arr = [1, 4, 4, 4, 5, 3];
var arr = [1, 2, 3, 4, 5, 4, 3, 2, 1, 3, 4];

console.log(migratoryBirds(arr));

function migratoryBirds(arr) {

	var arrOfFrecuencyOfTypes = [];
	var maxFrecuencyBird = "";

	function getMaxOfArray(arr) {
		return arr.reduce(function (lastValue, nextValue) {

			return lastValue >= nextValue ? lastValue : nextValue;
		});
	}

	function getCountByValueInArray(arr) {
		var maxTypeOfBirds = getMaxOfArray(arr);
		var countArray = [];
		var count = 0;

		var _loop = function _loop(i) {

			arr.forEach(function (element) {
				if (element === i + 1) {
					count++;
				}
			});

			countArray.push(count);
			count = 0;
		};

		for (var i = 0; i < maxTypeOfBirds; i++) {
			_loop(i);
		}

		return countArray;
	}

	arrOfFrecuencyOfTypes = getCountByValueInArray(arr);

	maxFrecuencyBird = getMaxOfArray(arrOfFrecuencyOfTypes);

	return arrOfFrecuencyOfTypes.indexOf(maxFrecuencyBird) + 1;
}
