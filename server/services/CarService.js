import mongoose from "mongoose";
import Car from "../models/Car";

const _repository = mongoose.model("Car", Car);

class CarService {
  getById(id) {
    throw new Error("Method not implemented.");
  }
  create(body) {
    throw new Error("Method not implemented.");
  }
  edit(id, body) {
    throw new Error("Method not implemented.");
  }
  delete(id) {
    throw new Error("Method not implemented.");
  }
  async getAll() {
    return await _repository.find({});
  }
}

const carService = new CarService();
export default carService;
