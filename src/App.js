
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
      mainScreenOrNot: true,
      ScreenDisplay:'',
      musicScreen:false
    }
    this.currentAngle=0;
  }
  
  zingoComponentTest = () =>{
    let pthis = this;
    let myElement = document.getElementById('circle-boxx');
    let myRegion = new ZingTouch.Region(myElement);
    let MotionupOrdown = pthis.state.Motion
 
  myRegion.bind(myElement, 'rotate', function(e) {    
      if(e.detail.distanceFromLast>=0) {
        if(MotionupOrdown <4){
          MotionupOrdown = MotionupOrdown+1;
          pthis.setState({
          Motion:MotionupOrdown
          })
        }else if(MotionupOrdown === 4) {
          MotionupOrdown = 0;
          pthis.setState({
            Motion:MotionupOrdown
          })
        }

      }else{ 
        if(e.detail.distanceFromLast<0){
          if( MotionupOrdown>0 && MotionupOrdown<4 ){
            MotionupOrdown = MotionupOrdown-1;
            pthis.setState({
              Motion:MotionupOrdown
              })
          }else if(MotionupOrdown <=0){
            MotionupOrdown = 3;
            pthis.setState({
              Motion:MotionupOrdown
              })
          }
        }
      }
  });

}


// click on the circulra box
displayScreens =()=>{
  const motionValue = this.state.Motion;
  this.setState({
    mainScreenOrNot:false,
    
  })
  if(motionValue === 0){
    if(this.state.musicScreen == false){
     this.setState({
      ScreenDisplay:'covers',
      musicScreen:false
     })
    }else{
      this.setState({
        ScreenDisplay :'All Songs'
       })
    }
  }else if(motionValue === 1){
    if(this.state.musicScreen == false){
    this.setState({
      ScreenDisplay:'musics',
      mainScreenOrNot:false,
      musicScreen:true

     })}
     else{
       this.setState({
        ScreenDisplay :'Artist'
       })
     }
  }else if(motionValue===2) {
    if(this.state.musicScreen == false){
    this.setState({
      ScreenDisplay:'games',
      musicScreen:false
     })}else{
       this.setState({
        ScreenDisplay :'Album'
       })
     }
  } else if(motionValue===3){
    if(this.state.musicScreen == false){
    this.setState({
      ScreenDisplay:'setting',
      musicScreen:false
      
     })}else{
 //SAS
    }
  }
}

onMenu = ()=>{
  this.setState({
    mainScreenOrNot:true,
    musicScreen:false
  
  })
}
render() {

  return (
    <div className="App">
        <h1>Mini project</h1>
        <div className='menu_and_touch'>
        <MenuScreen motionValues = {this.state.Motion} screenValue = { this.state.ScreenDisplay } mainScreenOrNot = {this.state.mainScreenOrNot} musicScreen={this.state.musicScreen} />
        <Ipodtouch zingo = {this.zingoComponentTest} selectItem = {this.displayScreens}  onMenu = {this.onMenu}/>
      </div>
    </div>

  );
}
}

export default App;
