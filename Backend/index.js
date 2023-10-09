
require("dotenv").config();
const express = require("express");
const app = express();

const connectDB = require("./db/connect");

app.use(express.json())
app.use(express.urlencoded({extended:true}))

const port = process.env.PORT || 4000;

const product_routes = require("./routes/productRoutes");
const learningnode = require("./controllers/learningNode");

app.use("/api/products", product_routes);
app.use("/api/learning",learningnode)

app.get("/", (req, res) => {
  res.send("hello world");
});

app.get("/api/testing", (req, res) => {
  const details = [
    {
      name: "rahul",
      skills: "Javascript",
    },
    {
      name: "Rehan",
      skills: "React",
    },
  ];
  res.json(details);
});

const start = async () => {
  try {
    await connectDB();
    app.listen(port, () => console.log(`server listing on ${port}`));
  } catch(error){
    console.log(error)
  }
};

start();
