import { Request, Response } from "express";

export const getTasks = (req: Request, res: Response) => {
  res.json({
    msg: "Get Tasks",
  });
};

export const getTask = (req: Request, res: Response) => {
  const { id } = req.params;

  res.json({
    msg: "Get Task",
    id: id,
  });
};

export const deleteTask = (req: Request, res: Response) => {
  const { id } = req.params;

  res.json({
    msg: "delete Task",
    id: id,
  });
};

export const addTask = (req: Request, res: Response) => {
  const { body } = req;

  res.json({
    msg: "post Task",
    body,
  });
};

export const updateTask = (req: Request, res: Response) => {
  const { body } = req;
  const { id } = req.params;
  res.json({
    msg: "update Task",
    id,
    body,
  });
};
