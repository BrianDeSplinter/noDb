const express = require('express')
const app = express()
const ctrl = require('./controller/racerController')
const SERVER_PORT =  4334

app.use(express.json())

app.get('/api/scoreboard', ctrl.getRacers)
app.post('/api/scoreboard', ctrl.addRacer)
app.patch('/api/scoreboard/edit/:racer_id', ctrl.editLapTimes) 
app.put('/api/scoreboard/clear/:racer_id', ctrl.clearLapTimes) 
app.put('/api/scoreboard/addlap', ctrl.addLap) 
app.put('/api/scoreboard/clearboard', ctrl.clearBoard)
app.delete('/api/scoreboard/:racer_id', ctrl.deleteRacer) 

app.listen(SERVER_PORT, () =>
    console.log(`Start your engines on port: ${SERVER_PORT}`)
)