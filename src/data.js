const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/zcrZhoE8gjebaPktqb4E/scores';

// Fetches data from API
const getData = async () => {
  try {
    const response = await fetch(url); // Fetch data from api endpoints
    const data = await response.json(); // Change the data format to json
    return data;
  } catch (error) {
    return error.message;
  }
};

const refresh = async () => {
  const scoreCon = document.querySelector('.score-box ul');
  const data = await getData();
  const { result } = data;
  result.sort((a, b) => b.score - a.score); // Sort the result array according to score value

  scoreCon.innerHTML = '';

  // for every item, inject an li to the score container
  result.forEach((item) => {
    let liElemtn = '';
    liElemtn = `<li class="score-item"><span class="cols">${item.user}</span> <span class="cols">${item.score}</span></li>`;
    scoreCon.innerHTML += liElemtn;
  });
};

// Send user name adn score to the API
const sendData = async (user, score) => {
  const data = {
    user,
    score,
  };

  try {
    await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
  } catch (error) {
    return error;
  }
  return null;
};

export { refresh, sendData };