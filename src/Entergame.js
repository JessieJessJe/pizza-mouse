import React, { useState, useEffect } from 'react';

function Entergame({togglePage }) {


  const [enter, setEnter] = useState(true);

  const animateEnter = () =>{
    setTimeout( ()=>{
      setEnter( ()=>{
        return enter ? false : true
      })
    }, 500)
  }

  useEffect(() => {

    animateEnter();

  }, [enter]);

  return (
    <div className="intropage-div" id="intropage-right">
      

    {enter ?

          <div className="clickable" id="intropage-right-btn" onClick={togglePage}>
           <div className="intropage-enter" id="enter-4">  ENTER </div> 
           <div className="intropage-enter" id="enter-1">  ENTER </div> 
           <div className="intropage-enter" id="enter-2">  ENTER </div> 
           <div className="intropage-enter" id="enter-3">  ENTER </div> 
          
          </div>
    :

    <div className="clickable" id="intropage-right-btn" onClick={togglePage}>
        <div className="intropage-enter" id="enter-4">  ENTER </div> 
        <div className="intropage-enter" id="enter-1">  ENTER </div> 
        <div className="intropage-enter" id="enter-5">  ENTER </div> 
        <div className="intropage-enter" id="enter-3">  ENTER </div> 
   
    </div>
    
  }

      
     
    
    </div>
  );
}

export default Entergame;