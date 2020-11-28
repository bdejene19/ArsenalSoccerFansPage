import React from 'react' 
import PreviousManagers from './PreviousManagers'
import ManagerStats from './ManagerStats'

function ManagerCarousel() {
    const pastManagers = ManagerStats.map(manager => 
        <PreviousManagers 
          key={manager.place} 
          name={manager.manager} 
          photoLink={manager.photo} 
          tenure={manager.tenure}
          PL={manager.PLtitles} 
          FA={manager.FAcup} 
          cShield={manager.CStitles} 
          />)

    const numManagers = pastManagers.length
    var photoIndex = 0
   

    function changeSlide(movement) {
        if (movement === document.getElementsByClassName('manager-carousel-left')) {
            (photoIndex === 0) ? (photoIndex = numManagers - 1) : (photoIndex = photoIndex - 1)
            console.log(photoIndex)
        }

        if (document.getElementsByClassName('manager-carousel-right')) {
            (photoIndex === 4) ? (photoIndex = 0) : (photoIndex = photoIndex + 1)
            console.log(photoIndex)


        }
        console.log(movement)
    }

    return (
        <div>
            <div className="manager-carousel">
                <button className='manager-carousel-left' onClick={changeSlide(1)}>left</button>
                {pastManagers[photoIndex]}
                <button className='manager-carousel-right' onClick={changeSlide(-1)}>right</button>
                <div className="numDots"></div>

            </div>
        </div>
    )

}

export default ManagerCarousel