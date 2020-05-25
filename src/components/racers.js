import React from 'react'
import EditDelete from './EditDelete'
import RacerTimes from './RacerTimes'




function Racers(props){
    const racermap = props.racers.map((person) => (
        <EditDelete
            key= {person.id}
            racer = {person}
            editLapTimes = {props.editLapTimes}
            clearLapTimes = {props.clearLapTimes}
            deleteRacer = {props.deleteRacer}
        />
    ))

    const timesTable = props.racers.map((e) =>(
        <RacerTimes
            racer = {e}
            editLapTimes = {props.editLapTimes}
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