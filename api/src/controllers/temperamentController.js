const axios = require('axios')
const { Op } = require("sequelize")
const {Temperament} = require('../db')

const getTemperaments = async () => {
    let dogs = await axios.get('https://api.thedogapi.com/v1/breeds')
    dogs.data.forEach((p) => {
        const temperament = p.temperament?.split(', ')
        temperament?.forEach((t) => {
            Temperament.findOrCreate({where:{name:t}})
        })
    });
}



module.exports = {
    getTemperaments,
}