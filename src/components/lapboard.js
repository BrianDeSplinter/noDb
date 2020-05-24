import React, {Component} from 'react'
import AddRacer from './AddRacer'

class Lapboard extends Component{
    constructor(){
        super()
        this.state = {
            laptimes: 5
        }
    }



    
    
    
    render(){
        return(
            <div>
                <button onClick= {this.props.addLap}>addLap</button>
                <h4><AddRacer/></h4>
            </div>
        )
    }
}




export default Lapboard