const data = require('../data')
let id = 3

module.exports = {
    getRacers: (req, res) => {
        res.status(200).send(data)
    },

    addRacer: (req,res) => {
        
    },

    // editLapTimes: (req, res) => {

    // },

    // clearLapTimes: (req, res) => {

    // },

    // addLap: (req, res) => {

    // },

    // clearBoard: (req, res) => {

    // },

    // deleteRacer: (req, res) => {

    // }
}