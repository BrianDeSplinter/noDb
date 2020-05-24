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
            <div>Edit and Delete</div>
        )
    }
}

export default EditDelete