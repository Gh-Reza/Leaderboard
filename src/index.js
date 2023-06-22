import './style.css';
import refresh from './data.js';

const refreshBtn = document.querySelector('.btn-refresh');

refreshBtn.addEventListener('click', () => {
  refresh();
});
