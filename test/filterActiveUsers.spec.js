const users = require('../mocks/users.json');
const filterActiveUsers = require('../src/filterActiveUsers');

describe('Filter test suite [filterActiveUsers]', function() {
  test('Should return only users where isActive is true', function(){
      const result = filterActiveUsers(users);
      expect(result.length).toBe(2);
  });
});
