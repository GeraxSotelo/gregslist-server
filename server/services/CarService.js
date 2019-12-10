import mongoose from "mongoose";
import Car from "../models/Car";

const _repository = mongoose.model("Car", Car);

class ValueService {
  async getAll() {
    return await _repository.find({});
  }
}

const valueService = new ValueService();
export default valueService;
