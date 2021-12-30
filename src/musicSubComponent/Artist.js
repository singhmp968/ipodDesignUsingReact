import React from "react";

const ArtistComp =()=> {
    //console.log(props)
    return(
        <div style={styles.coverthebox}>
            {/* <p>@ ArtistComp componenet</p> */}
            <img style={styles.imgStyle} src="https://img.etimg.com/thumb/width-640,height-480,imgsize-293228,resizemode-1,msid-61008250/magazines/panache/gaana-on-song-new-initiative-originals-clocks-20-mn-streaming-in-five-weeks/gaana-originals.jpg" />
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


            //background-color: white;
//     height: 94px;
//     top: -10%;
//     width: 137px;
//     border: 1px solid green;
// }
        },
        imgStyle:{
            height:'100%',
            width:'100%'
        }
    }
export default ArtistComp;