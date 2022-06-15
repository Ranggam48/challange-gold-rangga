const register = (req, res ) => {
    const userData = req.body;

    return res.status(201).json({
        message : 'Berhasil mendaftarkan user baru.',
        user : userData
    });
};


const login = (req, res) =>{
    const email = req.body.email;

    return res.status(201).json({
        message: "Berhasil login",
        user: email
    });
};


module.exports = {register, login};