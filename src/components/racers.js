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
            editLapTimes = {props.clearLapTimes}
            clearLapTimes = {props.clearLapTimes}
            deleteRacer = {props.deleteRacer}
        />
    ))



    return(
        <div>
            <div>{racermap}</div>
        </div>
    )

}

export default Racers