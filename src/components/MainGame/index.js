import React from "react";
import { getUserData } from "../../utils/GetUserGH";
import "./mainGame.css";
function MainGame({ userGithub,setUserGithub, avatarHP ,pickColor,gameTime,setGameTime,setAvatarHP,setUserScore,setMessage}) {
  const [githubProfile, setGithubProfile] = React.useState(null);


  React.useEffect(() => {
    getUserData(userGithub).then(data => setGithubProfile(data));
  });
  const loadingToMush=()=>{
    if(gameTime<=55){
    setUserGithub(null)
    setGameTime(60)
    setAvatarHP(1000)
    setUserScore(0)
    setMessage('Invalid github username please Enter another')
    }
  }
  if (!githubProfile) {
    return (
      <div class="d-flex justify-content-center">
      <div class="spinner-border text-primary" role="status">
        <span class="sr-only">Loading...</span>
        {loadingToMush()}
      </div>
      </div>
    );
  }
  return (
    <div className="avatarDiv"  >
      <div className="healthBar">
        <label>
          {userGithub} HP: <span id="health">{avatarHP}</span>
        </label>
      </div>
      <div style={{ backgroundColor: pickColor }}>
      <img src={githubProfile.avatar_url} alt="userImage" />
      </div>
    </div>
  );
}

export default MainGame;
