import React from "react";
import { getUserData } from "../../utils/GetUserGH";
import "./mainGame.css";
function MainGame({ userGithub, avatarHP }) {
  const [githubProfile, setGithubProfile] = React.useState(null);

  React.useEffect(() => {
    getUserData(userGithub).then(data => setGithubProfile(data));
  });
  
  if (!githubProfile) {
    return (
      <div class="d-flex justify-content-center">
      <div class="spinner-border text-primary" role="status">
        <span class="sr-only">Loading...</span>
      </div>
      </div>
    );
  }
  return (
    <div>
      <div className="healthBar">
        <label>
          {userGithub} HP: <span id="health">{avatarHP}</span>
        </label>
      </div>
      <img src={githubProfile.avatar_url} alt="userImage" />
    </div>
  );
}

export default MainGame;
