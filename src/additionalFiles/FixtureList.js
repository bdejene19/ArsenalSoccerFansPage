import React from 'react'
function FixtureList(props) {
    return (
        <div>
            <div className='fixture-container'>
                <div className='team-image-container'>
                    <div className="logo1">
                        <img className="teamLogos" src={props.game.homeLogo} alt={props.game.homeTeam}></img>
                    </div>

                    <div className="logo2">
                        <img className="teamLogos" src={props.game.awayLogo} alt={props.game.awayTeam}></img>
                    </div>
                </div>
                <div className='fixture-items'>
                    <h3 className='matchDay-teams'>{props.game.homeTeam} vs. {props.game.awayTeam}</h3>
                    <h4 className='competition'>{props.game.competition}</h4>
                    <h4 className='time-detail'> {props.game.date} {props.game.time}</h4>
                </div>
             
            </div> 
        </div>
    )
}

export default FixtureList