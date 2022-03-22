import gameEngine from '../index.js';
import getRandomNumber from '../util.js';

const title = 'Find the greatest common divisor of given numbers';
const gcd = (x, y) => {
  let absX = Math.abs(x);
  let absY = Math.abs(y);
  while (absY) {
    const temp = absY;
    absY = absX % absY;
    absX = temp;
  }
  return absX;
};
const minValue = 1;
const maxValue = 25;

const generateRound = () => {
  const number1 = getRandomNumber(minValue, maxValue);
  const number2 = getRandomNumber(minValue, maxValue);
  const question = `${number1} ${number2}`;
  const correctAnswer = gcd(number1, number2);
  return { question, correctAnswer: String(correctAnswer) };
};

export default () => gameEngine(title, generateRound);
