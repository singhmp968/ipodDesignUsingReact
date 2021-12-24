import React from "react";
import HomeComp from "./HomeComp";
import MusicComp from "./MusicComp";
import GamesComp from './GamesComp';
import SettingComp from "./SettingComp";
class MenuScreen extends React.Component {

render() {
    let MenuVaraibles = ['cover flow','Musicss','games','setting'];
    let activeTItem = 0
    let ActiveAndNotActiveelem = []
    let c = 0;
    let secondHalfScreen='';
    console.log('this props=> values',this.props.mainScreenOrNot)
    c = this.props.motionValues
    for(let i =0;i<MenuVaraibles.length;i++) {
        ActiveAndNotActiveelem.push(c===i ? (<div style={styles.upandDownSelect}> {MenuVaraibles[i]} </div>):
        (<div style={styles.menuTitles}> {MenuVaraibles[i]} </div>)
    
        )}
        console.log('==>',this.props.screenValue)
    if(!this.props.mainScreenOrNot){
    if(this.props.screenValue === 'covers'){  
        secondHalfScreen= <HomeComp />        
    }else if(this.props.screenValue ==='musics'){
        secondHalfScreen= <MusicComp />        

    }else if(this.props.screenValue ==='games'){
        secondHalfScreen=<GamesComp />
    }else if(this.props.screenValue ==='setting'){
        secondHalfScreen = <SettingComp />
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