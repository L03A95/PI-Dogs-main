const {Dog,Temperament} = require('../db')
const axios = require('axios')
const { Op } = require("sequelize");

const getDogs = async (query) => {
    const apiDogs = await axios.get('https://api.thedogapi.com/v1/breeds')
    const getApiDogs = apiDogs.data.map((p) => {
        let dog = {
            id: p.id,
            name:p.name,
            weight:p.weight.metric,
            temperament: p.temperament?.split(', '),
            image:p.image.url,
            origin:'API'
        };
        return dog
    })
    const bddDogs = await Dog.findAll({include:{model:Temperament, through:{attributes:[]}}})
    const getBddDogs = bddDogs.map((p) => {
        let dog = {
            id: p.id,
            name:p.name,
            weight:p.weight,
            temperament:p.temperaments?.map((e) => e = e.name),
            image:p.image,
            origin:'BDD'
        };
        return dog
    })

    return [...getApiDogs,...getBddDogs]
}

const postDogs = async (dog) => {
    const {name,height,weight,image,lifetime,temperament} = dog
    if(![name,height,weight]) return Error('Faltan datos obligatorios')
    try {
        const newDog = await Dog.create({
            name,height,weight,image,lifetime
        })
        newDog.addTemperaments(temperament) 
        return newDog
    } catch (err) {
        throw Error(err)
    }
}

const queryDogs = async (query) => {
    const apiDogs = await axios.get(`https://api.thedogapi.com/v1/breeds/search?q=${query}`)
    const getApiDogs = apiDogs.data.map((p) => {
        let dog = {
            id: p.id,
            name:p.name,
            weight:p.weight.metric,
            temperament: p.temperament?.split(', '),
            image:`https://cdn2.thedogapi.com/images/${p.reference_image_id}.jpg`,
            origin:'API'
        };
        return dog
    })
    const bddDogs = await Dog.findAll({where: {name:{[Op.iLike]:`%${query}%`}},include:{model:Temperament, through:{attributes:[]}}})
    const getBddDogs = bddDogs.map((p) => {
        let dog = {
            id: p.id,
            name:p.name,
            weight:p.weight,
            temperament:p.temperaments?.map((e) => e = e.name),
            image:p.image,
            origin:'BDD'
        };
        return dog
    })
    return [...getApiDogs,...getBddDogs]
}

const idDogs = async (id) => {
    const apiDogs = await axios.get('https://api.thedogapi.com/v1/breeds')
    const getApiDogs = apiDogs.data.map((p) => {
        let dog = {
            id: p.id,
            name:p.name,
            height:p.height.metric,
            weight:p.weight.metric,
            temperament: p.temperament?.split(', '),
            lifetime:p.life_span,
            image:p.image.url
        };
        return dog
    })
    const bddDogs = await Dog.findAll({include:{model:Temperament, through:{attributes:[]}}})
    const getBddDogs = bddDogs.map((p) => {
        let dog = {
            id: p.id,
            name:p.name,
            height:p.height,
            weight:p.weight,
            temperament: p.temperaments?.map((e) => e = e.name),
            lifetime:p.lifetime,
            image:p.image,
        };
        return dog
    })
    
    let allDogs = [...getApiDogs,...getBddDogs]
    return allDogs.find((d) => d.id == id)
}

module.exports = {
    getDogs,
    postDogs,
    queryDogs,
    idDogs
}