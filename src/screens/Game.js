import React from "react";
import MainGame from "../components/MainGame";
import UserGame from "../components/UserGame";
import UserInfo from "../components/UserInfo";
import './gameStyle.css'
function Game(props) {
  const [pickColor, setPickColor] = React.useState("red");

  return (
    <div className="gameContainer">
      <UserInfo {...props} />
      <MainGame {...props} pickColor={pickColor}/>
      <UserGame {...props} pickColor={pickColor} setPickColor={setPickColor}/>
    </div>
  );
}

export default Game;
