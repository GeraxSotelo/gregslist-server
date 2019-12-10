import express from "express"
export default class HousesController {
  constructor() {
    this.router = express.Router()
      .get("", this.getAll)
      .get("/:id", this.getById)
      .post("", this.create)
      .put("/:id", this.edit)
      .delete("/:id", this.delete);
  }
}