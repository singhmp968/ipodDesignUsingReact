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
                            <img  class='icon-design' alt='forward'
                                 src='https://cdn-icons-png.flaticon.com/512/660/660276.png'
                            />
                    </div>
                    <div className='backward-button'>
                    <img  class='icon-design'
                     alt='backward'
                     src='https://cdn-icons-png.flaticon.com/512/39/39712.png'
                            />            
                    </div>
                    <div className="top-button" onClick = {()=> this.props.onMenu()}>
                       <a href='#'>Menu</a>
                        
                    </div>
                    <div className="bottom-button">
                   
                    <img  class='icon-design'
                     alt='play and pause'
                     src=' https://cdn-icons.flaticon.com/png/512/647/premium/647801.png?token=exp=1640669601~hmac=4b7d55b3c029346567dfb3f37f850118'
                    />       
                    </div>
                    <div className="inner-circle" onClick = {()=> this.props.selectItem()} >

                    </div>
                </div>
              
            </div>
        )
    }
}
export default Ipodtouchcomp;