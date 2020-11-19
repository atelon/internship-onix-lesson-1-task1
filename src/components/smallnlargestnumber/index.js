import findTheBiggestNumber from './functions/findTheBiggestNumber';
import findTheSmallestNumber from './functions/findTheSmallestNumber';

async function getTheSmallestNTheLargestNumbers(numbers) {
  const responses = await Promise.all([
    findTheSmallestNumber(numbers),
    findTheBiggestNumber(numbers),
  ]);
  return responses;
}

export default getTheSmallestNTheLargestNumbers;
