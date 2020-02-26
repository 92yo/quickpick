import React from "react";
import Menu from "./screens/Menu/Menu";
import Game from "./screens/Game";
import GameOver from "./screens/GameOver";
function App() {
  const [userGithub, setUserGithub] = React.useState(null);
  const [avatarHP, setAvatarHP] = React.useState(1000);
  const [userScore, setUserScore] = React.useState(0);
  const [gameTime, setGameTime] = React.useState(60);
  const [gameOver, setGameOver] = React.useState(false);

  if (userGithub === null) {
    return (
      <div>
        <Menu setUserGithub={setUserGithub} />
      </div>
    );
  } else if (avatarHP <= 0 || gameTime <= 0) {
    return (
      <div>
        <GameOver
          userGithub={userGithub}
          setUserGithub={setUserGithub}
          setAvatarHP={setAvatarHP}
          gameTime={gameTime}
          setGameTime={setGameTime}
          userScore={userScore}
          setUserScore={setUserScore}
          setGameOver={setGameOver}
        />
      </div>
    );
  }
  return (
    <div>
      <Game
        userGithub={userGithub}
        avatarHP={avatarHP}
        setAvatarHP={setAvatarHP}
        userScore={userScore}
        setUserScore={setUserScore}
        gameTime={gameTime}
        setGameTime={setGameTime}
        gameOver={gameOver}
      />
    </div>
  );
}

export default App;
