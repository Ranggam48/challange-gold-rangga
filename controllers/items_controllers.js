const client = require('../config/db');

const addItem = (req, res) =>{

    client.query(`
    INSERT INTO items(name, price)
    VALUES('sepatu', 50000)`,    
    (err, res) => {
        console.log(err, '<<<<<<<<');

    });

    const itemName = req.body.itemName;

    return res.status(201).json({
        message: `Berhasil membuka item dengan nama ${itemName}`
    });
};

const getByID = (req, res)=>{
    return res.status(200).json({
        message: "Berhasil mendapatkan item",
        data: {
            id: req.params.id,
            name: 'Iphone 10',
            price: 10000
        }
    });
};

const getAllItem = (req, res) => {
    return res.status(200).json({
        message: "Berhasil mendapatkan semua item",
        data: [
            {id: 1, name: "Iphone 10"},
            {id: 2, name: "Samsung Ultra Light"}
        ]
    });
};

const updateItem = (res, req) => {
    const itemID = req.params.id;
    const price = req.body.price;

    return res.status(200).json({
        message: `Berhasil merubah item dengan id: ${itemID}.`,
        newPrice: price
    });
};


module.exports = {
    addItem,
    getByID,
    getAllItem,
    updateItem
};