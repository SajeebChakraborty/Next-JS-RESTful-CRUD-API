import mongoose from 'mongoose';

const subcategoryModel = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    slug: String,
    category_id: String,
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

export const SubCategory=mongoose.models.subcategories || mongoose.model("subcategories",subcategoryModel)