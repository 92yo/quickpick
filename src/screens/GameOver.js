import React from "react";
import "./Menu/Menu.css";

function GameOver({
    setGameOver,
    userGithub,
    setUserGithub,
    setAvatarHP,
    gameTime,
    setGameTime,
    userScore,
    setUserScore,
    userHealth,
    setUserHealth
}) {

  React.useEffect(() => {
    document.getElementById("playAgain").addEventListener("click", () => {
      setAvatarHP(1000);
      setGameTime(60);
      setUserScore(0);
      setUserHealth(3);
    });

    document.getElementById("logout").addEventListener("click", () => {
      setUserGithub(null);
      setAvatarHP(1000);
      setGameTime(60);
      setUserScore(0);
      setUserHealth(3);
    });
  });

    let message = "GAME WON!!!!";
    if (gameTime <= 0 || userHealth <= 0) {
        message = "GAME LOST";
    }
    return (
        <form className="Menu">
            <h1>{userGithub}</h1>
            <h1>{message}</h1>
            <h2>Your score is: {userScore}</h2>
            <h3>Your Time: {60 - gameTime} seconds</h3>
            <div className="form-group">
                <button id="playAgain" className="btn btn-primary btn-block">
                    Play again
        </button>
                <button id="logout" className="btn btn-primary btn-block">
                    Logout
        </button>
            </div>
        </form>
    );
}

export default GameOver;
