import React from "react";

const AlbumComp =()=> {
    //console.log(props)
    return(
        <div style={styles.coverthebox}>
            {/* <p>@ Album componenet</p> */}
            <img style={styles.imgStyle} src="https://i.ytimg.com/vi/jEUbQ2nPHQE/maxresdefault.jpg" />
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
        imgStyle:{
            height:'100%',
            width:'100%'
        }
    }
export default AlbumComp;