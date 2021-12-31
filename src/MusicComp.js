import React from "react";
import ArtistComp from "./musicSubComponent/Artist"
import AllSongComp from "./musicSubComponent/All_Songs";
import AlbumComp from "./musicSubComponent/Album";
// this componenet is responsible for handling the upward and downward movent of the zingo element in the meno of  Music comp 
class MusicComp extends React.Component {
    constructor() {
        super();
    }
    render() {
    let Musicecate = ['All Songs','Artist','Album']; //list of items need to be dispalyed
    let activeTItem = 0
    let ActiveAndNotActiveelem = []
    let c = 0;
    let headertex = '';
    //let j=0;
    c = this.props.menuOrNotProp.motionValues
    let Screenvomp='';

    for(let i =0;i<Musicecate.length;i++) { // applying the same logic here of activ and for inactive
        ActiveAndNotActiveelem.push(c===i ? (<div style={styles.upandDownSelect}> {Musicecate[i]} </div>):
        (<div style={styles.menuTitles}> {Musicecate[i]} </div>)
    
        )}      

   if(this.props.menuOrNotProp.musicScreen){ // if the music screen and the we select any of the comp and it will render
        if(this.props.menuOrNotProp.screenValue === 'Artist'){  
            Screenvomp= <ArtistComp />        
         }else if(this.props.menuOrNotProp.screenValue ==='All Songs'){
            Screenvomp= <AllSongComp />        
            
        }else if(this.props.menuOrNotProp.screenValue ==='Album'){
            Screenvomp= <AlbumComp />        
        
        }
        else{
            Screenvomp = ActiveAndNotActiveelem
        }
    }

    // for displaying the heading 
    if(this.props.menuOrNotProp.screenValue === 'musics'){
        headertex = 'Music'
    }else if(this.props.menuOrNotProp.screenValue ==='Artist'){
        headertex = 'Artist'
    }else if(this.props.menuOrNotProp.screenValue ==='All Songs'){
        headertex = 'All Songs'
    }
    else if(this.props.menuOrNotProp.screenValue ==='Album'){
        headertex = 'Album'
    }
    return(
        <div style={styles.coverthebox}>
           
            <p>{headertex}</p>

        <div style={styles.display_box} >
        {
        //    ActiveAndNotActiveelem  
       Screenvomp
        }
            </div>
        </div>
    )};
}
    const styles = {
        coverthebox:{
            backgroundColor: 'bisque',
            height:'129px',
            position: 'relative',
            top: '-13%',
            width: '140px'  
        },
        display_box:{
            // border:'1px solid black',
            width: '86px',
            position: 'absolute',
            top: '24%'
        },
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
            border:'1px solid black',
            backgroundColor:'white'
        },
        upandDownSelect : {
            height:'29px',
            width:'80px',
            border:'1px solid black',
            backgroundColor: 'royalblue'
        },
        otherHalfScree: {
            height:'95px',
            width: '100px'
        }
    }


export default MusicComp;