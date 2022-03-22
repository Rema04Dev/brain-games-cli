import gameEngine from '../index.js';
import getRandomNumber from '../util.js';

const title = 'Answer "yes" if given number is prime. Otherwise answer "no"';
const minValue = 1;
const maxValue = 101;
const isPrime = (num) => {
  for (let i = 2; i * i <= num; i += 1) {
    if (num % i === 0) return false;
  }
  return num > 1;
};

const generateRound = () => {
  const question = getRandomNumber(minValue, maxValue);
  const correctAnswer = isPrime(question) ? 'yes' : 'no';
  return { question, correctAnswer };
};

export default () => gameEngine(title, generateRound);
