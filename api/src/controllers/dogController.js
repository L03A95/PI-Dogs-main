const {Dog,Temperament} = require('../db')
const axios = require('axios')
const { Op } = require("sequelize");

const getDogs = async () => {
    const apiDogs = await axios.get('https://api.thedogapi.com/v1/breeds') 
    const getApiDogs = apiDogs.data.map((p) => { 
        let dog = {
            id: p.id,
            name:p.name,
            weight:p.weight.metric?.split(' - '),
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
            weight:p.weight?.split(' - '),
            temperament:p.temperaments?.map((e) => e = e.name),
            image:p.image,
            origin:'BDD'
        };
        return dog
    })

    const goodApiDogs = getApiDogs.map((dog) => {
        if(dog.name == 'Pekingese') dog.weight = [3,6]
        if(dog.name == 'French Bulldog') dog.weight = [9,13]
        if(dog.name == 'Smooth Fox Terrier') dog.weight = [6,8]
        if(dog.name == 'Olde English Bulldogge') dog.weight = [22,30]
        if(dog.name == 'Shetland Sheepdog') dog.weight = [6,12]
        if(dog.name == 'Griffon Bruxellois') {
            dog.weight = [4,5]
            dog.lifetime = [10,15]
        }
        return dog
    })

    return [...goodApiDogs,...getBddDogs] 
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

    let dogs = await getDogs()
    return dogs.filter((dog) => dog.name.toLowerCase().includes(query.toLowerCase()))
}


const idDogs = async (id) => {
    const apiDogs = await axios.get('https://api.thedogapi.com/v1/breeds')
    const getApiDogs = apiDogs.data.map((p) => {
        let dog = {
            id: p.id,
            name:p.name,
            height:p.height.metric?.split(' - '),
            weight:p.weight.metric?.split(' - '),
            temperament: p.temperament?.split(', '),
            lifetime:p.life_span?.split(' - ').join(' ').split(' ').slice(0,2),
            image:p.image.url
        };
        return dog
    })
    const bddDogs = await Dog.findAll({include:{model:Temperament, through:{attributes:[]}}})
    const getBddDogs = bddDogs.map((p) => {
        let dog = {
            id: p.id,
            name:p.name,
            height:p.height?.split(' - '),
            weight:p.weight?.split(' - '),
            temperament: p.temperaments?.map((e) => e = e.name),
            lifetime:p.lifetime?.split(' - '),
            image:p.image,
        };
        return dog
    })

    const goodApiDogs = getApiDogs.map((dog) => {
        if(dog.name == 'Pekingese') dog.weight = [3,6]
        if(dog.name == 'French Bulldog') dog.weight = [9,13]
        if(dog.name == 'Smooth Fox Terrier') dog.weight = [6,8]
        if(dog.name == 'Olde English Bulldogge') dog.weight = [22,30]
        if(dog.name == 'Griffon Bruxellois') {
            dog.weight = [4,5]
            dog.lifetime = [10,15]
        }
        return dog
    })
    
    let allDogs = [...goodApiDogs,...getBddDogs]
    return allDogs.find((d) => d.id == id)
}

module.exports = {
    getDogs,
    postDogs,
    queryDogs,
    idDogs
}