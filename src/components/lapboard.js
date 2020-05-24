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
                <h3>Hey</h3>
                <h4><AddRacer/></h4>
            </div>
        )
    }
}




export default Lapboard