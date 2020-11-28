import React from 'react';
import PlayerCarousel from './additionalFiles/PlayerCarousel'
import '../src/additionalFiles/styles.css'
import PlayersPhotos from './additionalFiles/PlayersPhotos';
import RemainingFixtures from './additionalFiles/RemainingFixtures'
import FixtureList from './additionalFiles/FixtureList'
import TeamLogos from './additionalFiles/TeamLogos'
import PreviousManagers from './additionalFiles/PreviousManagers'
import ManagerStats from './additionalFiles/ManagerStats'
import HighburyHLVids from './additionalFiles/HighburyHLVids'
import HLVideoComponent from './additionalFiles/HLVideoComponent'
import EmiratesHLVids from './additionalFiles/EmiratesHLVids'
import YouthPlayerComponent from './additionalFiles/YouthPlayerComponent'
import YoungPlayers from './additionalFiles/YoungPlayers'
import TransferRumourComponent from './additionalFiles/TransferRumourComponent'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      data: PlayersPhotos,
      gamesLeft: RemainingFixtures,
      teamLogo: TeamLogos,
      photoIndex: 0,
      managerData: ManagerStats,
      highburyVideoIndex: 0,
      emiratesVideoIndex: 0,
      youthPlayerIndex: 0,
    }
    this.handleClick = this.handleClick.bind(this)
    this.highburyHandleClick = this.highburyHandleClick.bind(this)
    this.emiratesHandleClick = this.emiratesHandleClick.bind(this)
    this.dotClick = this.dotClick.bind(this)
    this.dotClickEmirates = this.dotClickEmirates.bind(this)
    this.dotClickHighbury = this.dotClickHighbury.bind(this)
    this.youthClick = this.youthClick.bind(this)
    this.youthDotClick = this.youthDotClick.bind(this)
  }

  handleClick(movement) {
    if (movement === 1) {
      if (this.state.photoIndex !== this.state.managerData.length - 1) {
        this.setState({photoIndex: this.state.photoIndex + 1})
      } else {
        this.setState({photoIndex: 0})
      }
    }

    if (movement === -1) {
      if (this.state.photoIndex !== 0) {
        this.setState({photoIndex: this.state.photoIndex - 1})
      } else {
        this.setState({photoIndex: this.state.managerData.length - 1})
      }
    }
  }

  highburyHandleClick(value) {
    if (value === 2) {
      if (this.state.highburyVideoIndex + 2 !== HighburyHLVids.length) {
        this.setState({highburyVideoIndex: this.state.highburyVideoIndex + 2})
      }
    }

    if (value === -2) {
      if (this.state.highburyVideoIndex - 2 >= 0) {
        this.setState({highburyVideoIndex: this.state.highburyVideoIndex - 2})
      }
    }
  }

  emiratesHandleClick(value) {
    if (value === 2) {
      if (this.state.emirates + 2 !== EmiratesHLVids.length) {
        this.setState({emiratesVideoIndex: this.state.emiratesVideoIndex + 2})
      }
    }

    if (value === -2) {
      if (this.state.emiratesVideoIndex - 2 >= 0) {
        this.setState({emiratesVideoIndex: this.state.emiratesVideoIndex - 2})
      }
    }
  }

  dotClick(value) {
    this.setState({photoIndex: value})
    
  }
  
  dotClickEmirates(emiratesIndex) {
  }

  dotClickHighbury(highburyIndex) {
    this.setState({highburyVideoIndex: highburyIndex})
 }

  youthDotClick(youthIndex){
    this.setState({youthPlayerIndex: youthIndex})
  }  
 
  youthClick(value) {
    let youthPlayerLength = YoungPlayers.length - 1
    if (value === 1) {
      if (this.state.youthPlayerIndex < youthPlayerLength) {
        this.setState({youthPlayerIndex: this.state.youthPlayerIndex + 1})
       } else { this.setState({youthPlayerIndex: 0})}
    } 

    if (value === -1) {
      if (this.state.youthPlayerIndex > 0) { 
        this.setState({youthPlayerIndex: this.state.youthPlayerIndex - 1}) 
      } else { this.setState({youthPlayerIndex: youthPlayerLength}) }
    }
  }

  render() {
    const teams = this.state.teamLogo.map(team => team)
    const ArsenalFixtures = this.state.gamesLeft.map(matchDay => {
      const upComingFixture = matchDay.date.split(' ')
      const fixtureDayAndMonthData = upComingFixture[1].split('-')
      const monthOfFixture = parseInt(fixtureDayAndMonthData[0])
      const dayOfFixture = parseInt(fixtureDayAndMonthData[1])

      const currentDate = new Date()
      const monthOfYear = currentDate.getMonth()
      const dayOfMonth = currentDate.getDate()
      
      
      var fixture
      if (monthOfYear === monthOfFixture - 1) {
        if (dayOfMonth  <= dayOfFixture) {
          for (var x = 0; x < teams.length; x++) {
            if (matchDay.homeTeam === teams[x].name) {
              matchDay.homeLogo = teams[x].logo
            }
    
            if (matchDay.awayTeam === teams[x].name) {
              matchDay.awayLogo = teams[x].logo
            }
          }
          fixture = <FixtureList game={matchDay} key={matchDay.fixture} />
        }
      }

      if (monthOfFixture - 1 > monthOfYear) {
        for (var a = 0; a < teams.length; a++) {
          if (matchDay.homeTeam === teams[a].name) {
            matchDay.homeLogo = teams[a].logo
          }
  
          if (matchDay.awayTeam === teams[a].name) {
            matchDay.awayLogo = teams[a].logo
          }
        }
        fixture = <FixtureList game={matchDay} key={matchDay.fixture} />
      }
      return fixture
    })
  
    const totalManagers = this.state.managerData.map(manager => <PreviousManagers 
      key={manager.place} 
      name={manager.manager} 
      photoLink={manager.photo} 
      tenure={manager.tenure}
      PL={manager.PLtitles} 
      FA={manager.FAcup} 
      cShield={manager.CStitles} 
      />)
  
    var managerOnDisplay = totalManagers[this.state.photoIndex]
    const managerDots = totalManagers.map((manager => <span className='dot' onClick={() => this.dotClick(manager.key - 1)}></span>))
 
    const highburyHL = HighburyHLVids.map(video => 
      <HLVideoComponent vid={video.video} videoTitle={video.title} key={video.videoNum} />)
    var highburyHLDisplayed = highburyHL.splice(this.state.highburyVideoIndex, this.state.highburyVideoIndex + 2)
    const highburyDots = highburyHL.map((HL => <span className='dot' onClick={() => console.log(HL.key + 'and' + this.state.highburyVideoIndex)}></span> ))
    

    const emiratesHL = EmiratesHLVids.map(video => 
      <HLVideoComponent vid={video.video} videoTitle={video.title}/>)
    var emiratesHLDisplayed = emiratesHL.splice(this.state.emiratesVideoIndex, this.state.emiratesVideoIndex + 2)
    const emiratesDots = emiratesHL.map((HL => <span className='dot' onClick={() => this.dotClickEmirates(HL.key)}></span>))

    const youthStars = YoungPlayers.map((player => <YouthPlayerComponent youth={player} key={player.place}/>))
    let currYouth = youthStars[this.state.youthPlayerIndex]
    const youthDots = youthStars.map(youthPlayer => <span className= "dot" onClick={() => this.youthDotClick(youthPlayer.key - 1)}></span>)

    return (
      <div>
        <div className="container">
            <h2 className='category-header'>Previous Managers</h2>
            {managerOnDisplay}
            <div className='prevManagers'>

              <div className='button-container'>
                <button className='HL-left' onClick={() => this.handleClick(-1)}></button>
                  {managerDots}
                <button className='HL-right'onClick={() => this.handleClick(1)}></button>
              </div>
            </div>
         
      
          <br></br>
          <div className='highbury'>
            <h2 className="category-header" >Best of Highbury</h2>

            <div className="HL-container">
              {highburyHLDisplayed}
            </div>
            <div className="button-container">
              <button className="HL-left" onClick={() => this.highburyHandleClick(-2)}></button>
              {highburyDots}
              <button className="HL-right" onClick={() => this.highburyHandleClick(2)}></button>
            </div>

          </div>
          <div className="overlay">
            <img className="bg-image" src="https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/merci-arsene-yuasabda-hamurwani.jpg" alt="wenger" style={{marginTop: -14}}></img>
          </div>
          <div className="overlay2">
            <img className="bg-second-half" src="https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/merci-arsene-yuasabda-hamurwani.jpg" alt="wenger" style={{marginTop: -14}}></img>
          </div>
          
        </div>

      <div className="container"> 
        <PlayerCarousel category="2020 Arsenal Squad" img='/2020players/auba.png'  caption="auba"/>


        <div className="total-fixture-container">
          <h2 className="category-header">Upcoming Fixtures</h2>
            {ArsenalFixtures}
        </div>

        <div>
          <h2 className="category-header">Best of the Emirates</h2>
          <div className="HL-container">
            {emiratesHLDisplayed}
          </div>
          
          <div className='button-container'>
            <button className="HL-left" onClick={() => this.emiratesHandleClick(-2)}></button>
            {emiratesDots}
            <button className="HL-right" onClick={() => this.emiratesHandleClick(2)}></button>
          </div>
        </div>

        <div className="overlay">
          <img className="bg-image" src="https://i.pinimg.com/originals/58/f4/1a/58f41a0244e0aa5350a3f3dc4b5a1be1.jpg" alt="arteta"></img>
        </div>

        <div className="overlay2">
          <img className="bg-second-half" src="https://i.pinimg.com/originals/58/f4/1a/58f41a0244e0aa5350a3f3dc4b5a1be1.jpg" alt="arteta"></img>
        </div>
    </div>


      <div className="container">
        {/*<div className="transfers-container">
          <h2 className='category-header'>Transfer Speculation</h2>
          
          {/*put in transfer news data}
          <TransferRumourComponent player='Aubameyang' inOut='https://www.thesportreview.com/wp-content/uploads/grapevine-facebook.jpg' ></TransferRumourComponent>
    </div>*/}

        <div className='future-manager'>
          <h2 className='category-header'>Manager for the foreseable future</h2>
          {/*<div className='currManagerAbout'>
           <div className='arteta-quotes'>
           <h3 style={{color: 'red', marginTop: -17, marginLeft: 5}}>Mikel Arteta</h3>
              <p>“He was a leader, and he has a good passion for the game and he knows the club well, he knows what is important at the club and he was captain of the club. Why not?"
                 <br></br>- Arsene Wenger</p>

              {/*<p>"He’s a young manager, he’s 37, so he is so young but he has experience already to handle big players and teams and when it’s going to happen, it’s going to happen." 
                <br></br> - Pep Guardiola 
  </p>
  </div>*/}
            <div className="photo-tenure-container">
                <img src='http://thenigerian.news/wp-content/uploads/2019/12/mikel-arteta-arsenal-appoint-ex-captain-as-head-coach.jpg' alt='Arteta' className="manager-photo"></img>
                <h3 className='tenure'>2020-Present</h3>
            </div>
         

        </div>
       
        <div className='youth-arsenal-container '>
          <h2 className='category-header' >One's to keep your eyes on...</h2>
          {/*put in youth talents (e.g. saka, martinelli, etc)*/}
          {currYouth}
          <div className='button-container' style={{marginTop: -40}}>
            <button className="HL-left" onClick={()=> this.youthClick(-1)}></button>
            {youthDots}
            <button className="HL-right" onClick={()=> this.youthClick(1)}></button>
          </div>
        </div>
        

        <div className="overlay">
          <img className="bg-image" src="http://www.clipartsuggest.com/images/74/man-in-suit-and-hat-silhouette-man-silhouette-1hjB9Q-clipart.jpg" alt="future"></img>
        </div>

        <div className="overlay2">
          <img className="bg-second-half" src="http://www.clipartsuggest.com/images/74/man-in-suit-and-hat-silhouette-man-silhouette-1hjB9Q-clipart.jpg" alt="future"></img>
        </div>
      </div>
    </div> 
    )
  }
}

export default App;
