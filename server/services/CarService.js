import mongoose from "mongoose";
import Car from "../models/Car";

const _repository = mongoose.model("Car", Car);

class CarService {
  async getAll() {
    return await _repository.find({});
  }
  async getById(id) {
    let data = await _repository.findById(id)
    if (!data) {
      throw new Error("Invalid ID")
    }
    return data
  }
  async create(body) {
    let data = await _repository.create(body)
    return data
  }
  async edit(id, body) {
    let data = await _repository.findOneAndUpdate({ _id: id }, body, { new: true });
    if (!data) {
      throw new Error("Invalid ID")
    }
    return data;
  }
  async delete(id) {
    let data = await _repository.findOneAndDelete({ _id: id })
    if (!data) {
      throw new Error("Invalid ID")
    }
  }

}

const carService = new CarService();
export default carService;
