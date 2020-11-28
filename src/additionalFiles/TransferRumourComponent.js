import React from 'react'

function TransferRumourComponent(props) {
    return (
        <div>
            <div className="player-rumour">
                Player: {props.player}
                In/out: <img src={props.inOut} alt={props.inOut} className='transfer-cover'></img>
                Article: {props.article}
            </div>
        </div>
    )
}

export default TransferRumourComponent