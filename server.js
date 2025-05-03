const mongoose=require('mongoose');
const express=require('express');
const dotenv=require('dotenv');
const routes=require('./routes/routes');

dotenv.config();

const app=express();
app.use(express.json());
app.use("/",routes);

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB connected.");
    app.listen(process.env.PORT, () => {
      console.log(`Server running on port ${process.env.PORT}`);
    });
  })
  .catch(err => console.log(err));