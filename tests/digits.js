const digitsComponent = require('../src/components/digits/index.js');

test('Expect the digits of number 16 to be [1, 6]', () => {
  expect(digitsComponent.default(16)).toEqual(expect.arrayContaining([1, 6]));
});

test('Expect the digits of number -27 to be [2, 7]', () => {
  expect(digitsComponent.default(-27)).toEqual(expect.arrayContaining([2, 7]));
});
