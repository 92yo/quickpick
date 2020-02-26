import React from "react";

function UserInfo({gameOver,avatarHP,userScore,setUserScore, gameTime,setGameTime}) {
    
    const [userHealth,setUserHealth] = React.useState(3);
    
    React.useEffect(()=>{
        if(gameTime !== 0 || avatarHP >= 0 ) {
            console.log(gameTime)
             setTimeout(()=>{
                setGameTime(gameTime-1)
            },1000)
        }

        if(gameOver) {
            console.log('hello')
            return () => setGameTime(0)
        }
        
    },[gameTime, gameOver])

  return (
    <div >
      <h1>{gameTime}</h1>
    </div>
  );
}

export default UserInfo;
