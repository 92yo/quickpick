import React from "react";
import "./Menu.css";

function Menu({ setUserGithub, message, setMessage }) {
  const [toggle, setToggle] = React.useState(false);

  React.useEffect(() => {
    const input = document.getElementById("userInput");
    document.getElementById("submit").addEventListener("click", event => {
      event.preventDefault();
      if (input.value === "") {
        setMessage("Enter a valid GitHub Username");
      } else {
        setMessage(null);
        setUserGithub(input.value);
      }
    });
  });

  return (
    <form>
      <h1>Enter Your GitHub Username</h1>

      <div className="form-group">
        <h3>
          <label>UserName</label>
        </h3>
        <input
          type="text"
          id="userInput"
          className="form-control"
          placeholder="Username"
          onChange={()=>{setMessage(null)}}
        />
        {message ? (
          <h4>
            <font color="red">{message}</font>
          </h4>
        ) : (
          ""
        )}
      </div>
      <button type="submit" id="submit" className="btn btn-primary btn-block">
        Start Game
      </button>
      <button
        className="btn btn-primary btn-block"
        onClick={event => {
          event.preventDefault();
          setToggle(!toggle);
        }}
      >
        Instruction
      </button>
      {toggle ? (
        <div className="instruction">
          <h3>Quick Pick</h3>
          <h4>You have a mission to achieve the ultimate goal</h4>
          <p>
            In this game you will face three colors which you have to pick fast
            depending on the color of the background above it
          </p>
          <li>
            Every correct pick will gain you 100 score and damage the avatar
            100HP
          </li>
          <li>
            Every wrong pick will lose you 100 score and restore the avatar
            100HP
          </li>
          <li>Be fast, you only got 60 seconds to finish the avatar HP!!</li>
          <p>
            Hint: the correct pick will stack on combo that will give you more
            score and better advantage in the game
          </p>
        </div>
      ) : (
        ""
      )}
    </form>
  );
}

export default Menu;
