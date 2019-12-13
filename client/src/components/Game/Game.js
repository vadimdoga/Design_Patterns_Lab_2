import React, { Component } from 'react'
import RetroHitCounter from 'react-retro-hit-counter';
import ReactTimer from "@xendora/react-timer";
import './css/Game.css'

export class Game extends Component {
  constructor(){
    super()
    this.state = {
      timer: 0,
      hits: 0,
      handleClick1Bool: false,
      handleClick2Bool: false,
      handleClick3Bool: false,
    }

    this.handleClick1 = this.handleClick1.bind(this)
    this.handleClick2 = this.handleClick2.bind(this)
    this.handleClick3 = this.handleClick3.bind(this)
    this.mediatorSubscribe = this.mediatorSubscribe.bind(this)
    this.mediatorVerifyObject = this.mediatorVerifyObject.bind(this)
    this.mediatorRemove = this.mediatorRemove.bind(this)

  }

  mediatorVerifyObject(buttonNr){
    if(buttonNr === 1){
      return {
        value: this.state.handleClick1Bool,
        type: 1
      }
    } else if(buttonNr === 2){
      return {
        value: this.state.handleClick2Bool,
        type: 2
      }
    } else if(buttonNr === 3){
      return {
        value: this.state.handleClick3Bool,
        type: 3
      }
    }
  }
  mediatorStop(buttonNr){
    if(buttonNr === 1){
      this.setState({
        handleClick1Bool: false
      })
    } else if(buttonNr === 2){
      this.setState({
        handleClick2Bool: false
      })
    } else if(buttonNr === 3){
      this.setState({
        handleClick3Bool: false
      })
    }
  }
  mediatorChangeObject(buttonNr){
    if(buttonNr === 1){
      this.setState({
        handleClick1Bool: !this.state.handleClick1Bool
      })
    } else if(buttonNr === 2){
      this.setState({
        handleClick2Bool: !this.state.handleClick2Bool
      })
    } else if(buttonNr === 3){
      this.setState({
        handleClick3Bool: !this.state.handleClick3Bool
      })
    }
  }
  mediatorSubscribe(buttonNr, array){
    let button = this.mediatorVerifyObject(buttonNr)
    array.push(button)
  }

  mediatorRemove(buttonNr, array){
    let index = array.map(el => {return el.type}).indexOf(buttonNr)
    
    if(index !== -1){
      this.mediatorStop(buttonNr)
      array.splice(index, 1)
    }
  }

  handleClick1(){
    if(this.state.handleClick1Bool){
      this.setState({
        hits: this.state.hits + 1
      })
    } 
  }
  handleClick2(){
    if(this.state.handleClick2Bool){
      this.setState({
        hits: this.state.hits + 3
      })
    } 
  }
  handleClick3(){
    if(this.state.handleClick3Bool){
      this.setState({
        hits: this.state.hits + 5
      })
    }
  }
  componentDidMount(){
    document.getElementById('second-game').style.visibility = "hidden"
    document.getElementById('third-game').style.visibility = "hidden"
    let array = []
    // subscribe
    this.mediatorSubscribe(1, array)
    this.mediatorSubscribe(2, array)
    this.mediatorSubscribe(3, array)
    

    // notify 1
    setTimeout(() => {
      let button = this.mediatorVerifyObject(1)

      array.map((arrayButton) => {
        if(arrayButton.type === button.type){
          this.mediatorChangeObject(arrayButton.type)
        }
      return null
      })
      

    }, 500);
    // notify 2
    setTimeout(() => {
      document.getElementById('second-game').style.visibility = "visible"

      let button = this.mediatorVerifyObject(2)
      array.map((arrayButton) => {
        if(arrayButton.type === button.type){
          this.mediatorChangeObject(arrayButton.type)
        }
      return null
      })
      this.mediatorRemove(1, array)
      
      let styleButton = document.getElementById("first-game")
      styleButton.style.visibility = "hidden"

    }, 8000);
    // notify 3
    setTimeout(() => {
      document.getElementById('third-game').style.visibility = "visible"

      let button = this.mediatorVerifyObject(3)
      array.map((arrayButton) => {
        if(arrayButton.type === button.type){
          this.mediatorChangeObject(arrayButton.type)
        }
      return null
      })
      this.mediatorRemove(2, array)
      let styleButton = document.getElementById("second-game")
      styleButton.style.visibility = "hidden"
    }, 14000);

    setTimeout(() => {
      this.mediatorRemove(3, array)
      let styleButton = document.getElementById("third-game")
      styleButton.style.visibility = "hidden"
    }, 20000)
    
  }
  
  render() {
    return (
      <div className="game">
        <div className="game__counter">
          <RetroHitCounter 
            hits={this.state.hits}
            size={30}
            borderThickness={5}
            minLength={3}
            segmentActiveColor="#CD5C5C"
            segmentInactiveColor="#8B0000"
          />
          </div>
        <div className="game__timer">
          <ReactTimer
            interval={1000}
            start={20}
            end={t => t === 0}
            onTick={t => t - 1}
          >
          {time => <span>Time: {time}</span>}
          </ReactTimer>
        </div>
        <button className="game__first-game" id="first-game" onClick={this.handleClick1}>Hit me!</button>
        <button className="game__second-game" id="second-game" onClick={this.handleClick2}>Hit me!</button>
        <button className="game__third-game" id="third-game" onClick={this.handleClick3}>Hit me!</button>
        {this.state.hits >= 200 ? <p>You won!!!</p>:<p>Try another time!</p>}
      </div>
    )
  }
}

export default Game
