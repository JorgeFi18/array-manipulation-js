const people = require('../mocks/people.json');
const createFullNames = require('../src/fullName');

describe('Map test suite', function() {
  test('Items should contain fullName property', function(){
      const result = createFullNames(people);
      expect(result[0].fullName).toBe('Jonh Doe');
      expect(result[1].fullName).toBe('Linus Torvas');
  });
});