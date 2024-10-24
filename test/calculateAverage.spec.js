const numbers = require('../mocks/numbers.json');
const calculateAverage = require('../src/calculateAverage');

describe('Reduce test suite [calculateAverage]', function() {
  test('Should return the average of all numbers in the array', function(){
      expect(calculateAverage(numbers)).toBe(3);
  });
});
