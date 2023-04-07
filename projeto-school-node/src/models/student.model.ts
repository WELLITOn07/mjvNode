import mongoose, { Schema } from "mongoose";

export const studentsSchema = new Schema({
  name: {
    type: String
  },
  email: {
    type: String
  },
  document: {
    type: String
  },
  password: {
    type: String
  },
  age: {
    type: Number
  },
  createdAt: {
    type: Date,
    default: new Date()
  }
});

export const Student = mongoose.model('Student', studentsSchema);
