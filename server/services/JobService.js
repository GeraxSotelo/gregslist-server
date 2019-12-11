import mongoose from "mongoose"
import Job from "../models/Jobs"

const _repository = mongoose.model("Job", Job)

class JobService {
  async getAll() {
    return await _repository.find({})
  }

  async getById(id) {
    let data = await _repository.findById(id);
    if (!data) {
      throw new Error("Invalid ID")
    }
    return data
  }

  async create(body) {
    return await _repository.create(body)
  }

  async edit(id, body) {
    let data = await _repository.findOneAndUpdate(id, body, { new: true });
    if (!data) {
      throw new Error("Invalid ID")
    }
    return data
  }

  async delete(id) {
    let data = await _repository.findOneAndDelete(id)
    if (!data) {
      throw new Error("Invalid ID")
    }
  }

}

const jobService = new JobService();
export default jobService;