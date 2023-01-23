const { json } = require("express");
const Book = require("../models/Book.model");

module.exports.bookController = {
  addBook: (req, res) => {
    Book.create({
      name: req.body.name,
      author: req.body.author,
      janr: req.body.janr,
    })
      .then((data) => {
        res.json(data);
      })
      .catch((err) => res.json(err));
  },
  deleteBook: (req, res) => {
    Book.findByIdAndDelete(req.params.id)
      .then(() => {
        res.json("Книга удалена");
      })
      .catch(() => res.json("error"));
  },
  updateBook: (req, res) => {
    Book.findByIdAndUpdate(
      req.params.id,
      {
        name: req.body.name,
        author: req.body.author,
        janr: req.body.janr,
      }, { new: true }
    )
      .then((data) => {
        res.json(data);
      })
      .catch(() => res.json("error"));
  },
  getBookId: (req, res) => {
    Book.findById(req.params.id)
      .populate("author janr")
      .then((data) => {
        res.json(data);
      })
      .catch(() => res.json("error"));
  },
  getBook: (req, res) => {
    Book.find()
      .populate("author janr")
      .then((data) => {
        res.json(data);
      })
      .catch(() => res.json("error"));
  },
  getBookJanr: (req, res)=> {
    Book.find({janr: req.params.id}).then((data)=> {
        res.json(data)
    }).catch(()=> res.json('error'))
  },
};