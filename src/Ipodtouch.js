import React from 'react';
//import ZingTouch from 'zingtouch';


class Ipodtouchcomp extends React.Component {
    constructor() {
        super();
    }

    render() {
        //console.log(this.props.zingo)
        return(
            <div className="main-box">
                <div id='circle-boxx' className='circle-box' onMouseOver={()=> this.props.zingo()}>
                    <div className="forward-button">

                    </div>
                    <div className='backward-button'>

                    </div>
                    <div className="top-button" onClick = {()=> this.props.onMenu()}>

                    </div>
                    <div className="bottom-button">

                    </div>
                    <div className="inner-circle" onClick = {()=> this.props.selectItem()} >

                    </div>
                </div>
              sdasda
            </div>
        )
    }
}
export default Ipodtouchcomp;