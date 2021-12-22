import React from "react";
const HomeComp =()=> {
    //console.log(props)
    return(
        <div style={styles.coverthebox}>
            <p>@ home componenet</p>
        </div>
    )}
    const styles = {
        coverthebox:{
            backgroundColor: 'aqua',
            height:'129px',
            position: 'relative',
            top: '-13%',
            width: '140px'  
        }
    }
export default HomeComp;