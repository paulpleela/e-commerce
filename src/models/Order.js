import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true, 
        maxlength: 60,       
    },
    address:{
        type: String,
        required: true, 
        maxlength: 200,
    },
    total: {
        type: Number,
        required: true,
    },
    status:{
        type: String,
        enum: ['Preparing', 'Shipping', 'Delivered'],
        default: 'Preparing',
    },
}, {timestamps: true});

export default mongoose.models.Order || mongoose.model("Order", OrderSchema);