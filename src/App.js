// main App components 
import { render } from '@testing-library/react';
import './App.css'; 
import Ipodtouch from './Ipodtouch';
import MenuScreen from './MenuScreen'
import React from "react";
import ZingTouch from 'zingtouch';

class App extends React.Component {

  constructor() {
    // creating the screen
    super()
    this.state = {
      Motion:0,
      mainScreenOrNot: true, //for checking weather we are on main menu or we are inside in the component
      ScreenDisplay:'', // sceeen which need to be displayed
      musicScreen:false //for checking weather we are on main menu or we are inside in the Music Component
    }
    this.currentAngle=0;
  }
  // creating ZingoComponent
  zingoComponentTest = () =>{
    let pthis = this;
    let myElement = document.getElementById('circle-boxx'); // assiging the touch
    let myRegion = new ZingTouch.Region(myElement);
    let MotionupOrdown = pthis.state.Motion
 
  myRegion.bind(myElement, 'rotate', function(e) {    
    // here we this if contition is for upward direction
      if(e.detail.distanceFromLast>=0) { // checking the data for 0 to 4 like  0 == coverflow,1== Musicss,2==games etc
        if(MotionupOrdown <4){
          MotionupOrdown = MotionupOrdown+1;
          pthis.setState({
          Motion:MotionupOrdown
          })
        }
    
        else if(MotionupOrdown === 4) {
          MotionupOrdown = 0;
          pthis.setState({
            Motion:MotionupOrdown
          })
        }

      }
      // here we this if contition is for downward direction
        
      else{ 
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
  // checking if the motionValue is 0,1,23 and asigning the ScreeDispaly value and this value will be pass to MenuScreen and from there it will allocate the component and sub componenet
  if(motionValue === 0){
    if(this.state.musicScreen == false){
     this.setState({
      ScreenDisplay:'covers',
      musicScreen:false
     })
    }else{
      this.setState({
        ScreenDisplay :'All Songs' // if we are in Music componenet the that time value of 0 is All Songs
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
        ScreenDisplay :'Artist' // if we are in Music componenet the that time value of 1 is Artist
       })
     }
  }else if(motionValue===2) {
    if(this.state.musicScreen == false){
    this.setState({
      ScreenDisplay:'games',
      musicScreen:false
     })}else{
       this.setState({
        ScreenDisplay :'Album' // if we are in Music componenet the that time value of 1 is Album
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
// for getting back on the main menu
onMenu = ()=>{
  this.setState({
    mainScreenOrNot:true,
    musicScreen:false
  
  })
}
render() {

// rendering and passingt the MenuScreen <Ipodtouchh />
  return (
    <div className="App">
        <h1>Mini project</h1>
        <div className='menu_and_touch'>
        <MenuScreen motionValues = {this.state.Motion} screenValue = { this.state.ScreenDisplay } mainScreenOrNot = {this.state.mainScreenOrNot} musicScreen={this.state.musicScreen} />
        {/* this Ipodtouch comp will controll the main circular comtroller amd main menu */}
        <Ipodtouch zingo = {this.zingoComponentTest} selectItem = {this.displayScreens}  onMenu = {this.onMenu}/>
      </div>
    </div>

  );
}
}

export default App;
