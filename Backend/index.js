import express from "express";
import { PORT } from "./config.js";
import { Book } from "./models/bookmodel.js";
import connectToMongo from "./database/db.js"
const app = express()
connectToMongo()
app.use(express.json());

app.get('/', (request, response) => {
   console.log(request);
   return response.status(234).send('Hello')
});

app.post('/books', async (request, response) => {
   try {
      if (
         !res.body.title ||
         !res.body.author ||
         !res.body.publisYear
      ) {
         return response.status(400).send({
            message: 'Send all required fileds: title, author, publishYear'
         });
      }
      const newbook = {
         title: response.body.title,
         author: response.body.author,
         publisYear: response.body.publisYear,
      };

      const book = await Book.create(newbook);

      return response.status(201).send(book);

   } catch (error) {
      console.log(error.message);
      response.status(500).send({ message: error.message });
   }
});

app.listen(PORT, () => {
   console.log(`App listening to port : ${PORT}`);
});