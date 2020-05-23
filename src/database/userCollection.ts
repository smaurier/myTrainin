import mongoose, { Schema } from 'mongoose';

const userSchema = new Schema({
    user_id: Number,
    email: String,
    password: String
}).set('toJSON', { virtuals: true });

export const userModel: mongoose.Model<mongoose.Document, {}> = mongoose.model('user', userSchema, 'user');

export interface userInterface extends mongoose.Document {
    user_id: Number,
    email: String,
    password: String
}

