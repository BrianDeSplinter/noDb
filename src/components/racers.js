import React from 'react'
import EditDelete from './EditDelete'

function Racers(props){
    const racermap = props.racers.map((person) => (
        <EditDelete
            key= {person.id}
            edit= {props.editLapTimes}
            clear = {props.clearLapTimes}
            delete = {props.deleteRacer}
            racer = {person}
        />
    ))



    return(
        <div>
            <h4>racers</h4>
            <div>{racermap}</div>
        </div>
    )

}

export default Racers