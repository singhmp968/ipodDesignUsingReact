import React from "react";

const AlbumComp =()=> {
    //console.log(props)
    return(
        <div style={styles.coverthebox}>
            <p>@ Album componenet</p>
        </div>
    )}
    const styles = {
        coverthebox:{
            backgroundColor: 'white',
            height:'94px',
            position: 'relative',
            top: '-13%',
            width: '137px' ,
        border: '1px solid green'
        }
    }
export default AlbumComp;