import React from 'react';
import MainGame from '../components/MainGame'
import UserGame from '../components/UserGame'

function Game({userGithub,avatarHP,setAvatarHP}) {

  return (
  <div>
     <MainGame userGithub={userGithub} avatarHP={avatarHP}/>
     <UserGame avatarHP={avatarHP} setAvatarHP={setAvatarHP}/>
  </div>
  );
}

export default Game;
