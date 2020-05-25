import React from 'react'





function AddRacer(props){



    return(
        <div>
            <button onClick= {() => props.addLap()}>Add New Lap</button>
            <button onClick= {() => props.clearBoard()}>Clear Board</button>
            <button onClick= {() => props.addNewRacer()}>Add New Racer</button>
        </div>
    )
}

export default AddRacer