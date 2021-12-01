
import { render } from '@testing-library/react';
import './App.css';
import Ipodtouch from './Ipodtouch';
import MenuScreen from './MenuScreen'
import React from "react";
import ZingTouch from 'zingtouch';

class App extends React.Component {

  constructor() {
    super()
    this.state = {
      Motion:0
    }
    this.currentAngle=0;
  }
  zingoComponentTest = () =>{
    console.log('upper this',this.state.Motion)
   let pthis = this;
    let myElement = document.getElementById('circle-boxx');
  //console.log('tmj',myElement)
  let myRegion = new ZingTouch.Region(myElement);
  let MotionupOrdown = pthis.state.Motion
 
  myRegion.bind(myElement, 'rotate', function(e) {
     // console.log('Tap gesture emitted: ' + e.detail.distanceFromLast);
      //console.log('Tap gesture emitted: ' + Math.round(e.detail.angle));
          console.log('Motion valuesss',pthis.state.Motion);
      if(e.detail.distanceFromLast>=0) {
        console.log('clockwise motion i.e downward')
        if(MotionupOrdown <4){
          MotionupOrdown = MotionupOrdown+1;
          console.log('motion value',MotionupOrdown);
          pthis.setState({
            Motion:MotionupOrdown
          })
        }else if(MotionupOrdown == 4) {
          MotionupOrdown = 0;
          console.log('motion value',MotionupOrdown);
          pthis.setState({
            Motion:MotionupOrdown
          })
        }

      }else{ 

        // for going upwnward 
        console.log('anti-clockwise motion i.e  upwardward')

      }
  });
  //console.log('hey man')
}
render() {

  return (
    <div className="App">
        <h1>Mini project</h1>
        <MenuScreen />
        <Ipodtouch zingo = {this.zingoComponentTest} />
    </div>
  );
}
}

export default App;
