import React from "react";

const AllSongComp =()=> {
    return(
        <div style={styles.coverthebox}>
            {/* <p>@ All Songs Comp componenet</p> */}
            <img style={styles.imgstyle} src="https://www.macworld.co.uk/cmsdata/features/3676858/how-to-stop-tracks-repeating-on-iphone-main_thumb1200_4-3.jpg" />
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
        },
        imgstyle:{
            height:'100%',
            width:'100%'
        }
    }

export default AllSongComp;