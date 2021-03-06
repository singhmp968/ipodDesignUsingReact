import React from "react";
import HomeComp from "./HomeComp";
import MusicComp from "./MusicComp";
import GamesComp from './GamesComp';
import SettingComp from "./SettingComp";
//**** this componet]nt os for main menu compoenent here 1 screen displau */
class MenuScreen extends React.Component {

render() {
    const propsValue = this.props;
    let MenuVaraibles = ['cover flow','Musicss','games','setting']; //this is option that will be on main menu part and  pre assigning the components alue and will check every time 
    let activeTItem = 0
    let ActiveAndNotActiveelem = []
    let c = 0;
    let secondHalfScreen='';
    c = this.props.motionValues
    for(let i =0;i<MenuVaraibles.length;i++) { // loopint to Meny=uvarialbles
        // checking the active and inactive elemnts here and assigning the actie and unactive accordingly
        ActiveAndNotActiveelem.push(c===i ? (<div style={styles.upandDownSelect}> {MenuVaraibles[i]} </div>):
        (<div style={styles.menuTitles}> {MenuVaraibles[i]} </div>)
    
        )}
    if(!this.props.mainScreenOrNot){ // if we are not in the mainScreen the this below component should execute
    if(this.props.screenValue === 'covers'){  
        secondHalfScreen= <HomeComp />        
    }else if(this.props.screenValue ==='musics'){
        secondHalfScreen= <MusicComp menuOrNotProp = {propsValue} />     // here we are passing all Menus items  and if we are in Music comp we are usig it 
 
    }else if(this.props.screenValue ==='games'){
        secondHalfScreen=<GamesComp />
    }else if(this.props.screenValue ==='setting'){
        secondHalfScreen = <SettingComp />
    }
    //for passing the value to musc comp
    else if(this.props.screenValue==='Artist' || this.props.screenValue==='All Songs' || this.props.screenValue==='Album'){ //  // here we are checking if screenalue is of MusicComponents so we have to check  and pop up music com and initiate the rotation for Mune in the music comp if we are in Music componenet the that time value of 1 is
        secondHalfScreen= <MusicComp menuOrNotProp = {propsValue} />        

    }
    }else{
        secondHalfScreen = ActiveAndNotActiveelem
    }

    return (
    <div style={styles.main_div_box}>
        
    <div style={styles.mainScreenBox}> 
        <div>
            {secondHalfScreen
            }
       </div>
      
    </div>

    <div style={styles.div_withBack}>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIxfxWto-h2pnnir1T7EcF4lLz6p0u6u3EtA&usqp=CAU" style={styles.backImage}/>
    </div>
    </div>
    )};

}

const styles = {

    main_div_box :{
        backgroundColor: 'aliceblue',
         width: '140px',
         display:'flex',
         flexDirection:'row',
         height:'128px',
         position: 'absolute',
         left: '6%',
         marginTop: '11px',
        // border: '1px solid black'
    },
    mainScreenBox : {
        display:'flex',
        flexDirection:'row',
        height: 'auto',
        width:'85px',
        //border:'1px solid black',
        marginBottom :'10px'
        
    },
    div_withBack:{
        width:'56px',
        height:'128px',
        backgroundColor:'blue'
    },
    backImage :{
        height:'100%',
        width:'100%'   
    },
    menuTitles : {
        height:'30px',
        width:'85px',
        border:'1px solid black'
    },
    upandDownSelect : {
        height:'30px',
        width:'85px',
        border:'1px solid black',
        backgroundColor: 'cadetblue'
    },
    otherHalfScree: {
        height:'95px',
        width: '100px'
    }

}
export default MenuScreen;