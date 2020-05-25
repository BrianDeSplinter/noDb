import React, {Component} from 'react'

class RacerTimes extends Component{
    constructor(){
        super()
        this.state = {

        }
    }


    render(){
        return(
          <div style={{height: '40px', width: '65px', backgroundColor: 'green', display: 'flex', flexDirection: 'row', justifyContent:'space-between'}}>{this.props.racer.times.map(e => {return <div style={{height: '40px', width: '65px', backgroundColor: 'green'}}>{e}</div>})}</div>
        )
    }
}

export default RacerTimes