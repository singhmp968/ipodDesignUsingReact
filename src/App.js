
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
      Motion:0,
      ScreenDisplay:''
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
          console.log('Motion valuesss',pthis.state.Motion);
      if(e.detail.distanceFromLast>=0) {
        console.log('clockwise motion i.e downward')
        if(MotionupOrdown <4){
          MotionupOrdown = MotionupOrdown+1;
          console.log('motion value',MotionupOrdown);
          pthis.setState({
          Motion:MotionupOrdown
          })
        }else if(MotionupOrdown === 4) {
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


// click on the circulra box
displayScreens =()=>{
  const motionValue = this.state.Motion;
  console.log('hey man!!',motionValue);
  if(motionValue === 0){
     console.log('Cover fole',this.state);
     this.setState({
      ScreenDisplay:'covers'
     })
  }else if(motionValue === 1){
    console.log('Music',this.state);
    this.setState({
      ScreenDisplay:'musics'
     })
  }else if(motionValue===2) {
    console.log('games',this.state);
    this.setState({
      ScreenDisplay:'games'
     })
  } else if(motionValue===3){
    console.log('setting',this.state);
    this.setState({
      ScreenDisplay:'setting'
     })
  }
}
render() {

  return (
    <div className="App">
        <h1>Mini project</h1>
        <MenuScreen motionValues = {this.state.Motion} screenValue = { this.state.ScreenDisplay }/>
        <Ipodtouch zingo = {this.zingoComponentTest} selectItem = {this.displayScreens} />
    </div>
  );
}
}

export default App;
