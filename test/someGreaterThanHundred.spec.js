const numbers = require('../mocks/mixedNumbers.json');
const bigNumbers = require('../mocks/bigNumbers.json');
const someGreaterThanHundred = require('../src/someGreaterThanHundred');

describe('Some test suite [someGreaterThanHundred]', function() {
  test('Should return false since none number is greater than 100', function(){
      expect(someGreaterThanHundred(numbers)).toBe(false);
  });

  test('Should return true since some numbers is greater than 100', function(){
    expect(someGreaterThanHundred(numbers)).toBe(true);
  });
});
