
var lookup = [ 0, 1, 2, 3, 4, 5, 6, 7 ];

function function1(x)
{
	return lookup[x % 8];
}

function function2(x)
{
	var sum = 0;
	for(var i = 0; i < x; i++)
		sum += 1;
		
	return sum;
}

module.exports = { function1, function2 };