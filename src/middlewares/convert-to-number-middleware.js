function convertTonumber (req,res,next){
    req.params.id = Number(req.params.id)
    next()
}

export default convertTonumber