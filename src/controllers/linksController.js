const linkModel = require('../models/linkModel')

const mostrarTodos = async (req, res)=>{

    const links = await linkModel.mostrarTodos()

    return res.status(200).json(links)
}

const cadastrarLink = async (req, res) =>{
    const cadastrarLink = await linkModel.cadastrarLink(request.body)

    return res.status(201).json(cadastrarLink)
}

const deletaLink = async (req, res)=>{
    const {id} = req.params

    await linkModel.deletaLink(id)
    return res.status(204)
}

const atualizaLink = async (req, res)=>{
    const {id} = req.params

    await linkModel.atualizaLink(id, req.body)
    return res.status(204).json()
}


module.exports = {
    mostrarTodos,
    cadastrarLink,
    deletaLink,
    atualizaLink
}