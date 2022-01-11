/*
* CRUD.js

? File containing all the database related operations

~ End of header
*/


//! Equipe CRUD
  function createEquipe(id, name, ativo){
    const database = require('./db')
    const tabelas = require('./tabelas');
    
    try {
      await database.sync();

      const novaEquipe = await tabelas.equipes.create({
        idequipe: id,
        nome: name,
        ativo: ativo,
      }).then((res) => {console.log(res)})
      //TODO: remove consoles.log
      console.log(novaEquipe)  
    } catch (error) {
      console.log(error)
    }
    
  }

  function readEquipe(all, id, ativo) {
    const database = require('./db')
    const tabelas = require('./tabelas');
    const usuarios;

    try {
      await database.sync();
      if(all == true) {
        usuarios = await tabelas.usuarios.findAll({
          where: {
            ativo: ativo
          }
        });
      } else {
        usuarios = await tabelas.equipes.findAll({
          where: {
            ativo: ativo,
            idequipe: id
            }
          })
        };
      console.log(usuarios);
    } catch (error) {
      console.error(error)
    }
  }

  function updateEquipe(id, name, ativo) {
    const database = require('./db')
    const tabelas = require('./tabelas');
    try {
      await database.sync();

      const equipe = await tabelas.equipes.findAll({
        where: {
          idequipe: id      
        }
      })
      console.log(equipe)
      //updating team
        equipe.nome = name
        equipe.ativo = ativo
      //update end
      await equipe.save()
      
      console.log(equipe)  
    } catch (error) {
      console.log(error)
    }
    
  }

  function deleteEquipe(id) {
    const database = require('./db')
    const tabelas = require('./tabelas');

    try {
      await database.sync();
      
      const equipe = await tabelas.equipes.findAll({
        where: {
          idequipe: id      
        }
      })
      //team deletion
        equipe.ativo = 0;
      //deletion completed
      await equipe.save();  
    } catch (error) {
      console.log(error);
    }
    
  }


//! User CRUD
  function createUser(iduser, name, password, login, idequipe, ativo) {
    const database = require('./db')
    const tabelas = require('./tabelas');
    try {
      await database.sync();

      const novoUser = await tabelas.usuarios.create({
        idusuario: iduser,
        nome: name,
        password: password,
        login: login,
        idequipe: idequipe,
        ativo: ativo,
      })
      console.log(novoUser)  
    } catch (error) {
      console.log(error)
    }
    
  }

  function readUsers(all, id, ativo) {
    const database = require('./db')
    const tabelas = require('./tabelas');
    const usuarios;
    try {
      await database.sync();

    if(all == true) {
      usuarios = await tabelas.usuarios.findAll({
        where: {
          ativo: ativo
        }
      });
    } else {
      usuarios = await tabelas.usuarios.findAll({
        where: {
          ativo: ativo,
          idusuario: id
          }
        })
      };
    console.log(usuarios);  
    } catch (error) {
      console.log(error);
    }
    
  }

  function updateUser(iduser, name, password, login, idequipe, ativo) {
    const database = require('./db')
    const tabelas = require('./tabelas');
    try {
      await database.sync();
      
      const user = await tabelas.usuarios.findAll({
        where: {
          idusuario: iduser      
        }
      })

      console.log(user)
      
      //updating user
        user.nome = name;
        user.password = password;
        user.login = login;
        user.idequipe = idequipe;
        user.ativo = ativo;
      //udpate end
      await user.save();

      console.log(user)
    } catch (error) {
      console.log(error)
    }
    
  }


  function deleteUser(user) {
      const database = require('./db')
      const tabelas = require('./tabelas');
      try {
        await database.sync();
      
        const usuario = await tabelas.usuarios.findAll({
          where: {
            idusuario: user      
          }
        })

        usuario.ativo = 0;
        await usuario.save();  
      } catch (error) {
        console.log(error)
      }
      
  }


//? Exporting functions
module.exports = {
  createUser: createUser(),
  createEquipe: createEquipe(),
  readUsers: readUsers(),
  readEquipes: readEquipe(),
  updateUser: updateUser(),
  updateEquipe: updateEquipe(),
  deleteUser: deleteUser(),
  deleteEquipe: deleteEquipe()
}