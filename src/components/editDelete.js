import React, {Component} from 'react'
import RacerTimes from './RacerTimes'

//editLapTimes = {props.clearLapTimes}
//clearLapTimes = {props.clearLapTimes}


class EditDelete extends Component{
    constructor(){
        super()
        this.state= {
            isEditing: false,
            userInput: '',
        }
    }

    toggleEdit(){
        this.setState({
            isEditing: !this.state.isEditing
        })
    }

    handleChange(e){
        this.setState({
            userInput: e.target.value
        })
    }

    render(){
      
        return(
            <div key={this.props.racer.id}>
                <button 
                    onClick={() => {if(window.confirm(`Are you sure you wish to delete ${this.props.racer.name}?`)){this.props.deleteRacer(this.props.racer.id)};}}
                    >Delete Racer
                </button>
                <button 
                    onClick={() => {if(window.confirm(`Are you sure you wish to clear ${this.props.racer.name}'s lap times?`)){this.props.clearLapTimes(this.props.racer.id)};}}
                    >Clear Lap Times
                </button>
                <h1>{this.props.racer.name}</h1>
                <h2>{this.props.racer.id}</h2>
            </div>
        )
    }
}

export default EditDelete