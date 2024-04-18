"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateTask = exports.addTask = exports.deleteTask = exports.getTask = exports.getTasks = void 0;
const getTasks = (req, res) => {
    res.json({
        msg: "Get Tasks",
    });
};
exports.getTasks = getTasks;
const getTask = (req, res) => {
    const { id } = req.params;
    res.json({
        msg: "Get Task",
        id: id,
    });
};
exports.getTask = getTask;
const deleteTask = (req, res) => {
    const { id } = req.params;
    res.json({
        msg: "delete Task",
        id: id,
    });
};
exports.deleteTask = deleteTask;
const addTask = (req, res) => {
    const { body } = req;
    res.json({
        msg: "post Task",
        body,
    });
};
exports.addTask = addTask;
const updateTask = (req, res) => {
    const { body } = req;
    const { id } = req.params;
    res.json({
        msg: "update Task",
        id,
        body,
    });
};
exports.updateTask = updateTask;
