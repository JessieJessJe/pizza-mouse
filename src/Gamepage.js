import { useEffect } from "react";

function Gamepage({togglePage}) {

    useEffect(()=>{
      function handleKeyDown(e){
        const child = document.getElementById("ifr1");
        child.contentWindow.postMessage(e.keyCode, "*");

      }

      document.addEventListener('keydown', handleKeyDown);

      return ()=>{
        document.removeEventListener("keydown", handleKeyDown);
      }
    }, [])

    useEffect(()=>{
      function handleKeyUp(){
        const child = document.getElementById("ifr1");
        child.contentWindow.postMessage(0, "*");

      }

      document.addEventListener('keyup', handleKeyUp);

      return ()=>{
        document.removeEventListener("keyup", handleKeyUp);
      }
    }, [])

 
 

    return (
      <div id="gamepage">
       
        <div id="gamepage-left"> 
        <button className="clickable" onClick={togglePage}>Back</button>
        <button className="clickable" >Help</button>
        </div>
        <div id="gamepage-middle"> 
        <iframe 
         
          title="game"
          id="ifr1"
          src="https://jessiejessje.github.io/partyMouse/" 
          // src="http://127.0.0.1:5500/colliGame/" 
         frameBorder={0}
          width="800"
          height="600"

          ></iframe>
        
        </div>
       
        <div id="gamepage-right"> 
        <button className="clickable">Sound</button>
        <button className="clickable">About</button>
        
        </div>
       

  
      </div>
    );
  }
  
  export default Gamepage;