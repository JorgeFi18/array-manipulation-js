const numbers = require('../mocks/numbers.json');
const numbersWithNegative = require('../mocks/numbersWithNegative.json');
const everyPositive = require('../src/everyPositive');

describe('Every test suite [everyPositive]', function() {
  test('Should return true since all numbers are positive', function(){
      expect(everyPositive(numbers)).toBe(true);
  });

  test('Should return false since all numbers are not positive', function(){
    expect(everyPositive(numbers)).toBe(false);
});
});
