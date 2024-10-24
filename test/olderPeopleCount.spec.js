const people = require('../mocks/people.json');
const olderPeopleCount = require('../src/olderPeopleCount');

describe('ForEach test suite [olderPeopleCount]', function() {
  test('Should calculate the total of people above 20 years old', () => {
    const result = olderPeopleCount(people);
    expect(result).toBe(9);
  });
});