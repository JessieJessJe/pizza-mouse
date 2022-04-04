import React, { useState, useEffect } from 'react';
import Chatboard from './Chatboard';
import Entergame from './Entergame';


import hat0 from './assets/mouse_hat_A0.png';
import hat1 from './assets/mouse_hat_A1.png';
import hair0 from './assets/mouse_hair_A0.png';
import hair1 from './assets/mouse_hair_A1.png';

let mouse_1 = [];
mouse_1[0] = hat0;
mouse_1[1] = hat1;





let mouse_2 = [];
mouse_2[0] = hair0;
mouse_2[1] = hair1;

// import mouse_1 from './assets/mouse_1.png';
// import mouse_2 from './assets/mouse_2.png';

function Intropage({togglePage, rule, ruleIdx, changeRuleIdx, resetRuleIdx }) {


  const [imgIdx, setImgIdx] = useState(0);

  const animateImg = () =>{
    setTimeout( ()=>{
      setImgIdx( ()=>{
        return imgIdx === 0 ? 1 : 0
      })
    }, 500)
  }

  useEffect(() => {

    animateImg.apply();

  }, [imgIdx]);

  

  return (

    <React.Fragment>
    <div className="intropage">
      <Entergame togglePage={togglePage}/>
      
      <div className="intropage-div" id="intropage-left">
        <Chatboard 
        
        rule = {rule}
        ruleIdx = {ruleIdx}
        changeRuleIdx = {changeRuleIdx}
        resetRuleIdx = {resetRuleIdx}

        />
        <div className='intropage-mice'>

        <img id="intropage-mouse-1" className='intropage-mouse' src={mouse_1[imgIdx]} alt="" width="100" />
        <img id="intropage-mouse-2" className='intropage-mouse' src={mouse_2[imgIdx]} alt="" width="100"/>
      
        </div>
      </div>

  
    </div>

    </React.Fragment>
  );
}

export default Intropage;