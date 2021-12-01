import React from 'react';
//import ZingTouch from 'zingtouch';


class Ipodtouchcomp extends React.Component {
    constructor() {
        super();
    }

    // circlwheel = ()=>{
    //     // for getting the wheel from zingtouch
    //     // var myElement = document.getElementById('circle-boxx');
    //     // var myRegion = new ZingTouch.Region(myElement);
      
    //     // myRegion.bind(myElement, 'rotate', function(e) {
    //     //     console.log('Tap gesture emitted: ' + e.detail.distanceFromLast);
    //     // });
    //     // //console.log('hey man')
    // }
    render() {
        //console.log(this.props.zingo)
        return(
            <div className="main-box">
                <div id='circle-boxx' className='circle-box' onMouseOver={()=> this.props.zingo()}>
                    <div className="forward-button">

                    </div>
                    <div className='backward-button'>

                    </div>
                    <div className="top-button">

                    </div>
                    <div className="bottom-button">

                    </div>
                    <div className="inner-circle" >

                    </div>
                </div>
            sdasda
            </div>
        )
    }
}
export default Ipodtouchcomp;