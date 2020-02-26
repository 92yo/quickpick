import React from "react";
import MainGame from "../components/MainGame";
import UserGame from "../components/UserGame";
import UserInfo from "../components/UserInfo";

function Game(props) {
  
  return (
    <div>
      <UserInfo {...props} />
      <MainGame {...props} />
      <UserGame {...props} />
    </div>
  );
}

export default Game;
