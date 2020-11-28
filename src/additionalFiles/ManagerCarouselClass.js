import React, { Component } from 'react'
import PreviousManagers from './PreviousManagers'
import ManagerStats from './ManagerStats' 

class ManagerCarouselClass extends Component {
    constructor() {
        super() 
        this.state = {
            photoIndex: 0,
            managerData: ManagerStats,
            currManagerDisplay: "",
            totalManagers: "",
        }
        this.handleClick = this.handleClick.bind(this)
        const managerLength = this.state.managerData.length
        const managerDisplay = ManagerStats.map(manager => <PreviousManagers 
            key={manager.place} 
            name={manager.manager} 
            photoLink={manager.photo} 
            tenure={manager.tenure}
            PL={manager.PLtitles} 
            FA={manager.FAcup} 
            cShield={manager.CStitles} 
            />)

        this.setState({totalManagers: managerLength})
        this.setState({currManagerDisplay: managerDisplay})
    }
    handleClick(value) {
        if (value === 1) {
            if (this.state.photoIndex !== this.state.totalManagers - 1) {
                this.setState({photoIndex: this.state.photoIndex + 1})
            } else {
                this.setState({photoIndex: 0})
            }
        }

        if (value === -1) {
            if (this.state.photoIndex !== 0) {
                this.setState({photoIndex: this.state.photoIndex - 1})
            } else {
                this.setState({photoIndex: this.state.totalManagers - 1})
            }
        }
    }

    
    render() {
       
        return (
            <div>
                <div className="manager-carousel">
                    <button className='manager-carousel-left' onClick={this.handleClick(1)}>left</button>
                    {this.state.currManagerDisplay}
                    <button className='manager-carousel-right' onClick={this.handleClick(-1)}>right</button>
                    <div className="numDots"></div>

                </div>
            </div>
        )
    }
}

export default ManagerCarouselClass