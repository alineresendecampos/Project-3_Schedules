const express = require("express");
const Router = express.Router();
const dbconfig = require("../db/config");

//homepage route
Router.get("/", (req, res) => {
  dbconfig.query(
    "SELECT username, dayofweek, TIME_FORMAT(start_time, '%H:%i') as start_time, TIME_FORMAT(end_time, '%H:%i') as end_time FROM schedules",
    (err, results) => {
      if (err) throw err;
      console.log(results);
      res.render("index", {
        title: "Schedules",
        results,
        day: {
          1: "Monday",
          2: "Tuesday",
          3: "Wednesday",
          4: "Thursday",
          5: "Friday",
        },
      });
    }
  );
});

//add new schedule
Router.get("/new", (req, res) => {
  res.render("form", { title: "Add a new schedule" });
});

Router.post("/new", (req, res) => {
  let post = {
    username: req.body.username,
    dayofweek: req.body.dayofweek,
    start_time: req.body.start_time,
    end_time: req.body.end_time,
  };
  let sql = "INSERT INTO schedules SET ?";
  let query = dbconfig.query(sql, post, (err, result) => {
    if (err) throw err;
    res.redirect("/");
  });
});

module.exports = Router;
