import React from 'react';
import './style.css';
import React, { useState, useEffect } from 'react';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import Home from './Home';


let userdetails=[
  {
    username="sam",
    password="1234",
    },
    {
      username="sai",
      password="5678",
    },
    {
      username="justin",
      password="1357",
    },
];



export default function App() {
  
  let[islogin,setlogin]=useState(false)
    
  useEffect(()=>{
if(localStorage.getItem('Login')){
  setlogin(true)
}
  }, []);



  function Loginpage(){
    return (
      <div id="loginbox">
            <h1>User Login</h1>
          <div id="inputs">  
              <input type="text" id="uninput" placeholder="User Name"></input>
              <input type="password" id="pwinput" placeholder="Password"></input>
              <button id="loginbtn" onclick={authentication}>Login</button>
          </div>
          <div id="showfailed"></div>
       </div>
    );
  }
  
function Homepage(){
  return(
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<App/>}/>
      </Routes>
    </div>
  );
}


  function authentication(){
   let uninput=document.getElementById("uninput").value
   let pwinput=document.getElementById("pwinput").value

   let tempinput=userdetails.findIndex(
     (element) => element['username']==uninput
   );
   if(tempinput>-1){
     if(userdetails[tempinput]['username']===uninput&&
     userdetails[tempinput]['password']=== pwinput
     )
     {
       localStorage.setItem('Login',true);
       setlogin(true)
     }
     else{
         document.getElementById("showfailed").innerHTML=`<span>Ivalid Password!</span>`;
     }
    }
  else{
    document.getElementById("showfailed").innerHTML=`<span>Invalid Username!</span>`;
  }

  }  
  return(
    <>
    {islogin?Homepage():Loginpage()}
    </>
  );

}

