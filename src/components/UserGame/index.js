import React from "react";

function UserGame({avatarHP, setAvatarHP }) {
  const [pickColor, setPickColor] = React.useState('red');
  const [streak, setStreak] = React.useState(1);
const colors=['red','green','yellow']
const getRandomInt=(max)=>{
return Math.floor(Math.random()*Math.floor(max))
}
  const pickedColor = (color) => {   
      if(pickColor!==color){setStreak(1);setAvatarHP(avatarHP+10)}
      else{setStreak(streak+1);setAvatarHP(avatarHP-(10*streak))}
    setPickColor(colors[getRandomInt(3)]);
  };


  return (
    <div style={{ backgroundColor: pickColor }}>
      <button style={{ backgroundColor: 'red' }} onClick={()=>pickedColor('red')}>Pick Red</button>
      <button style={{ backgroundColor: 'green' }} onClick={()=>pickedColor('green')}>Pick Green</button>
      <button style={{ backgroundColor: 'yellow' }} onClick={()=>pickedColor('yellow')}>Pick Yellow</button>
    </div>
  );
}

export default UserGame;
