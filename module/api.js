//function for getting result when a new game is added from the same ID
const GetScores = async () => {
  const getResult = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/owQWvuBZRBl6oZNoQKqG/scores/').then((res) => res.json());
  return getResult;
};

// function for generating a new game from the input through a game ID
const NewApiGame = async () => {
  const name = document.getElementById('name');
  const score = document.getElementById('score');

  await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/owQWvuBZRBl6oZNoQKqG/scores/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
    },
    body: JSON.stringify({
      user: name.value,
      score: score.value,
    }),
  });
};

export { NewApiGame, GetScores };