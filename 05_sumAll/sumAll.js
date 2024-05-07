const sumAll = function(begin,end) {
	let sum = 0;
	const err = "ERROR";
	if(!Number.isInteger(begin) || !Number.isInteger(end)){
		return err;
	}
	if(begin < 0 || end < 0){
		return err;
	}
	if(end < begin){
		[begin,end] = [end,begin];
	}

	for(let i = begin ; i <= end ; i++){
		sum += i;
	}
	return sum;
};

// Do not edit below this line
module.exports = sumAll;
