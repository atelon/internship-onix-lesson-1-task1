import getNumber from './components/numbers';
import getDigits from './components/digits';
import getTheSmallestNTheLargestNumbers from './components/smallnlargestnumber';
import add from './components/add';

async function main() {
  const inputNumber = await getNumber();
  const numbers = getDigits(inputNumber);
  const [theSmallestNumber, theLargestNumber] = await getTheSmallestNTheLargestNumbers(numbers);
  return add(theSmallestNumber, theLargestNumber);
}

main().then(
  (resolved) => {
    // eslint-disable-next-line no-console
    console.log(`The sum of the largest and smallest digit is ${resolved}`);
  },
  (rejected) => {
    // eslint-disable-next-line no-console
    console.error(rejected);
  },
);
