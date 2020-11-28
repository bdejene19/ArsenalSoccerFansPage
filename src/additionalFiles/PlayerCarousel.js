import React from 'react' 
import PlayerDisplay from './PlayerDisplay'

function PlayerCarousel(props) {
    return(
        <div>
            <h2 className="category-header">{props.category}</h2>
            <div className="carousel-container" onMouseOver={() => props.handleMouseOver}>
                <PlayerDisplay source='/2020players/auba.png'/>
                <PlayerDisplay source='/2020players/lacazette.png'/>
                <PlayerDisplay source='/2020players/pepe.png'/>
                <PlayerDisplay source='/2020players/ozil.png'/>
                <PlayerDisplay source='/2020players/saka.png'/>
                <PlayerDisplay source='/2020players/nelson.png'/>
                <PlayerDisplay source='/2020players/rowe.png'/>
                <PlayerDisplay source='/2020players/torreira.png'/>

                <PlayerDisplay source='/2020players/xhaka.png'/>
                <PlayerDisplay source='/2020players/mkhtiryian.png'/>
                <PlayerDisplay source='/2020players/ceballos.png'/>
                <PlayerDisplay source='/2020players/martinelli.png'/>

                <PlayerDisplay source='/2020players/guendouzi.png'/>
                <PlayerDisplay source='/2020players/maitlandniles.png'/>
                <PlayerDisplay source='/2020players/bellerin.png'/>

                <PlayerDisplay source='/2020players/monreal.png'/>
                <PlayerDisplay source='/2020players/mustafi.png'/>
                <PlayerDisplay source='/2020players/chambers.png'/>
                <PlayerDisplay source='/2020players/sokratis.png'/>
                <PlayerDisplay source='/2020players/luiz.png'/>
                <PlayerDisplay source='/2020players/kolasinac.png'/>
                <PlayerDisplay source='/2020players/tierney.png'/>
                <PlayerDisplay source='/2020players/leno.png'/>
                <PlayerDisplay source='/2020players/martinez.png'/>
                <PlayerDisplay source='/2020players/macey.png'/>
            </div>    
        </div>

    )
}

export default PlayerCarousel