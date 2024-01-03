import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true, 
        maxlength: 60,       
    },
    description:{
        type: String,
        required: true, 
        maxlength: 200,
    },
    category: {
        type: String,
        enum: ['Tables', 'Chairs', 'Shelves', 'Lighting', 'Bedding', 'Decor'],
        required: true,
    },
    images:{
        type: [String],
        required: true, 
    },
    price:{
        type: Number,
        required: true,
    },
    options:{
        type: [
            {
                name: {type: String, required: true},
                hex: {type: Number, minlength: 6, maxlength: 6},
            }
        ],
    },
    popular:{
        type: Boolean,
        required: true,
    }
});

export default mongoose.models.Product || mongoose.model("Product", ProductSchema);