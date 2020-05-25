import React, {Component} from 'react';
import Header from './components/Header'
import Lapboard from './components/Lapboard'
import Racers from './components/Racers'
import axios from 'axios'
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state = {
    racersAndLapTimes: []
    }
    
    this.addNewRacer = this.addNewRacer.bind(this)
    this.editLapTimes = this.editLapTimes.bind(this)
    this.clearLapTimes = this.clearLapTimes.bind(this)
    this.addLap = this.addLap.bind(this)
    this.clearBoard = this.clearBoard.bind(this)
    this.deleteRacer = this.deleteRacer.bind(this)
  }
  
  componentDidMount(){
    axios.get('/api/scoreboard').then((res) => {
      this.setState({
        racersAndLapTimes: res.data
      }) 
    })
  }

  addNewRacer(){
    axios.post('/api/scoreboard').then((res) => {
      this.setState({
        racersAndLapTimes: res.data
      })
    })
  }

  editLapTimes(id, updatedRacer){
    axios.patch(`/api/scoreboard/edit/${id}`, updatedRacer).then((res) => {
      this.setState({
        racersAndLapTimes: res.data
      })
    }).catch(err => console.log(err))
  }

  clearLapTimes(id){
    axios.put(`/api/scoreboard/clear/${id}`).then((res) => {
      this.setState({
        racersAndLapTimes: res.data
      })
    }).catch(err => console.log(err))
  }

  addLap(){
    axios.put('/api/scoreboard/addlap').then((res) => {
      this.setState({
        racersAndLapTimes: res.data
      })
    })
  }

  clearBoard(){
    axios.put('api/scoreboard/clearboard').then((res) => {
      this.setState({
        racersAndLapTimes: res.data
      })
    })
  }

  deleteRacer(id){
    axios.delete(`/api/scoreboard/${id}`).then((res) => {
      this.setState({
        racersAndLapTimes: res.data
      })
    }).catch(err => console.log(err))
  }
  
  render() {
    return(
      <div className="App">
      <Header/>
      <Lapboard 
        racersAndLapTimes = {this.state.racersAndLapTimes}
        addLap = {this.addLap}
        clearBoard = {this.clearBoard}
        addNewRacer = {this.addNewRacer}
      />
      <Racers
        racers = {this.state.racersAndLapTimes}
        editLapTimes = {this.editLapTimes}
        clearLapTimes = {this.clearLapTimes}
        deleteRacer = {this.deleteRacer}
      />
      </div>
    )
  };
}

export default App