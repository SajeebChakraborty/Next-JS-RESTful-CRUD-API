const mongoose = require('mongoose');

const productModel = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    user_id: String,
    category_id: String,
    subcategory_id: String,
    images: [String], // Array of image URLs or metadata
    slug: String,
    description: String,
    price: {
        type: Number,
        required: true,
    },
    is_negotiable: Boolean,
    rating: {
        type: Number,
        default: 0, // Default value is set to 0
    },
    is_sold: {
        type: Boolean,
        default: 0, // Default value is set to 0
    },
    is_shipping: {
        type: Boolean,
        default: 0, // Default value is set to 0
    },
    amount_of_view: {
        type: Number,
        default: 0, // Default value is set to 0
    },
    status: {
        type: Number,
        default: 1, // Default value if not provided
        enum: [0, 1], // Example: Only allow values  1=active, or 0=inactive
    },
    is_delete: {
        type: Boolean,
        default: 0, // Default value is set to 0
    },
    created_at: {
        type: Date,
        default: Date.now,
    },
});

export const Product = mongoose.models.products || mongoose.model("products", productModel)