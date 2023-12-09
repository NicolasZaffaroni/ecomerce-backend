const express= require('express')

const app = express()
port = 3000

app.get('/',(req, res)=>{
    res.json({
        message:'Hi Strangers'
    })

})
//Send puede leer todo tipo de datos pero para mas efectivo json (si son solo datos JSON) 

/*app.get('/users',(req, res)=>{
    res.send({
        nombre:'Carlos',
        apellido:'Zapata',

        nombre:'Roberto',
        apellido:'Carlos'
    })
})*/
const users = [
    {
        id:1,
        nombre:'Roberto',
        apellido:'Carlos',
        country :"bra"
    },
    {
        id:2,
        nombre:'Leo',
        apellido:'Messi',
        country :"arg"
    },
    {
        id:3,
        nombre:'Diego',
        apellido:'Maradona',
        country :"arg"
    }

]
app.get('/users',(req,res) => {
    const {country} = req.query
    if(country){
        const  usersResponse = users.filter(user => user.country === country)
        return res.json({message : usersResponse})
    }

    res.json({message : users})
})


app.get('/users/:uid',(req,res) => {
    const user = users.find(user=> user.id=== Number(req.params.uid))
    res.json({message : user})
})



app.listen(port,()=>{
    console.log(`Server runing at port ${port}`)
})

