const numbers = require('../mocks/numbers.json');
const doubleNumbers = require('../src/doubleNumbers');

describe('Map test suite [doubleNumbers]', function() {
  test('Should return an array with all numbers doubled', function(){
      expect(doubleNumbers(numbers)).toEqual([2, 4, 6, 8, 10]);
  });
});