import React from "react";
import MainGame from "../components/MainGame";
import UserGame from "../components/UserGame";
import UserInfo from "../components/UserInfo";

function Game(props) {
  const [pickColor, setPickColor] = React.useState("red");

  return (
    <div>
      <UserInfo {...props} />
      <MainGame {...props} pickColor={pickColor}/>
      <UserGame {...props} pickColor={pickColor} setPickColor={setPickColor}/>
    </div>
  );
}

export default Game;
