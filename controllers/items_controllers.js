const { items } = require('../models');
const { Op } = require("sequelize");



//-----------------------Handler untuk add item----------------//
const addItem = async(req, res) =>{

    try {
        if(!req.body.name)throw{
            status: 400,
            message: "parameter name tidak boleh kosong"
        }

        if (!req.body.price)throw{
            status: 400,
            message: 'parameter price tidak boleh kosong.'
          }

        const newItem = {
            name: req.body.name,
            price: req.body.price
        }

        await items.create(newItem);

        return res.status(201).json({
            message: `Berhasil menambahkan item dengan nama ${newItem.name}`
        });

    } catch (err) {
        return res
        .status(err.status||500)
        .json({message: err.message || 'internal server error'});
    };    
};



//----------------Handler untuk menampilkan item berdasarkan ID-----------//
const getByID = async(req, res)=>{

    try {

        const item = await items.findOne({
            where:{id: req.body.id}
        });
        return res.status(200).json({
            message: `Berhasil mendapatkan item dengan id: ${id}`,
            data: {
                item
            }
        });
        
    } catch (error) {
        return res
        .status(error.status||500)
        .json({message: error.message || 'internal server error'});
    }  

};



//-------------Handler untuk menampilkan semua item-------------//
const getAllItem = async(req, res) => {

    try {
        const allItem = await items.findAll();
        return res.status(200).json({
        message: "Berhasil mendapatkan semua item",
        data: [
            allItem
        ]
    });        
    } catch (error) {
        return res
        .status(error.status||500)
        .json({message: error.message || 'internal server error'});
    }    
};



//---------------Handler untuk mengupdate item berdasarkan ID------------------//
const updateItem = async(req, res) => {

    try {
       let updateItem = await items.update({
            name: req.body.name,
            price: req.body.price
        },{
            where:{
                id: req.body.id
            },
        }); 
        return res
        .status(200)
        .json({
            message:`Berhasil mengupdate item dengan id: ${req.body.id}`,
            //data: [updateItem]
        })
    } catch (error) {
        return res
        .status(error.status||500)
        .json({message: error.message || 'internal server error'});
    }
};


module.exports = {
    addItem,
    getByID,
    getAllItem,
    updateItem
};