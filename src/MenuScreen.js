import React from "react";

class MenuScreen extends React.Component {

render() {
    let MenuVaraibles = ['cover flow','Musicss','games'];
    let ActiveAndNotActiveelem = []

    return (
    <div style={styles.mainScreenBox}> 
       { MenuVaraibles.map((prod) =>{
           return <div  style={styles.menuTitles}> {prod} </div>
         
        }) }
    </div>
    )};

}

const styles = {
    mainScreenBox : {
        height:'95px',
        width:'100px',
        border:'1px solid black',
        marginBottom :'10px'
        
    },
    menuTitles : {
        height:'30px',
        width:'100px',
        border:'1px solid black'
    },
    upandDownSelect : {
    backgroundColor: 'cadetblue'
    }

}
export default MenuScreen;