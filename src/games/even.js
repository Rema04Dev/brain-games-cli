import gameEngine from '../index.js';
import getRandomNumber from '../util.js';

const title = 'Answer "yes" if number is even, otherwise answer"no"';
const isEven = (number) => number % 2 === 0;

const generateRound = () => {
  const question = getRandomNumber(1, 100);
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  return { question, correctAnswer };
};

export default () => gameEngine(title, generateRound);
