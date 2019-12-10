import mongoose from "mongoose";
const Schema = mongoose.Schema;

const Car = new Schema(
  {
    make: { type: String, required: true },
    model: { type: String, required: true },
    price: { type: Number, required: true },
    year: { type: Number, min: 1800, max: Date.now() + 1 },
    imgUrls: [{ type: String, }],
    description: { type: String, maxlength: 140 }
  },
  { timestamps: true, toJSON: { virtuals: true } }
);

export default Car;
