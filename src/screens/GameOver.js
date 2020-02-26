import React from 'react';
import './Menu/Menu.css'

function GameOver({userGithub, setUserGithub, setAvatarHP}) {

    React.useEffect(()=>{
       
    document.getElementById('playAgain').addEventListener('click',()=>{
      setAvatarHP(1000);
    })

    document.getElementById('logout').addEventListener('click',()=>{
        setUserGithub(null);
        setAvatarHP(1000);
      })
      })
  return (
    <form className="Menu">

    <h1>{userGithub}</h1>
    <h1>GameOver</h1>
    <div className="form-group">
    <button id="playAgain" className="btn btn-primary btn-block">Play again</button>
      <button id="logout" className="btn btn-primary btn-block">Logout</button>
    </div>    
    </form>
  );
}

export default GameOver;
