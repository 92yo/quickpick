const API_BASE = "https://api.github.com";

const checkResponse = response => {
  if (response.status !== 200) {
    console.log(`Error with the request! ${response.status}`);
    return;
  }
  return response.json();
};

console.log(process.env)
export const getUserData = username => {
  return fetch(`${API_BASE}/users/${username}?access_token=${process.env.REACT_APP_accesstoken}`)
    .then(checkResponse)
    .catch(err => {
      throw new Error(`fetch getUserData failed ${err}`);
    });
};
