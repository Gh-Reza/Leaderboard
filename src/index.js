import './style.css';
import { refresh, sendData } from './data.js';

const refreshBtn = document.querySelector('.btn-refresh');
const submitBtn = document.querySelector('.btn-submit');

// Hundle refresh click event

refreshBtn.addEventListener('click', () => {
  refresh();
});

// Calls refresh method when page loads

document.addEventListener('DOMContentLoaded', refresh);

// Hundle submit button click event
submitBtn.addEventListener('click', (e) => {
  e.preventDefault();
  const userInput = document.querySelector('.input-name');
  const scoreInput = document.querySelector('.input-score');
  const user = userInput.value;
  const score = parseInt(scoreInput.value, 10);
  sendData(user, score);

  userInput.value = '';
  scoreInput.value = '';
});
