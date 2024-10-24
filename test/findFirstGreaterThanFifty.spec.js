const numbers = require('../mocks/mixedNumbers2.json');
const findFirstGreaterThanFifty = require('../src/findFirstGreaterThanFifty');

describe('Find test suite [findFirstGreaterThanFifty]', function() {
  test('Should return the first number greater than 50', function(){
      expect(findFirstGreaterThanFifty(numbers)).toBe(60);
  });
});