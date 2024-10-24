const names = require('../mocks/names.json');
const sortNames = require('../src/sortNames');

describe('Sort test suite [sortNames]', function() {
  test('Should return the names sorted in alphabetical order', function(){
      expect(sortNames(names)).toEqual(["Alice", "Bob", "Carlos"]);
  });
});
