import React, {Component} from 'react'

class EditDelete extends Component{
    constructor(){
        super()
        this.state= {
            isEditing: false,
            userInput: '',
        }
    }


    render(){
        return(
            <div>
                <h1>{this.props.racer.name}</h1>
                <h2>{this.props.racer.id}</h2>
                <h3>{this.props.racer.times.map(e => {return <div>{e}</div>})}</h3>
            </div>
        )
    }
}

export default EditDelete