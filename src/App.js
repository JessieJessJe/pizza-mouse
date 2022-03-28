import React, { useState } from 'react';
// import { CSSTransition } from 'react-transition-group';
import Intropage from './Intropage';
import Gamepage from './Gamepage';
import './App.css';


const duration = 300;

function App() {
  const rule = ["Hello little mouse, welcome to the pizza collection squad! You and your friends have been assigned to collect pizzas and bring them to the delivery point.",

  "But take care not to hit your friends! If you hit another mouse you both will get stuck together",
  `You can move around the bottles with arrow keys "↑", "↓", "←", "→", and other objects to signal your position to the other mice.`,
  "Collect as many pizzas as you can in 90 seconds",
  "Ready? Click ENTER and go!" ]

  const [intropage, setIntroPage] = useState(true);
  const [ruleIdx, setRuleIdx] = useState(0);


  const togglePage = ()=>{
    setIntroPage(!intropage)
  }

  const changeRuleIdx = (action)=>{
    setRuleIdx(ruleIdx + action)
  }

  return (
    <div className="App">

      <div className="intro-title-div">
      <h1 className="intro-title" id="h1-4">PIZZA MOUSE</h1>
      </div>

      <div className="intro-title-div">
      <h1 className="intro-title" id="h1-1">PIZZA MOUSE</h1>
      </div>

      <div className="intro-title-div">
      <h1 className="intro-title" id="h1-2">PIZZA MOUSE</h1>
      </div>


      <div className="intro-title-div">
      <h1 className="intro-title" id="h1-3">PIZZA MOUSE</h1>
      </div>


      {
        intropage ?

        <Intropage 
          togglePage = {togglePage} 
          rule = {rule}
          ruleIdx = {ruleIdx}
          changeRuleIdx = {changeRuleIdx}
          resetRuleIdx = {setRuleIdx}
        />

         :
        <Gamepage togglePage = {togglePage}/>
      }
     
    
    </div>
  );
}

export default App;
