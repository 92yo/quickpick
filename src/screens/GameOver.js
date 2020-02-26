import React from 'react';
import './Menu/Menu.css'

function GameOver({setGameOver,userGithub, setUserGithub, setAvatarHP, gameTime,setGameTime,userScore, setUserScore}) {

    React.useEffect(()=>{
      setGameOver(true)
    document.getElementById('playAgain').addEventListener('click',()=>{
      setGameOver(false)
      setAvatarHP(1000);
      setGameTime(60);
      setUserScore(0);
    })

    document.getElementById('logout').addEventListener('click',()=>{
        setGameOver(false)
        setUserGithub(null);
        setAvatarHP(1000);
        setGameTime(60);
        setUserScore(0);
      })
      },[])
      let message = "GAME WON!!!!"
      if(gameTime<=0){
        message = "GAME LOST"
      }
  return (
    <form className="Menu">
      <h1>{userGithub}</h1>
      <h1>{message}</h1>
      <button id="playAgain">Play again</button>
      <button id="logout">Logout</button>

       </form>
  );
}

export default GameOver;
