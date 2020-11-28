import React from 'react'

function PreviousManagers(props) {
    return(
        <div className="fade">
            <h3 className="manager-name">{props.name}</h3>
            <div className="photo-tenure-container">
                <img src={props.photoLink} alt={props.name} className="manager-photo"></img>
                <h3 className='tenure'>{props.tenure}</h3>
            </div>

            <div className='trophies-container'>
                <div className="PL-titles">
                    <div className='trophy-tool-tip'>
                        <img src="https://tmssl.akamaized.net/images/erfolge/medium/12.png?lm=1520606997" alt='PL titles' className='trophy'></img>
                        <div className='trophy-tip-text'>PL Title</div>
                    </div>
                    <h3 className='tally'>{props.PL}</h3>
                </div>

                <div className="FA-cup">
                    <div className='trophy-tool-tip'>
                        <img src="https://tmssl.akamaized.net/images/erfolge/medium/29.png?lm=1520606999" alt='FA Cup' className='trophy'></img>
                        <div className='trophy-tip-text'>FA Cup</div>
                    </div>
                    <h3 className='tally'>{props.FA}</h3>
                </div>
                
                <div className="community-shield">
                    <div className='trophy-tool-tip'>
                        <img src="https://tmssl.akamaized.net/images/erfolge/medium/316.png?lm=1520606999" alt='Community Shield' className='trophy'></img>
                        <div className='trophy-tip-text'>Community Shield</div>
                    </div>
                    <h3 className='tally'>{props.cShield}</h3>
                </div>
                
                {/*<img src="" alt='CL titles'>{props.CL}</img>*/}
            </div>
        </div>
           
       
    )
}

export default PreviousManagers