
import React, { useState, useEffect } from 'react';
import bubble from './assets/bubble.png';


function Chatboard({rule, ruleIdx, changeRuleIdx, resetRuleIdx}) {
  

    const [convo, setConvo] = useState(rule[0].slice(0,1));

    useEffect(
      ()=>{
        resetRuleIdx(0)
      }, []
    )

    const addConvo = () => {
      let current = convo;
      if (current.length < rule[ruleIdx].length){
        current += rule[ruleIdx].slice(current.length, current.length+1)
        
        setConvo(current)
    }}

    let myTimeout; 

    useEffect(() => {

      setConvo(rule[ruleIdx].slice(0,1))
      clearTimeout(myTimeout)
  
    }, [ruleIdx]);

    useEffect(() => {

      myTimeout = setTimeout( addConvo, 30);
  
    }, [convo]);

    const getBtnClass = (loc) => {
      if (convo.length !== rule[ruleIdx].length) return true;

      if (ruleIdx === 0 && loc === 0) return true;
      if (ruleIdx === rule.length - 1 && loc === rule.length - 1) return true;
      
      return false
   }

    return (
      <div id="chatboard">
         <img id="chatboard-bubble" src={bubble} alt=""/>
      
        <div id="chatboard-left">
        <button className="clickable" disabled={getBtnClass(0)} onClick = {()=>{ if(ruleIdx>0){ changeRuleIdx(-1)}}}>Prev</button>
        
        </div>
        <div id="chatboard-rule"> 
            {convo}    
        </div>

        <div id="chatboard-right"> 
        <button className="clickable" disabled={getBtnClass(rule.length - 1)} onClick = {()=>{ if(ruleIdx<rule.length-1){ changeRuleIdx(1)}}}>Next</button>
        </div>
      </div>
    );
  }
  
  export default Chatboard;