import React from 'react';
import Menu from './screens/Menu/Menu';
import Game from './screens/Game';
import GameOver from './screens/GameOver';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [userGithub,setUserGithub] = React.useState(null)
  const [avatarHP,setAvatarHP] = React.useState(1000)

  if(userGithub===null){
    return (
      <div>
      <Menu setUserGithub={setUserGithub}/>
      </div>
    );
  } else if(avatarHP<=0) {
    return (
      <div>
      <GameOver userGithub={userGithub} setUserGithub={setUserGithub} setAvatarHP={setAvatarHP} />
      </div>
    );
  }
  return (
    <div>
    <Game userGithub={userGithub} avatarHP={avatarHP} setAvatarHP={setAvatarHP}/>
    </div>
  );
}

export default App;
