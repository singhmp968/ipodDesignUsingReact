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
    console.log('this props=> values',this.props)
    c = this.props.motionValues
    console.log('c value',c)
    for(let i =0;i<MenuVaraibles.length;i++) {
        ActiveAndNotActiveelem.push(c===i ? (<div style={styles.upandDownSelect}> {MenuVaraibles[i]} </div>):
        (<div style={styles.menuTitles}> {MenuVaraibles[i]} </div>)
    
        )}
        console.log('==>',this.props.screenValue)
    if(this.props.screenValue === 'covers'){  
        secondHalfScreen= <HomeComp />        
    }else if(this.props.screenValue ==='musics'){
        secondHalfScreen= <MusicComp />        

    }else if(this.props.screenValue ==='games'){
        secondHalfScreen=<GamesComp />
    }else if(this.props.screenValue ==='setting'){
        secondHalfScreen = <SettingComp />
    }


    return (
    <div style={styles.mainScreenBox}> 
        <div>
            {ActiveAndNotActiveelem}
       </div>
        <div style = {styles.otherHalfScree}>
               {secondHalfScreen} 
    
        </div>
    </div>
    )};

}

const styles = {
    mainScreenBox : {
        display:'flex',
        flexDirection:'row',
        height: 'auto',
        width:'200px',
        border:'1px solid black',
        marginBottom :'10px'
        
    },
    menuTitles : {
        height:'30px',
        width:'100px',
        border:'1px solid black'
    },
    upandDownSelect : {
        height:'30px',
        width:'100px',
        border:'1px solid black',
        backgroundColor: 'cadetblue'
    },
    otherHalfScree: {
        height:'95px',
        width: '100px'
    }

}
export default MenuScreen;