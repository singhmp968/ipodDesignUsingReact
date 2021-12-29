import React from "react";
const GamesComp =()=> {
    //console.log(props)
    return(
        <div style={styles.coverthebox}>
                       <img style={styles.imageStyle} src="https://st4.depositphotos.com/1028436/22211/i/600/depositphotos_222117870-stock-photo-dice-black-background-illustration.jpg" />

        </div>
    )}
    const styles = {
        coverthebox:{
            backgroundColor: 'white',
            height:'129px',
            position: 'relative',
            top: '0%',
            width: '140px'  
        },
        imageStyle:{
            height:'100%',
            width:'100%'
        }
    
    }
export default GamesComp;