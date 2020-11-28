import React from 'react'

function YouthPlayerComponent(props) {
    return(
        <div className='fade'>
            
        <div className='youth-player-container'>
            <div className='youth-display-container'>
                <h3 className="youth-name">{props.youth.name}</h3>
                <br></br>
                <img className="player-img" src={props.youth.img} alt={props.youth.name}></img> 

                <div className="youth-container">
                    <div className="season-tally">
                        <img src='https://cdn4.iconfinder.com/data/icons/football-13/64/Football-15-512.png' alt='goals' className='tally-icon'></img> 
                        <br></br>
                        Goals: {props.youth.goals}<br></br>
                        <img src='https://cdn2.iconfinder.com/data/icons/football-soccer-player/271/football-soccer-player-002-512.png' alt='assists' className='tally-icon'></img>
                        <br></br>
                        Assists: {props.youth.assists}<br></br>
                        <img src='https://cdn1.iconfinder.com/data/icons/soccer-football/100/Soccer_03-512.png' alt='appearances' className='tally-icon'></img>
                        <br></br>
                        Appearances: {props.youth.appearances}<br></br>
                    </div>

                    
                </div>  

                <div className="youth-HL-video">
                    <h4 className='category-header'>Welcome to Arsenal {props.youth.name}</h4>
                    {props.youth.HL}
                </div>

                <div className='youth-bio'>
                        Age: {props.youth.age}
                        <br></br>
                        <br></br>
                        Position: {props.youth.position}
                </div>  
            </div>      
        </div>
        </div>

    )
}

export default YouthPlayerComponent