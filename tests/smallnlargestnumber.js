const numbersComponent = require('../src/components/smallnlargestnumber/index.js');

describe('yourModule', () => {
  it('smallnlargestnumber1', async () => {
    const numbers = [1, 6];
    const res = await numbersComponent.default(numbers);
    expect(res[0]).toBe(1);
  });

  it('smallnlargestnumber2', async () => {
    const numbers = [6, 1];
    const res = await numbersComponent.default(numbers);
    expect(res[0]).toBe(1);
  });

  it('smallnlargestnumber3', async () => {
    const numbers = [1, 6];
    const res = await numbersComponent.default(numbers);
    expect(res[1]).toBe(6);
  });

  it('smallnlargestnumber4', async () => {
    const numbers = [6, 1];
    const res = await numbersComponent.default(numbers);
    expect(res[1]).toBe(6);
  });
});
