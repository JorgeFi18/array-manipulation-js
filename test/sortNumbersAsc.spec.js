const numbers = require('../mocks/mixedNumbers.json');
const sortNumbersAsc = require('../src/sortNumbersAsc');

describe('Sort test suite [sortNumbersAsc]', function() {
  test('Should return the numbers sorted in ascending order', function(){
      expect(sortNumbersAsc(numbers)).toEqual([5, 8, 12, 15, 20]);
  });
});
