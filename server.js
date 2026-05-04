const express = require("express");
const app = express();
const connectDB = require("./DB/db");

const hotelDataAddedToDb = require("./routes/dataimport.router")
const categoryDataAddedToDb = require("./routes/categoryimport.router")
const singleHotel = require("./routes/singlehotel.route")

const hotelRouter = require("./routes/hotel")
const categoryRouter = require("./routes/category.router")
const AuthRouter = require("./routes/auth.router");
const WishlistRouter = require("./routes/wishlist.router")

app.use(express.json());
connectDB();
app.get("/",(req,res)=>{
    res.send("Api is working");
})

app.use("/api/hotels",hotelRouter)
app.use("/api/category",categoryRouter)
app.use("/api/categories",categoryRouter)
app.use("/api/hoteldata",hotelDataAddedToDb)
app.use("/api/categorydata",categoryDataAddedToDb)
app.use("/api/hotel",singleHotel)
app.use("/api/auth",AuthRouter);
app.use("/api/wishlist",WishlistRouter);

app.listen(process.env.PORT || 8080,()=>{
    console.log("Server is up and running...")
})