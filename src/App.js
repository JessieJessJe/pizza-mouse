import React, { useState } from 'react';
// import { CSSTransition } from 'react-transition-group';
import Intropage from './Intropage';
import Gamepage from './Gamepage';
import './App.css';

///////////////

// const CSSTransition =  window.CSSTransition;

const duration = 300;

// const defaultStyle = {
//   transition: `opacity ${duration}ms ease-in-out`,
//   opacity: 0,
// }

// const transitionStyles = {
//   entering: { opacity: 1 },
//   entered:  { opacity: 1 },
//   exiting:  { opacity: 0 },
//   exited:  { opacity: 0 },
// };

// const Fade = ({ in: intropage }) => (
//   <Transition in={intropage} timeout={duration}>
//     {state => (
//       <div style={{
//         ...defaultStyle,
//         ...transitionStyles[state]
//       }}>
//         I'm a fade Transition!
//       </div>
//     )}
//   </Transition>
// );
///////////////

function App() {
  const rule = ["1.You've created a great new game, all polished up and ready to present.",
  "2.Teaching a completely new game to the public is not always easy. It is important to remember that your audience has no idea how any aspect of your game works yet.",
  "3.That's where your set of game rules comes in.",
  "4.Writing game rules can take a bit of time. But it's important to include detailed instructions of the objective, all the pieces, and how the game is played.",
  "go!" ]

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
