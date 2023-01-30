const { Router } = require('express');
const axios = require('axios')
const {getTemperaments} = require('../controllers/temperamentController')
const {Temperament} = require('../db')


const temperamentsRouter = Router()

temperamentsRouter.get('/',async (req,res) => {
    try {
        await getTemperaments() //EJECUTAR UNA SOLA VEZ Y COMENTAR CUANDO PONGAS EL {alter: true} EN 'api/index.js'
        const allTemps = await Temperament.findAll()
        res.json(allTemps)
    } catch (err) {
        res.status(404).json(err.message)
    }
})




module.exports = {
    temperamentsRouter
}