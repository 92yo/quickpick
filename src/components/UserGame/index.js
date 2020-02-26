import React from "react";
import './userGame.css'

function UserGame({avatarHP, setAvatarHP }) {
  const [pickColor, setPickColor] = React.useState('red');
  const [streak, setStreak] = React.useState(1);
  function Shuffle(arr) {
	for(var j, x, i = arr.length; i; j = parseInt(Math.random() * i), x = arr[--i], arr[i] = arr[j], arr[j] = x);
	return arr;
};
let colors=['red','green','yellow']

  const pickedColor = (color) => {   
      if(pickColor!==color){setStreak(1);setAvatarHP(avatarHP+10)}
      else{setStreak(streak+1);setAvatarHP(avatarHP-(10*streak))}
      colors = Shuffle(colors)
      setPickColor(colors[1]);
  };
  colors = Shuffle(colors)
  return (
    <div>
      <div className= "colorBox" style={{ backgroundColor: pickColor }}>
        {streak>1?<span><h2><center>X{streak*10} 🔥</center></h2></span>:""}
        {streak>5?<span><h3><center>🔥🔥Your on fire🔥🔥</center></h3></span>:""}
      </div>
    <div >
      <button style={{ backgroundColor: colors[0] }} onClick={()=>pickedColor(colors[0])}>Pick {colors[0]}</button>
      <button style={{ backgroundColor: colors[1] }} onClick={()=>pickedColor(colors[1])}>Pick {colors[1]}</button>
      <button style={{ backgroundColor: colors[2] }} onClick={()=>pickedColor(colors[2])}>Pick {colors[2]}</button>
    </div>
    </div>
  );
}

export default UserGame;
