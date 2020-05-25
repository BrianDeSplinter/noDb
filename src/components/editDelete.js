import React, {Component} from 'react'

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
                <h3 style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>{this.props.racer.times.map(e => {return <div style={{height: '40px', width: '65px', backgroundColor: 'green'}}>{e}</div>})}</h3>
            </div>
        )
    }
}

export default EditDelete