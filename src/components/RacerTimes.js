import React, {Component} from 'react'

//editLapTimes = {props.clearLapTimes}

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
            "times": this.state.userInput
        }
        this.props.editLapTimes(racer.id, edited)
        this.toggleEdit()
    }
    render(){
        return(
          <div> 
           
           
            <div>
                {!this.state.isEditing ? (
                <div style={{display: 'flex', flexDirection: 'row', justifyContent:'space-between'}}>
                {this.props.racer.times.map(e => {return <div style={{height: '40px', width: '65px', backgroundColor: 'green'}}>
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