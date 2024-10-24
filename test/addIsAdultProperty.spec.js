const people = require('../mocks/people.json');
const addIsAdultProperty = require('../src/addIsAdultProperty');

describe('Map test suite [addIsAdultProperty]', function() {
  test('Should add isAdult property based on age', function(){
      const result = addIsAdultProperty(people);
      expect(result[0].isAdult).toBe(true);
      expect(result[10].isAdult).toBe(false);
  });
});