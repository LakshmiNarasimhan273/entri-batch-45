const productModel = require("../models/products.model");

// api function logics
const getallProducts = async (req, res) => {
    try{
        const products = await productModel.find();

        if(products.length === 0){
            return res.status(404).json({success: false, message: "No products found at this moment"});
        }
        res.status(200).json({success: true, count: products.length ,products});
    }catch(err){
        res.status(500).json({success: false, message: err.message});
    }
};

// get by id

const addProduct = async (req, res) => {
    try{
        const {title, price} = req.body;

        // basic validation
        if(!title || !price){
            return res.status(400).json({success: false, message: "Both the fields are required"});
        }
        const newProduct = await productModel.create({title, price});
        
        res.status(201).json({success:true, newProduct});
    }catch(err){
        res.status(500).json({success: false, message: err.message});
    }
}

const updateProduct = async (req, res) => {
    try{
        // error handling -> duplicate id

        const updatedProduct = await productModel.findByIdAndUpdate(
            req.params.id,
            req.body,
            {new: true}
        );
        res.status(200).json({success: true, updatedProduct});

    }catch(err){
        res.status(500).json({success: false, message: err.message});
    }
}

const deleteProduct = async (req, res) => {
    try{
        await productModel.findByIdAndDelete(req.params.id);
        res.status(200).json({success: true, message: "Product removed"});
    }catch(err){
        res.status(500).json({success: false, message: err.message});
    }
}

module.exports = {getallProducts, addProduct, updateProduct, deleteProduct};