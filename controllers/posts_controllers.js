const getAllPost = (req, res) => {
    return res.status(200).json({
        message: "Berhasil mendapatkan Post"
    });
};

const getPost = (req, res) => {
    return res.status(200).json({
        message: `Berhasil mendapatkan Post dengan id ${req.param.id}.` 
       });
};

const createPost = async (req, res) => {
    return res.status(201).json({
        message: "Berhasil membuat post."
    });
};

const updatePost = (req, res ) => {
    return res.status(200).json({
        message: "Berhasil mengubah post."
    });
};

const deletePost = (req, res) => {
    return res.status(200).json({
        message: "Berhasil menghapus post."
    });
};

module.exports = {
getAllPost,
getPost,
createPost,
updatePost, 
deletePost
};
