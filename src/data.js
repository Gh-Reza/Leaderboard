const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/zcrZhoE8gjebaPktqb4E/scores';

const getData = async () => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    return error.message;
  }
};

const refresh = async () => {
  const scoreCon = document.querySelector('.score-box ul');
  const data = await getData();

  const { result } = data;
  console.log(result.sort());
  console.log(typeof result);

  scoreCon.innerHTML = '';
  result.forEach((item, index) => {
    let liElemtn = '';
    if (index % 2 === 0) {
      liElemtn = `<li class="score-item even">${item.user}: ${item.score}</li>`;
    } else {
      liElemtn = `<li class="score-item">${item.user}: ${item.score}</li>`;
    }
    scoreCon.innerHTML += liElemtn;
  });
};

export default refresh;