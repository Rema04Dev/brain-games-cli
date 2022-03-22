import gameEngine from '../index.js';
import getRandomNumber from '../util.js';

const progressionLength = 10;
const title = 'What number is missing in the progression?';
const getLastItem = (arr) => arr[arr.length - 1];
const getRandomItem = (arr) => arr[getRandomNumber(0, arr.length - 1)];

const makeArithmeticProgression = (number, step) => number + step;
const replaceItem = (arr, item) => {
  const copiedArray = arr;
  const index = arr.indexOf(item);
  const missingNumber = '..';
  copiedArray[index] = missingNumber;
  return copiedArray;
};
const generateRound = () => {
  const firstNumber = getRandomNumber(1, 10);
  const maxStep = 20;
  const step = getRandomNumber(firstNumber, getRandomNumber(firstNumber, maxStep));
  const numbers = [firstNumber];
  for (let i = 0; i < progressionLength; i += 1) {
    numbers.push(makeArithmeticProgression(getLastItem(numbers), step));
  }
  const correctAnswer = getRandomItem(numbers);
  const question = replaceItem(numbers, correctAnswer).join(' ');
  return { question, correctAnswer: String(correctAnswer) };
};

export default () => gameEngine(title, generateRound);
