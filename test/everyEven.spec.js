const numbers = require('../mocks/numbers.json');
const everyEven = require('../src/everyEven');

describe('Every test suite [everyEven]', function() {
  test('Should return true if all numbers are even', function(){
      expect(everyEven([2, 4, 6])).toBe(true);
      expect(everyEven(numbers)).toBe(false);
  });
});