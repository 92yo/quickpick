import React from 'react';
import Menu from './screens/Menu/Menu';
import Game from './screens/Game';
function App() {
  const [userGithub,setUserGithub] = React.useState(null)
  if(userGithub===null){
    return (
      <div>
      <Menu setUserGithub={setUserGithub}/>
      </div>
    );
  }
  return (
    <div>
    <Game userGithub={userGithub}/>
    </div>
  );
}

export default App;
