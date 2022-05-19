var functions = require('../functions');

// Executes the given testcase.
// Parameters:
// - testcaseBuffer: Buffer object containing the bytes read from the testcase file.
function processTestcase(testcaseBuffer)
{
	functions.function2(testcaseBuffer[0]);
}

module.exports = { processTestcase };
