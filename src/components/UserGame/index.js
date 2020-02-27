import React from "react";
import "./userGame.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFire } from "@fortawesome/free-solid-svg-icons";

function UserGame({ avatarHP, setAvatarHP, userHealth, setUserHealth, userScore, setUserScore, pickColor, setPickColor }) {
  const [streak, setStreak] = React.useState(1);


  function Shuffle(arr) {
    for (
      var j, x, i = arr.length;
      i;
      j = parseInt(Math.random() * i), x = arr[--i], arr[i] = arr[j], arr[j] = x
    );
    return arr;
  }
  let colors = ["red", "green", "yellow"];

  const pickedColor = color => {
    if (pickColor !== color) {
      setStreak(1);
      setAvatarHP(avatarHP + 10);
      setUserHealth(userHealth - 1);
      setUserScore(userScore - 100)
    } else {
      setStreak(streak + 1);
      setAvatarHP(avatarHP - 10 * streak);
      setUserScore(userScore + streak * 100);
    }
    colors = Shuffle(colors);
    setPickColor(colors[1]);
  };
  colors = Shuffle(colors);
  return (
    <div>
      <div className="colorBox" style={{ backgroundColor: pickColor }}>
        {streak > 1 ? (
          <h2>
            <center>
              <span>
                Combo X {streak * 10}{" "}
                <FontAwesomeIcon id="fire" icon={faFire} />
              </span>
            </center>
          </h2>
        ) : (
          ""
        )}
        {streak > 5 ? (
          <h3>
            <center>
              <span>
                <FontAwesomeIcon id="fire" icon={faFire} /> Your on fire {" "}
                <FontAwesomeIcon id="fire" icon={faFire} />
              </span>
            </center>
          </h3>
        ) : (
          ""
        )}
      </div>
      <div>
        <button
          style={{ backgroundColor: colors[0] }}
          onClick={() => pickedColor(colors[0])}
        >
          {colors[0]}
        </button>
        <button
          style={{ backgroundColor: colors[1] }}
          onClick={() => pickedColor(colors[1])}
        >
          {colors[1]}
        </button>
        <button
          style={{ backgroundColor: colors[2] }}
          onClick={() => pickedColor(colors[2])}
        >
          {colors[2]}
        </button>
      </div>
    </div>
  );
}

export default UserGame;
