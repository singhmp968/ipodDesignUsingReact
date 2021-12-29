import React from "react";
const SettingComp =()=> {
    //console.log(props)
    return(
        <div style={styles.coverthebox}>
            {/* <p>@ Setting componenet</p> */}
            <img style={styles.imageStyle} src="https://thumbs.dreamstime.com/b/settings-icon-abstract-blue-background-illustration-design-isolated-167299836.jpg" />
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
export default SettingComp;