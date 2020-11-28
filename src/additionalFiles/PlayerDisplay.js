
import React from 'react'

// this component is for front page ==> have 3 players can hover over and click
// therefore, needs to be a class based component in App.js-error

/* going to scrap to create netflix/dazn type video scroll component
Then need to make components for individual videos that will fill that component 
Need to also implement arsenal api ==> therefore, need to finish react youtube tutorial before continuining 

NEED TO KNOWS: 
    - forms
    - lifecycles
    - API fetching
    - further practice 


function PlayerChoice(props)  {
    
    return (
        <div>
            <img className="col" src={props.source} alt={props.imgCap}/>
        </div>
    )
}
export default PlayerChoice
*/

function PlayerDisplay(props) {
    return (
        <div>
            <div>
                <img className="slide-image" src={props.source} alt={props.source}></img>
            </div>
        </div>   
    )
}

export default PlayerDisplay