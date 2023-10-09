const mongoose = require("mongoose");

uri =
  "mongodb+srv://rahulchouhan:uwS9JUj724Hi1iCC@fullstackapi.dbnlsbd.mongodb.net/rahuldb";

const connectDB = async () => {
  console.log("connected db");
  try {
    const conn = await mongoose.connect(uri);
    console.log(conn.connection.host);
  } catch (err) {
    console.log(err);
    process.exit(1)
  }
//   return mongoose.connect(uri, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   });
};

module.exports = connectDB;
