import './styles.css';
import { NewApiGame, GetScores } from '../module/api.js';

const name = document.getElementById('name');
const score = document.getElementById('score');

const getAllScores = async () => {
  const allScores = await GetScores();

  allScores.result.sort((a, b) => b.score - a.score);

  allScores.result.forEach((item) => {
    const scoreList = document.getElementById('score-list');
    const scoreListItem = document.createElement('li');
    scoreListItem.className = 'list-item';
    scoreListItem.innerHTML = `${item.user}:  ${item.score}`;
    scoreList.appendChild(scoreListItem);
  });
  const scoreLength = allScores.result.length;
  const totalScores = document.querySelector('small');
  totalScores.className = 'score-length';
  totalScores.innerText = ` Total Number of Users: ${scoreLength}`;
};

// message display for successful adding
// const dispMessage = () => {
//   messageElt.innerText = 'Score added successfully, click "refresh" to display';
//   messageElt.className = 'small'
const message = document.querySelector('.message');
// }

const Scores = (e) => {
  // const name = document.getElementById('name');
  // const score = document.getElementById('score');
  NewApiGame();
  e.preventDefault();
  if (name.value === '' || score.value === '') {
    message.innerText = 'ERROR!! Please add valid user and score';
    message.style.display = 'block';
    message.style.color = 'bisque';
    message.className = 'error';
    setTimeout(() => {
      message.style.display = 'none';
    }, 6000);
  } else {
    message.innerText = 'SUCCESSFULLY ADDED!!, click "refresh" to show';
    message.style.color = 'bisque';
    message.style.display = 'block';
    message.className = 'success';
    setTimeout(() => {
      message.style.display = 'none';
    }, 6000);
  }

  name.value = '';
  score.value = '';
};
getAllScores();

const submitBtn = document.getElementById('submit');
submitBtn.addEventListener('click', Scores);

// event handlers for the refresh button
const refreshBtn = document.getElementById('refresh');
refreshBtn.addEventListener('click', () => {
  // getAllScores();
  window.location.reload();
});