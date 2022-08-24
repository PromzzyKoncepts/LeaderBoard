const GetScores = async () => {
  const getResult = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/SJmueH0479ADVeEe5qIN/scores/').then((res) => res.json());
  return getResult;
};

const NewApiGame = async () => {
  const name = document.getElementById('name');
  const score = document.getElementById('score');

  await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/SJmueH0479ADVeEe5qIN/scores/', {
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