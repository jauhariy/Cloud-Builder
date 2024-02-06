import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const sampleSchema = new Schema({
  name: String,
  createdAt: Date,
});

const Sample = model('Sample', sampleSchema);
export default Sample;