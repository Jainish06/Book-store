import express from "express";
import { PORT } from "./config.js";
import { Book } from "./models/bookmodel.js";
import connectToMongo from "./database/db.js"
import bookRoute from "./Routes/bookRoute.js"
import cors from 'cors';
const app = express()
connectToMongo()
app.use(express.json());

app.use(cors());
// app.use(
//    cors({
//       origin: 'http://localhost:3000',
//       methods: ['GET', 'PUT', 'POST', 'DELETE'],
//       allowedHeaders: ['content-Type'],
//    })
// );

app.get('/', (request, response) => {
   console.log(request);
   return response.status(234).send('Hello')
});

app.use('/books', bookRoute);

app.listen(PORT, () => {
   console.log(`App listening to port : ${PORT}`);
});
//  import express from "express";
//  import { PORT, mongoDBURL } from "./config.js";
//  import mongoose  from "mongoose";
//  import { Book } from "./models/bookmodel.js";
//  import connectToMongo from "./database/db.js";

//  const app = express()

//  app.use(express.json());

//  app.get('/', (request, response) => {
//     console.log(request);
//     return response.status(234).send('Hello')
//  });

//  app.post('/books', async (request,response) => {
//    try{
//       if(
//          !response.body.title ||
//          !response.body.author ||
//          !response.body.publisYear
//       ) {
//          return response.status(400).send({
//             message: 'Send all required fileds: title, author, publishYear'
//          });
//       }
//       const newbook = {
//          title: response.body.title,
//          author: response.body.author,
//          publisYear: response.body.publisYear,
//       };

//       const book = await Book.create(newbook);

//       return response.status(201).send(book);

//    } catch(error){
//       console.log(error.message);
//       response.status(500).send({ message: error.message});
//    }
//  });

//  mongoose
//    .connect(mongoDBURL)
//    .then(() => {
//       console.log('App connected  to database');
//       app.listen(PORT, () => {
//          console.log(`App listening to port : ${PORT}`);
//       });
//    })
//    .catch((error) => {
//       console.log(error);
//    });
