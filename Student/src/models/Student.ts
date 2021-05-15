import { Schema, model } from 'mongoose';

const StudentSchema = new Schema({
  name: String,
  email: String,
  age: Number,
  birth_date: String,
  note1: Number,
  note2: Number,
  note3: Number,
  average: Number,
  status: String,
  created_at: { type: Date, default: Date.now },
});

export default model('Student', StudentSchema);
