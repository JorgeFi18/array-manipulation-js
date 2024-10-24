const people = require('../mocks/people.json');
const someSeniorCitizen = require('../src/someSeniorCitizen');

describe('Some test suite [someSeniorCitizen]', function() {
  test('Should return true if any person is older than 65', function(){
      expect(someSeniorCitizen(people)).toBe(false);
  });
});
