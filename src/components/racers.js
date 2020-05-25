import React from 'react'
import EditDelete from './EditDelete'
import RacerTimes from './RacerTimes'




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

    const timesTable = props.racers.map((e) =>(
        <RacerTimes
            racer = {e}
        />
    ))



    return(
        <div style={{display:'flex', flexDirection:'row'}}>
            <div>{racermap}</div>
            <h3 style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
                    {timesTable}
                </h3>
        </div>
    )

}

export default Racers