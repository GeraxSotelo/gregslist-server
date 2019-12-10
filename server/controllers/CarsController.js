import express from "express";
import carService from "../services/carService";

export default class CarController {
  constructor() {
    //NOTE  each route gets registered as a .get, .post, .put, or .delete, the first parameter of each method is a string to be concatinated onto the base url registered with the route in main. The second parameter is the method that will be run when this route is hit.
    this.router = express
      .Router()
      .get("", this.getAll)
      .get("/:id", this.getById)
      .post("", this.create)
      .put("/:id", this.edit)
      .delete("/:id", this.delete)
  }

  async getAll(req, res, next) {
    try {
      let data = await carService.getAll();
      return res.send(data);
    } catch (error) {
      next(error);
    }
  }

  async getById(req, res, next) {
    try {
      let data = await carService.getById(req.params.id)
      res.send(data)
    } catch (error) {
      next(error)
    }
  }

  create(req, res, next) {
    try {

    } catch (error) {
      next(error)
    }
  }

  edit(req, res, next) {
    try {

    } catch (error) {
      next(error)
    }
  }

  delete(req, res, next) {
    try {

    } catch (error) {
      next(error)
    }
  }
}
