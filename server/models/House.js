import mongoose from "mongoose";
const Schema = mongoose.Schema;

const House = new Schema(
  {
    homeType: { type: String },
    sqft: { type: Number },
    floors: { type: Number, required: true },
    bedrooms: { type: Number, required: true },
    bathrooms: { type: Number, required: true },
    price: { type: Number, required: true }
  },
  { timestamps: true, toJSON: { virtuals: true } }
)

export default House;