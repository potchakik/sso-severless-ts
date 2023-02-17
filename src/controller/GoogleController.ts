import { AppDataSource } from "../data-source";
import { NextFunction, Request, Response } from "express";
import { Google } from "../entity/Google";

export class GoogleController {
  private googleRepository = AppDataSource.getRepository(Google);

  async all(request: Request, response: Response, next: NextFunction) {
    console.log("GOOGLE");

    return this.googleRepository.find();
  }
}
