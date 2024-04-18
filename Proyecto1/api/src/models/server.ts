import express, { Application, Request, Response } from "express";
import routesTask from "../routes/task";
import db from "../db/connection";

class Server {
  private app: express.Application;
  private port: string;

  constructor() {
    this.app = express();
    this.port = process.env.PORT || "3001";
    this.listen();
    this.middlewares();
    this.routes();
    this.dbConnect();
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`Application is running on port ${this.port}`);
    });
  }

  routes() {
    this.app.get("/", (req: Request, res: Response) => {
      res.json({
        msg: "API WORKING",
      });
    });
    this.app.use("/api/tasks", routesTask);
  }

  middlewares() {
    this.app.use(express.json());
  }

  async dbConnect() {
    try {
      await db.authenticate();
      console.log("Database connected!");
    } catch (error) {
      console.log(error);
      console.log("Error connecting to the database!");
    }
  }
}

export default Server;
