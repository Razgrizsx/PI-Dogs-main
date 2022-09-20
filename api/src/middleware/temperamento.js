const { Router } = require('express');
const {API_KEY} = process.env;
const { Raza, Temperamento, Op} = require('../db');
const router = Router();
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

var myFunction =(arr) => {
    temparr = []
for(i=0; i<arr.length; i++){
  temparr.push(arr[i].trim())
      }
      return temparr}
var mySfunction= (arr) => {
        let temparr = []
        arr.forEach(function myFunction(item, i) {
      temparr.push(item.split(','))
    })
    return temparr
    } 

    router.post('/all', async (req, res) => {
    const response = await fetch(`https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`);
    const data = await response.json();
    let temperaments = data.map(a => { return a.temperament})
    let tempsinnull = temperaments.filter(a => a!=null)
    let temp = mySfunction(tempsinnull)
    const merged = [].concat.apply([], temp)
    var mergedesp = myFunction(merged)
    let set1 = new Set(mergedesp)
    const temperamentos = Array.from(set1)
    temperamentos.forEach( async (item) =>{
    await Temperamento.create(
        {'temperamento': item}
        )})
    res.json('Añadidos correctamente')
})

router.get('/', async (req, res) => {
    
        const temperamentos = await Temperamento.findAll() 
        if(temperamentos.length>0)
        return res.status(201).json(temperamentos)

        return res.status(404).send("No hay temperamentos")
    
})

    

module.exports = router;