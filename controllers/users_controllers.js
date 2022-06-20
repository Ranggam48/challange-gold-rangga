const { users: User } = require('../models');


//--------------------Handler untuk registrasi-------------------/
const register = async (req, res ) => {
    try {
        const newUser = {
          name: req.body.name,
          email: req.body.email,
          pass: req.body.password
        };
    
        await User.create(newUser);
      
        return res.status(201).json({
          message: 'Berhasil mendaftarkan user baru.',
          user_email: newUser.email
        })
      } catch (err) {
        return res
          .status(err.status || 500)
          .json({
            message: err.message || 'Internal server error.',
          })
      }
};



//---------------------Handler untuk login-----------------------//
const login = async (req, res) => {

  try {
    let user = await User.findOne({
      attributs: ['id', 'name', 'email'],
      where: {
        email: req.body.email,
        pass: req.body.password
      }
    });

    user = user?.dataValues;

    if(!user)throw{
      status: 400,
      message: 'User name atau password tidak sesuai'
    }

    return res.status(201).json({
      message: "Berhasil login",
      user: req.body.email
  });

  } catch (error) {
    return res
    .status(error.status||500)
    .json({message: error.message||'internal server error'})
  }

};



//--------------------------Handler untuk update password------------------------//
const updatePassword = async(req, res) => {
  try {
    await User.update({pass: req.body.password},{
      where: {
        id: req.body.id
      }
    });

    return res.status(200).json({message: `berhasil merubah password menjadi = ${req.body.password}`});

  } catch (error) {
    return res
    .status(error.status||500)
    .json({message: error.message||'internal server error'});
  }
}

module.exports = {register, login, updatePassword}