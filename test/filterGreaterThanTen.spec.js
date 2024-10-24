const numbers = require('../mocks/mixedNumbers.json');
const filterGreaterThanTen = require('../src/filterGreaterThanTen');

describe('Filter test suite [filterGreaterThanTen]', function() {
  test('Should return an array of numbers greater than 10', function(){
      expect(filterGreaterThanTen(numbers)).toEqual([12, 15, 20]);
  });
});