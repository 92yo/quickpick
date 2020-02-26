import React from 'react';
import './Menu.css'

function Menu({setUserGithub}) {

  React.useEffect(()=>{
    const input = document.getElementById('userInput')
document.getElementById('submit').addEventListener('click',()=>{
  setUserGithub(input.value);
})
  })

  return (
    <form>

    <h1>Enter Your GitHub Username</h1>

    <div className="form-group">
        <h3><label>UserName</label></h3>
        <input type="text" id="userInput" className="form-control" placeholder="Username" />
    </div>
    <button type="submit" id="submit" className="btn btn-primary btn-block">Start Game</button>
    </form>
    
  );
}

export default Menu;
