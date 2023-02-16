const validacao = (req, res, next)=>{
    const {body} = req

    if(body.link === undefined && body.link === ''){
       return res.status(400).json({message: 'Campo obrigatório'})
    }

    next()

}

module.exports = {
    validacao
}