import React from 'react';
import './Menu.css'

function Menu({setUserGithub}) {

  React.useEffect(()=>{
    const input = document.getElementById('userInput')
document.getElementById('submit').addEventListener('click',()=>{
  setUserGithub(input.value);
})
  },[])

  return (
    <form className="Menu">
      <h1>Enter your github username</h1>
      <label>username: <input id="userInput"></input></label>
      <button id="submit">Start</button>

       </form>
  );
}

export default Menu;
