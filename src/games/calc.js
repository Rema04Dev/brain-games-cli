import gameEngine from '../index.js';
import getRandomNumber from '../util.js';

const operatorSymbols = ['+', '-', '*'];
const minValue = 0;
const maxValue = 25;
const title = 'What is the result of the expression?';
const getRandomSymbol = (arr) => arr[getRandomNumber(0, arr.length - 1)];

const generateRound = () => {
  const firstOperand = getRandomNumber(minValue, maxValue);
  const secondOperand = getRandomNumber(minValue, maxValue);
  const operator = getRandomSymbol(operatorSymbols);
  const question = `${firstOperand} ${operator} ${secondOperand}`;
  let result = 0;
  switch (operator) {
    case '+':
      result = firstOperand + secondOperand;
      break;
    case '-':
      result = firstOperand - secondOperand;
      break;
    case '*':
      result = firstOperand * secondOperand;
      break;
    default:
      return false;
  }
  return { question, correctAnswer: String(result) };
};

export default () => gameEngine(title, generateRound);
