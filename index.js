const express = require("express");
const mongoose = require("mongoose");

const app = express();
const port = 6500

app.use(express.json());
app.use(require("./routes/authors.route"));
app.use(require("./routes/books.route"));
app.use(require("./routes/janr.route"));
app.use(require("./routes/review.route"));

mongoose.connect("mongodb+srv://Intucod:Musaev10@cluster1.yro8beq.mongodb.net/Books", {
   

  }).then(() => console.log('Успешно соединились с сервером MongoDB'))
  .catch(() => console.log('Ошибка при соединении с сервером MongoDB'))


  app.listen(port, () => {
    console.log('Сервер запущен успешно')
  })