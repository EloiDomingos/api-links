const conexao = require('./conexao')

const mostrarTodos = async ()=>{
    const [links] = await conexao.execute('SELECT * FROM links')
    return links
}

const cadastrarLink = async (links)=>{
    const {link} = links

    const [cadastrarLink] = await conexao.execute('INSERT INTO links (link, titulo) VALUES (?, ?)' [link, titulo])

    return {insertiId: cadastrarLink.insertiId}

}

const deletaLink = async (id)=>{
    const removeLink = await conexao.execute('DELETE FROM links WHERE id = ?', [id])
    return removeLink
}

const atualizaLink = async (id, link)=>{
    const removeLink = await conexao.execute('UPDATE links SET link = ?, titulo = ? WHERE id = ? ', [link, titulo, id])
    return removeLink
}
module.exports = {
    mostrarTodos, 
    cadastrarLink,
    deletaLink,
    atualizaLink
}