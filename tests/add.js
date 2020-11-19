const addComponent = require('../src/components/add/index.js');

test('Expect sum of 1 and 6 to be 7', () => {
  expect(addComponent.default(1, 6)).toBe(7);
});
