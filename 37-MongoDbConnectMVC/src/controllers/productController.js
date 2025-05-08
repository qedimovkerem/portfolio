import product from "../models/productModel.js";
import mongoose from "mongoose";

export const addProduct= async(req,res)=>{    
    try {
        let newUser =new product(req.body);
        await newUser.save();
        return res.status(201).send("Product create succes",newUser);
    } catch (error) {
        return res.status(500).send("server error")
    }
};

export const getProducts=async(req,res)=>{
    try {
        let products=await product.find();
        res.status(200).send(products)
    } catch (error) {
        return res.status(500).send("server error")
    }
};

export const getProductById=async(req,res)=>{
    const {id} = req.params;

    try {
        let findProduct=await product.findById(id);
        if (!findProduct) {
            res.status(404).send("product not found")
        }
        res.status(200).send(findProduct);
    } catch (error) {
        return res.status(500).send("server error")
    }
};

export const deleteProduct=async(req,res)=>{
    let {id} = req.params

    try {
        let deletedProduct =await product.findByIdAndDelete(id)

        if (!deletedProduct) {
            res.status(400).send("product not deleted")
        }
        res.status(200).send("product deleted succes")
    } catch (error) {
        return res.status(500).send("server error")
    }
};
 
export const  updateProduct =async(req,res)=>{
    let {id} =req.params;
    try {
        let newProduct=res.body
        let uptadeProduct =await product.findByIdAndUpdate(id,newProduct);

        if (!updateProduct) {
            res.status(400).send("product not updated")
        }
        res.status(200).send({message:"product update succes",newProduct})
    } catch (error) {
        return res.status(500).send("server error")
    }
};