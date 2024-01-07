import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true, 
        minLength: 1,
        maxLength: 60,       
    },
    description:{
        type: String,
        required: true, 
        minLength: 1,
        maxLength: 200,
    },
    category: {
        type: String,
        enum: ['tables', 'chairs', 'shelves', 'lighting', 'decor'],
        required: true,
    },
    images:{
        type: [String],
        required: true, 
    },
    price:{
        type: Number,
        required: true,
        min: 0,
    },
    popular:{
        type: Boolean,
        default: false,
    }
});

const OrderSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true, 
        minLength: 1,
        maxLength: 60,       
    },
    address:{
        type: String,
        required: true, 
        minLength: 1,
        maxLength: 200,
    },
    total: {
        type: Number,
        required: true,
        min: 0,
    },
    status:{
        type: String,
        enum: ['preparing', 'shipping', 'delivered'],
        default: 'preparing',
    },
}, {timestamps: true});

export const Products = mongoose.models.products || mongoose.model("products", ProductSchema);
export const Orders = mongoose.models.orders || mongoose.model("orders", OrderSchema);