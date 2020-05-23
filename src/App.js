import React, {Component} from 'react';
import axios from 'axios'
import Header from './components/Header'
import Lapboard from './components/Lapboard'
import AddRacer from './components/AddRacer'
import Racers from './components/Racers'
import EditDelete from './components/EditDelete'
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state = {
      racersAndLapTimes: []
    }
    //bind all functions here
  }
  
  componentDidMount(){
    axios.get('/api/scoreboard').then((res) => {
      this.setState({
        racersAndLapTimes: res.data
      })
    })
  }

  addNewRacer(racer){
    const body = {racer}
    axios.post('/api/scoreboard', body).then((res) => {
      this.setState({
        racersAndLapTimes: res.data
      })
    })
  }

  editLapTimes(id, updatedRacer){
    const body = {updatedRacer}
    axios.put(`/api/scoreboard/${id}`, body).then((res) => {
      this.setState({
        racersAndLapTimes: res.data
      })
    })
  }

  clearLapTimes(id, updatedRacer){
    const body = {updatedRacer}
    axios.put(`/api/scoreboard/${id}`, body).then((res) => {
      this.setState({
        racersAndLapTimes: res.data
      })
    })
  }

  addLap(){}

  clearBoard(){}

  deleteRacer(id){
    axios.delete(`/api/scoreboard/${id}`).then((res) => {
      this.setState({
        racersAndLapTimes: res.data
      })
    })
  }
  
  
  
  
  render() {
    return(
      <div className="App">
      <Header/>
      </div>
    )
  };
}

export default App;
