import React, {Component} from 'react'
import AddRacer from './AddRacer'

class Lapboard extends Component{
    constructor(){
        super()
        this.state = {
            laptimes: 5,
        }
    }

    render(){
        return(
            <div>
                <h4><AddRacer 
                    addLap= {this.props.addLap}
                    clearBoard = {this.props.clearBoard}
                    addNewRacer = {this.props.addNewRacer}
                    />
                </h4>
            </div>
        )
    }
}

export default Lapboard