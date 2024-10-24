const numbers = require('../mocks/numbers.json');
const sumNumbers = require('../src/sumNumbers');

describe('ForEach test suite [sumNumbers]', function() {
  test('Shold calculate the total of a numbers in array', function(){
      expect(sumNumbers(numbers)).toBe(15);
  });
});