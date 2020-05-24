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
    const body = {updatedRacer}
    axios.put(`/api/scoreboard/edit/${id}`, body).then((res) => {
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
      <Lapboard/>
      <Racers/>
      </div>
    )
  };
}

export default App;
