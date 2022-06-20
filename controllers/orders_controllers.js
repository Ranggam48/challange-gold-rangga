const { orders: OrderModel } = require('../models');
const { items: ItemModel } = require('../models');


//--------------Handler untuk menampilkan semua order-----------------//
const getAllOrder = async(req, res) => {

  try {
    const allOrder = await OrderModel.findAll();
    return res
    .status(200)
    .json({
      message: `Berhasil menampilkan semua order`,
      data: allOrder
    })
  } catch (error) {
    return res
    .status(error.status ||  500)
    .json({ message: error.message || 'Internal server error' })
  }
  
    return res.status(200).json({
        message: "Berhasil mendapatkan Post"
    });
};


//---------------Handler untuk menampilkan order berdasarkan id------------//
const getOrder = async(req, res) => {

  try {
    const order = await OrderModel.findOne({
      where: {
        id: req.body.id
      }
    })
    return res.status(200).json({
        message: `Berhasil mendapatkan Post dengan id ${req.body.id}.` ,
        data: order
       });    
  } catch (error) {
    
  }
};


//-------------handler untuk membuat order---------------//
const createOrder = async (req, res) => {
    try {
        // 1. Dapatkan data item yg diminta (termasuk validasi item ada atau tidak)
        const orderItem = await ItemModel.findOne({
          where: {
            id: req.body.item_id
          }
        });
    
        const newOrder = {
          cust_id: req.body.cust_id,
          item_id: req.body.item_id,
          qty: req.body.qty,
          // nilai amount = price dari item yg diminta + request qty
          amount: orderItem.dataValues.price * req.body.qty,
        }
      
        await OrderModel.create(newOrder);
      
        return res.status(201).json({
          message: 'Berhasil membuat Order'
        })
      } catch (err) {
        return res
          .status(error.status ||  500)
          .json({ message: error.message || 'Internal server error' })
      }
};



//----------------Handler untuk mengupdate order-------------------//
const updateOrder = async(req, res ) => {

  try {
    await OrderModel.update({qty: req.body.qty},
    {
    where: {id: req.body.id}
    },
    )
    return res
    .status(200)
    .json({
        message: "Berhasil mengubah post."
    });
} catch (error) {
  return res
  .status(error.status ||  500)
  .json({ message: error.message || 'Internal server error' })
  }
};



const deleteOrder = async(req, res) => {

  try {
    await OrderModel.drop({
      where:{
        id: req.body.id
      }
    })
    return res.status(200).json({
      message: "Berhasil menghapus post."
  });
  } catch (error) {
    return res
    .status(error.status ||  500)
    .json({ message: error.message || 'Internal server error' })
  }

};

module.exports = {
getAllOrder,
getOrder,
createOrder,
updateOrder, 
deleteOrder
};
