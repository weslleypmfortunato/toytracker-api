import mongoose from "mongoose";

/**
 * name: String, obrigatório
 * collectedDate: Date, obrigatorio
 * manufacturingDate: Date,
 * value: Number, default: 0 
 */

const { Schema, model } = mongoose

const toySchema = new Schema({
    name: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String,
        default: 'https://via.placeholder.com/150'
    },
    collectedDate: {
        type: Date,
        required: true
    },
    manufacturingDate: {
        type: Date
    },
    value: {
        type: Number,
        default: 0
    }
}, { timestamps: true })

export default model('Toy', toySchema)