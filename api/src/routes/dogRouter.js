const { Router } = require('express');
const axios = require('axios')
const {getDogs,postDogs,queryDogs,idDogs} = require('../controllers/dogController')

const dogRouter = Router()

dogRouter.get('/', async (req,res) => {
    console.log(req.query.name)
    try {
        dogs = req.query.name ? await queryDogs(req.query.name) :await getDogs()
        res.status(200).json(dogs) 
    } catch(err) {
        res.status(404).json(err.message)
    }
})

dogRouter.get('/:id', async (req,res) => {
    try {
        dog = await idDogs(req.params.id)
        res.status(200).json(dog)
    } catch (err) {
        res.status(404).json(err.message)
    }
})

dogRouter.post('/', async (req,res) => {
    try {
        dogs = await postDogs(req.body)
        res.status(200).json(req.body)
    } catch (err) {
        res.status(404).json(err.message)
    }
})

module.exports = {
    dogRouter,
}