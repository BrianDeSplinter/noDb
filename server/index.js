const express = require('express')
const app = express()
//const data = require('./data.js')
const ctrl = require('./controller/racerController')
const SERVER_PORT =  4334

app.use(express.json())

app.get('/api/scoreboard', ctrl.getRacers)
app.post('/api/scoreboard', ctrl.addRacer)
// app.put('/api/scoreboard', ctrl.editLapTimes) // add params to link?
// app.delete('/api/scoreboard', ctrl.deleteRacer)  // add params to link?

app.listen(SERVER_PORT, () =>
    console.log(`Start your engines on port: ${SERVER_PORT}`)
)