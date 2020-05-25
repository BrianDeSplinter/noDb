import React, {Component} from 'react'

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
        console.log(this.state.userInput)
    }

    handleSaveName() {
        const {racer} = this.props
        const edited = {
            "newName": this.state.userInput,
            "times": null
        }
        this.props.editLapTimes(racer.id, edited)
        this.toggleEdit()
    }

    render(){
      
        return(
            <div key={this.props.racer.id} style={{display:'flex', flexDirection:'row', marginTop: '25px'}}>
                <div style={{display:'flex', flexDirection:'column', height: '40px'}}>
                    <button 
                        onClick={() => {if(window.confirm(`Are you sure you wish to delete ${this.props.racer.name}?`)){this.props.deleteRacer(this.props.racer.id)};}}
                        >Delete Racer
                    </button>
                    <button 
                        onClick={() => {if(window.confirm(`Are you sure you wish to clear ${this.props.racer.name}'s lap times?`)){this.props.clearLapTimes(this.props.racer.id)};}}
                        >Clear Lap Times
                    </button>
                    <button onClick={() => this.toggleEdit()}>Edit Racer Name</button>
 
                </div>
                <div>
                    {!this.state.isEditing ? (<h1>{this.props.racer.name}</h1>) : (
                        <div style={{display:'flex', flexDirection:'column'}}>
                            <input onChange={(e) => this.handleChange(e)} placeholder={this.props.racer.name}/>
                            <button onClick={() => this.handleSaveName()}>Confirm Name Change</button>
                            <button onClick={() => this.toggleEdit()}>Cancel Name Change</button>
                        </div>
                    )}
                </div>
            </div>
        )
    }
}

export default EditDelete