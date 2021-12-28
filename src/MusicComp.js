import React from "react";
const MusicComp =(props)=> { //passing props at the runtime
    //console.log(props)
    let Musicecate = ['All Songs','Artist','Album'];
    let activeTItem = 0
    let ActiveAndNotActiveelem = []
    let c = 0;
    // for(let i =0;i<Musicecate.length;i++) {
    //     ActiveAndNotActiveelem.push(c===i ? (<div style={styles.upandDownSelect}> {Musicecate[i]} </div>):
    //     (<div style={styles.menuTitles}> {Musicecate[i]} </div>)
    
    //     )}
    console.log('insode new music comeponent',props);
    return(
        <div style={styles.coverthebox}>
            <p>@ Music</p>

        {
            Musicecate.map((item)=>{
             return <div style={styles.upandDownSelect} >{item}</div>
            })
        }
            
        </div>
    )}
    const styles = {
        coverthebox:{
            backgroundColor: 'white',
            height:'129px',
            position: 'relative',
            top: '-13%',
            width: '140px'  
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
            border:'1px solid black'
        },
        upandDownSelect : {
            height:'29px',
            width:'80px',
            border:'1px solid black',
            backgroundColor: 'cadetblue'
        },
        otherHalfScree: {
            height:'95px',
            width: '100px'
        }
    }



export default MusicComp;