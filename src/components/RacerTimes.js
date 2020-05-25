import React, {Component} from 'react'

class RacerTimes extends Component{
    constructor(){
        super()
        this.state= {
            isEditing: false,
            userInput: []
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

    handleSaveTimes() {
        const {racer} = this.props
        const edited = {
            "newName": null,
            "times": this.state.userInput.split(', ')
        }
        this.props.editLapTimes(racer.id, edited)
        this.toggleEdit()
    }

    render(){
        return(
          <div> 
            <div>
                {!this.state.isEditing ? (
                <div style={{display: 'flex', flexDirection: 'row', justifyContent:'space-between', backgroundColor: 'rgb(165, 165, 165)', margin: '10px'}}>
                {this.props.racer.times.map(e => {return <div style={{height: '40px', width: '65px', margin: '15px'}}>
                    {e}</div>})}
                    <button onClick={() => this.toggleEdit()}>Edit Lap Times</button>
                </div>
            ) : (
                <div style={{display:'flex', flexDirection:'column'}}><input onChange={(event) => this.handleChange(event)} placeholder={this.props.racer.times}/>
                    
                    <button onClick={() => this.handleSaveTimes()}>Confirm Time Changes</button>
                    <button onClick={() => this.toggleEdit()}>Cancel Time Changes</button>
                </div>
            )}
            </div>
        </div>
        )
    }
}

export default RacerTimes


//1:55:55, 1:56:56, 1:57:57, 1:58:58, 1:59:59