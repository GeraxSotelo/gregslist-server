import mongoose from "mongoose"
import House from "../models/House"

const _repository = mongoose.model("House", House)
class HouseService {
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
    return await _repository.create(body)
  }

  async edit(id, update) {
    let data = await _repository.findOneAndUpdate({ _id: id }, update, { new: true })
    if (!data) {
      throw new Error("Invalid ID")
    }
    return data
  }

  async delete(id) {
    let data = await _repository.findOneAndDelete({ _id: id })
    if (!data) {
      throw new Error("Invalid ID")
    }
  }

}

const houseService = new HouseService();
export default houseService;