// create database
app.get("/createdb", (req, res) => {
  let sql = "CREATE DATABASE Project3";
  connection.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send("Database created...");
  });
});

//create table
app.get("/createschedulestable", (req, res) => {
  let sql =
    "CREATE TABLE schedules(id INT AUTO_INCREMENT, username VARCHAR(255), dayofweek INT, start_time TIME, end_time TIME, PRIMARY KEY (id))";
  connection.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result);

    res.send("Schedules table created...");
  });
});

