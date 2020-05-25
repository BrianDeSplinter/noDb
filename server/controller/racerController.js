const data = require('../data')
let id = 3

module.exports = {
    getRacers: (req, res) => {
        res.status(200).send(data)
    },

    addRacer: (req,res) => {
        const laps = data[0].times.length
        const newRacer = {
            id, 
            name: 'NewRacer',
            times: []
        }

        for(let i = 0; i < laps; i++){
            newRacer.times.push('_:_:_')
        }

        data.push(newRacer)

        id++

        res.status(201).send(data)
    },

    editLapTimes: (req, res) => {
        const {racer_id} = req.params
        const {newName, times} = req.body

        const index = data.findIndex((e) => e.id == racer_id)

        if(index === -1){
            res.status(404).send('Racer not found :(')
        }

        if(newName != null){
            data[index].name = newName
        } 

        if(times != null){
            data[index].times = times
        }

        res.status(202).send(data)
    },

    clearLapTimes: (req, res) => {
        const {racer_id} = req.params

        const index = data.findIndex((e) => e.id == racer_id)

        if(index === -1){
            res.status(404).send('Racer not found :(')
        }

        const update = data[index].times.map((e) => '_:_:_')

        data[index].times= update

        res.status(202).send(data)
    },

    addLap: (req, res) => {
        const length = data.length
        for(let i = 0; i < length; i++){
            data[i].times.push('_:_:_')
        }

        res.status(201).send(data)
    },

    clearBoard: (req, res) => {
        const length = data.length
        
        for(let i = 0; i < length; i++){
            const update = data[i].times.map((e) => '_:_:_')
            data[i].times = update
            data[i].name = `Racer ${i+1}`
        }

        res.status(200).send(data)
    },

    deleteRacer: (req, res) => {
        const {racer_id} = req.params

        const index = data.findIndex((e) => e.id == racer_id)

        if(index === -1){
            res.status(404).send('Racer not found :(')
        }

        data.splice(index, 1)

        res.status(200).send(data)
    }
}