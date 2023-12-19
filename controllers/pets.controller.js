import { Router }from "express"

const router = Router()

const pets =[]


//Mostrar todos los productos en servidor 
router.get('/', (req, res) => {
    res.json({ payload: pets });
});

//Mostar producto especifico 
router.get('/', (req, res) => {

    const {codeId} = req.params

    const pet = pets.find(pet => pet.code === codeId)

    if(!pet) 
    return res.status(404).json({error : 'Pet not found'})

    res.json({ payload: pet });
});



router.get('/',(req,res) => {
    const {limit} = req.query
    if(limit){
        return res.json({ pets: manager.pets })
    }
    } )







// Crear Nuevo producto
router.post('/',(req,res)=>{
    const {
        name,
        breed,
        age} = req.body

        const newProduct = {
        name,
        breed,
        age
        }

        pets.push(newPet)

        res.status(201).json({payload :'pet created'})
})

//Modificar producto, (Enviando todos los campos obligatoriamente)

router.put('/:bId',(req,res)=>{
    const {breedId} = req.params

    const {name,breed,age} = req.body

    if(!name|| !breed || !age) 
    return res.status(400).json({error : 'Bad request'})

    const pet = pets.find(pet => pet.code === codeId)

    if(!pet) 
    return res.status(404).json({error : 'Pet not found'})

    pet.name = name
    pet.breed = breed
    pet.age = age
    

    res.json({payload : 'Pet : update  '})
})

 //Modifica pet sin tener que enviar todos los params de nuevo  

router.patch('/:bId',(req,res)=>{
    const {breedId} = req.params

    const {name, breed, age} = req.body



    const pet = pets.find(pet => pet.code === breedId)

    if(!pet) 
    return res.status(404).json({error : 'Pet not found'})

    pet.name = name
    pet.breed = breed
    pet.age = age

    res.json({payload : 'Pet : update  '})
})


//Mostrar productos por ID (FALTA PORNERLES ID )
    router.get('/:bid', (req, res) => {
        const breedId = Number(req.params.bid);
        const pet = manager.getbreedById(breedId);
    
        if (pet) {
            return res.json({ Pet : pet });
        }
        res.json({ payload: 'Pet not found' });
        }
    );

    router.get('*',(req,res)=> {
        res.status(404).json({error:'Not found '})
    })

// ELiminar Producto
    router.delete('/:bId',(req,res)=>{
        const {breedId} = req.params

        const petIndex = pets.findIndex(pet => pet.breed === breedId)


        if(!petIndex=== -1) 
        return res.status(404).json({error : 'Pet not found'})
    


        pets.splice(petIndex,1)

        res.json({payload : 'pet deleted'})
    } )


    export default router