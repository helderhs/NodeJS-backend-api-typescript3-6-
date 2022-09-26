import "reflect-metadata";
import express, { NextFunction, Request, Response } from "express";
import "express-async-errors";
import AppError from "./errors/AppError";
import { AppDataSource } from "../data-source";
import routes from "./routes";

AppDataSource.initialize().then(() => {
  const app = express();

  app.use(express.json());

  app.use(routes);

  app.use(
    (
      error: Error,
      request: Request,
      response: Response,
      next: NextFunction
    ) => {
      if (error instanceof AppError) {
        return response.status(error.statusCode).json({
          status: "error",
          message: error.message,
        });
      }

      return response.status(500).json({
        status: "error",
        message: "Internal server error: " + error.message,
      });
    }
  );

  console.log("Rodando em " + process.env.PORT);
  return app.listen(process.env.PORT);
});
