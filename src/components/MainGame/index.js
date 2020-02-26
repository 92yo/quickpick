import React from 'react';
import {getUserData} from '../../utils/GetUserGH'
import "./mainGame.css"
function MainGame({userGithub,avatarHP}) {
    const [githubProfile,setGithubProfile] = React.useState(null)

  React.useEffect(()=>{
    getUserData(userGithub).then(data => setGithubProfile(data));
  })

  if (!githubProfile) {
    return <h3>...Loading</h3>;
  }
  return (
  <div>
    <div className="healthBar"><label>{userGithub} HP: <span id="health">{avatarHP}</span></label></div>
      <img src={githubProfile.avatar_url} alt="userImage" />
  </div>
  );
}

export default MainGame;
