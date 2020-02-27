import React from "react";
import "./userInfo.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

function UserInfo({
  avatarHP,
  userScore,
  setUserScore,
  gameTime,
  setGameTime,
  userHealth,
  setUserHealth
}) {
  React.useEffect(() => {
    const gameTimeTimeout = setTimeout(() => {
      setGameTime(gameTime - 1);
    }, 1000);

    return () => clearTimeout(gameTimeTimeout);
  },[gameTime]);

  return (
    <div className="userInfo">
      <div id="heart">
        {userHealth > 0
          ? Array(userHealth)
              .join(" ")
              .split(" ")
              .map(() => <FontAwesomeIcon icon={faHeart} />)
          : " "}
      </div>
      <h1>{gameTime}</h1>
      <div className="score">
        <span>
          {" "}
          <h3>{userScore}</h3>
        </span>
      </div>
    </div>
  );
}

export default UserInfo;
