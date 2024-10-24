const numbers = require('../mocks/numbers.json');
const sumAllNumbers = require('../src/sumAllNumbers');

describe('Reduce test suite [sumAllNumbers]', function() {
  test('Should return the sum of all numbers in the array', function(){
      expect(sumAllNumbers(numbers)).toBe(15);
  });
});