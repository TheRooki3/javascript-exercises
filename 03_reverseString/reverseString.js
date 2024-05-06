const reverseString = function(string) {
	const strArr = string.split("");
	let reversedStr = [];
	for (let i = 0; i < strArr.length; i++){
		reversedStr.push(strArr[strArr.length - 1 - i]);
	}
	return reversedStr.join('');
};

reverseString("hello world");
// Do not edit below this line
module.exports = reverseString;
