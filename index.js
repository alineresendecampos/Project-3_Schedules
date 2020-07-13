const express = require("express");
const bodyParser = require("body-parser");
const exphbs = require("express-handlebars");
const dbconfig = require("./db/config");
const schedulesRoutes = require("./routes/schedules");

//init app
const app = express();

//Body parser middleware
app.use(bodyParser.json());

//Handlebars middleware template engines
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(schedulesRoutes);

//start server
const PORT = process.env.PORT || 3000;
app.listen("3000", () => {
  console.log(`Server running on port ${PORT}`);
});
