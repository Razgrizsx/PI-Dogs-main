const { Router } = require('express');
const {API_KEY} = process.env;
const { Raza, Temperamento, Op} = require('../db');
const router = Router();
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

/* 
Imagen
- Nombre
- Temperamento
- Peso */

router.get('/', async (req, res) =>{
    const {name} = req.query
    const dog = await Raza.findAll({
        include: {
            model: Temperamento,
            attributes: ['temperamento'],
            through: {
                attributes: [],
            },
        }
    })
    if(dog){
        var arrdef = []
        for(i=0;i<dog.length;i++){
           var arr2 = []
           for (y=0;y<dog[i].Temperamentos.length;y++){
           arr2.push(dog[i].Temperamentos[y].temperamento)
           }
       
           var string = arr2.toString()
           
           var obj = { 
                id: dog[i].id,
               nombre: dog[i].nombre,
               temperamento: string,  
               peso: dog[i].peso, 
               imagen: dog[i].imagen,
               años_de_vida: dog[i].longevidad
           } 
           
           arrdef.push(obj)}
    const response = await fetch(`https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`);
    const data = await response.json();
    const datos = data.map(a => { return {id: a.id, nombre:a.name, temperamento: a.temperament, peso: a.weight.metric, imagen: a.image.url, años_de_vida: a.life_span }})
    const unidos = datos.concat(arrdef)
    if(!name){
        return res.status(200).send(unidos)
    }else{
        
        const foundDog = unidos.filter((a) => a.nombre.toLowerCase().includes(name.toLowerCase()))
        if(foundDog.length>0){ 
             res.status(200).json(foundDog)
            }else{
             res.status(404).send('Raza no encontrada')
            }
    }}
    else{
        const response = await fetch(`https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`);
    const data = await response.json();
    const datos = data.map(a => { return {id: a.id, nombre:a.name, temperamento: a.temperament, peso: a.weight.metric, imagen: a.image.url }})
    
    if(!name){
        return res.status(200).send(datos)
    }else{
        
        const foundDog = datos.filter((a) => a.nombre.toLowerCase().includes(name.toLowerCase()))
        if(foundDog.length>0){ 
             res.status(200).json(foundDog)
            }else{
             res.status(404).send('Raza no encontrada')
            }
    }
    }
})

/* Los campos mostrados en la ruta principal para cada raza (imagen, nombre y temperamento)
- [ ] Altura
- [ ] Peso
- [ ] Años de vida */
   

router.get('/:id', async (req, res) => {
    const {id} = req.params
    const dogsdb = await Raza.findByPk(id, {
        include: {
            model: Temperamento,
            attributes: ['temperamento'],
            through: {
                attributes: [],
            },
        }
    })
    if(dogsdb){
    var arr2 = []
    for (i=0;i<dogsdb.Temperamentos.length;i++){
    arr2.push(dogsdb.Temperamentos[i].temperamento)
    }

    var string = arr2.toString()
    var obj = { 
        imagen: dogsdb.imagen,
        nombre: dogsdb.nombre, 
        temperamento: string, 
        altura: dogsdb.altura, 
        peso: dogsdb.peso, 
        años_de_vida: dogsdb.longevidad,
    } 
    return res.status(200).json(obj)
}else{
    const response = await fetch(`https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`);
    const data = await response.json();
    const datos = data.map(a => { return {
        id: a.id, 
        nombre:a.name, 
        temperamento: a.temperament, 
        altura: a.height.metric, 
        peso: a.weight.metric, 
        años_de_vida: a.life_span, 
        imagen: a.image.url }})
    const dogs = datos.filter(a => a.id==id);
    return res.status(201).send(dogs[0])
    }}
    )

    /*  ] Un formulario __controlado con JavaScript__ con los siguientes campos:
    - Nombre
    - Altura (Diferenciar entre altura mínima y máxima)
    - Peso (Diferenciar entre peso mínimo y máximo)
    - Años de vida
  - [ ] Posibilidad de seleccionar/agregar uno o más temperamentos
  - [ ] Botón/Opción para crear una nueva raza de perro */

router.post('/', async (req, res) => {
    const {nombre, altura, peso, longevidad, temperamento, imagen} = req.body
    if(!nombre || !altura || !peso){return res.status(401).send("Falta enviar datos obligatorios")}
    try {

        const perro = await Raza.create({
            nombre,
            altura,
            peso,
            longevidad,
            imagen,
            });
        
        const temp = await Temperamento.findAll(
            {
                where :{
                    temperamento: {
                        [Op.substring]: temperamento
                    }}})
                    
        const dog = await Raza.findByPk(perro.id);    
         if(temp.length>0){
            await dog.addTemperamento(temp)
        }           
            return res.status(201).json(dog)
        }
     catch(e) {
        return res.status(402).send("Error en alguno de los datos provistos")
    }
})

router.post('/addtemp', async (req, res) => {
    const {temperamento, name} = req.body
    try{
        const temp = await Temperamento.findAll(
            {
                where :{
                    temperamento: {
                        [Op.substring]: temperamento
                    }}})
                    const raza = await Raza.findAll(
                        {
                            where :{
                                nombre: {
                                    [Op.substring]: name
                                }}})
        const dog = await Raza.findByPk(raza[0].id);    
          if(temp.length>0){
            await dog.addTemperamento(temp)
        }           
            return res.status(201).json(raza)
        }
     catch(e) {
        return res.status(402).send("Error en alguno de los datos provistos")
    }
})


module.exports = router;



