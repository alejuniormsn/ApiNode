class UsuariosController {
  login(req, res){
    return res.json({mensagem: "Usuário ou senha inválidos"});
  }
  getUsuarios(req, res){
    return res.json([{id: 1, nome: 'Fulano de Tal'}]);
  }  
  getAllUsuarios(req, res) {
    return res.json([{ id: 1, nome: 'Fulano de Tal' }, { id: 2, nome: 'Beltrano de Tal' }]);
  }  

}

module.exports = UsuariosController;