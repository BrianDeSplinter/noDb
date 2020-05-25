import React from 'react'
import '../App.css';





function AddRacer(props){


    return(
        <div className= 'top-buttons'>
            <button onClick= {() => props.addLap()}>Add New Lap</button>
            <button 
                onClick= {() => {if(window.confirm(`Are you sure you wish to clear the scoreboard`)){props.clearBoard()};}}
                >Clear Board
            </button>
            <button onClick= {() => props.addNewRacer()}>Add New Racer</button>
        </div>
    )
}

export default AddRacer