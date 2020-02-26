import React from "react";

function UserInfo({
  avatarHP,
  userScore,
  setUserScore,
  gameTime,
  setGameTime
}) {
  const [userHealth, setUserHealth] = React.useState(3);

  React.useEffect(() => {
    const gameTimeTimeout = setTimeout(() => {
      setGameTime(gameTime - 1);
    }, 1000);

    return () => clearTimeout(gameTimeTimeout);
  }, [gameTime]);

  return (
    <div>
      <h1>{gameTime}</h1>
    </div>
  );
}

export default UserInfo;
