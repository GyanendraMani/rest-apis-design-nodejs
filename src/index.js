
const express = require('express');
const bodyParser = require("body-parser");

const v1Router = require('./v1/routes');
const v1WorkoutRouter = require("./v1/routes/workoutRoutes");



const app = express();
const PORT = process.env.PORT || 3050;

// app.get("/", (req, res)=> {
//     res.send("<h2>It's Working!</h2>"); 
// });

app.use(bodyParser.json());
// ***** routes for v1 **************
app.use("/api/v1/workouts", v1WorkoutRouter);


app.listen(PORT, () => {
    console.log(`API is listening on URL http://localhost:${PORT}`);
})