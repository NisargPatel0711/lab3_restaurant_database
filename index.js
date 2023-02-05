const express = require("express");
const mongoose = require("mongoose");
const restaurantRouter = require("./routes/RestaurantRoutes.js");

const app = express();
app.use(express.json()); // Make sure it comes back as json
mongoose.set('strictQuery', false);

// TODO - Replace you Connection String here
mongoose
    .connect(
        "mongodb+srv://nisarg0711:nishu@cluster0.c6toxmm.mongodb.net/comp3133-lab03?retryWrites=true&w=majority",
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        }
    )
    .then((success) => {
        console.log("Success Mongodb connection");
    })
    .catch((err) => {
        console.log("Error Mongodb connection");
    });

app.use(restaurantRouter);

app.listen(3000, () => {
    console.log("Server is running...");
});
