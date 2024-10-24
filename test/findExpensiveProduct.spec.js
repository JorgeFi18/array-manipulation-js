const products = require('../mocks/products.json');
const findExpensiveProduct = require('../src/findExpensiveProduct');

describe('Find test suite [findExpensiveProduct]', function() {
  test('Should return the first product whose price is greater than 100', function(){
      const result = findExpensiveProduct(products);
      expect(result.name).toBe('Laptop');
  });
});
