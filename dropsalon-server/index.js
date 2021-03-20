// Node modules
const express = require("express");
var sqlite3 = require("sqlite3").verbose();
var md5 = require("md5");
var validator = require("email-validator");
var jwt = require("jsonwebtoken");
var cors = require("cors");

// Server constants
const JWT_SECRET = "s3cr3t";
const PORT = 4000;
const app = express();
var db = new sqlite3.Database("./dropsalon.db");

// Configuration
app.use(express.json({ type: "application/json" })); // for parsing application/json
app.use(cors());

/*Rest Api Get Methods*/
app.get("/", function (req, res) {
  res.send("Test");
});
app.get("/user", function (req, res) {
  db.all("SELECT * FROM users;", function (err, row) {
    if (err) {
      console.error(err.message);
      res.sendStatus(500);
    } else {
      if (row === []) {
        res.sendStatus(404);
      } else {
        console.log(row);
        res.status(200).send(row);
      }
    }
  });
});
app.get("/reportes", function (req, res) {
  db.all("SELECT * FROM reportes ORDER BY employee_name;", function (err, row) {
    if (err) {
      console.error(err.message);
      res.sendStatus(500);
    } else {
      if (row === []) {
        res.sendStatus(404);
      } else {
        console.log(row);
        res.status(200).send(row);
      }
    }
  });
});

app.get("/citas", function (req, res) {
  if (!req.headers.authorization) {
    return res.json({ error: "No credentials sent!" });
  } else {
    jwt.verify(
      req.headers.authorization.split(" ")[1],
      JWT_SECRET,
      function (err, decoded) {
        if (err) {
          res.sendStatus(403);
        } else {
          console.log(decoded);
          if (decoded.role == 1) {
            db.all("SELECT * FROM citas;", function (err, row) {
              if (err) {
                console.error(err.message);
                res.sendStatus(500);
              } else {
                if (row === []) {
                  res.sendStatus(404);
                } else {
                  console.log(row);
                  res.status(200).send(row);
                }
              }
            });
          }
          else if (decoded.role == 2) {
            let name = decoded.name
            db.all("SELECT * FROM citas WHERE employee_name = ?;",
              [name],
              function (err, row) {
                if (err) {
                  console.error(err.message);
                  res.sendStatus(500);
                } else {
                  if (row === []) {
                    res.sendStatus(404);
                  } else {
                    console.log(row);
                    res.status(200).send(row);
                  }
                }
              }
            );
          }
        }
      }
    );
  }
});

app.get("/citas/:EmployeeName", function (req, res) {
  db.all(
    "SELECT * FROM citas WHERE employee_name = ?;",
    [req.params.EmployeeName],
    function (err, row) {
      if (err) {
        console.error(err.message);
        res.sendStatus(500);
      } else {
        if (row === undefined) {
          res.sendStatus(404);
        } else {
          console.log(row);
          res.status(200).send(
            row
          );
        }
      }
    }
  );
});

app.get("/user/role/employee", function (req, res) {
  db.all(
    "SELECT name, last_name FROM users WHERE role NOT IN (1, 3);",
    [req.params.userROLE],
    function (err, row) {
      if (err) {
        console.error(err.message);
        res.sendStatus(500);
      } else {
        if (row === undefined) {
          res.sendStatus(404);
        } else {
          console.log(row);
          res.status(200).send(
            row
          );
        }
      }
    }
  );
});
app.get("/user/:userID", function (req, res) {
  db.get(
    "SELECT name, last_name, email, role FROM users WHERE id = ?;",
    [req.params.userID],
    function (err, row) {
      if (err) {
        console.error(err.message);
        res.sendStatus(500);
      } else {
        if (row === undefined) {
          res.sendStatus(404);
        } else {
          console.log(row);
          res.status(200).send(
            row
          );
        }
      }
    }
  );
});
app.get("/services", function (req, res) {

  db.all("SELECT * FROM services;", function (err, row) {
    if (err) {
      console.error(err.message);
      res.sendStatus(500);
    } else {
      if (row === []) {
        res.sendStatus(404);
      } else {
        console.log(row);
        res.status(200).send(row);
      }
    }
  });

});

app.get("/services/:servicesID", function (req, res) {
  db.get(
    "SELECT name, last_name, created_at, email, role FROM users WHERE id = ?;",
    [req.params.servicesID],
    function (err, row) {
      if (err) {
        console.error(err.message);
        res.sendStatus(500);
      } else {
        if (row === undefined) {
          res.sendStatus(404);
        } else {
          console.log(row);
          res.status(200).send({
            service_name: row.service_name,
            service_description: row.service_description,
            duration: row.duration,
            price: row.price,
          });
        }
      }
    }
  );
});

/*Rest Api Post Methods*/
app.post("/signup", function (req, res) {
  if (
    req.body.name === "" ||
    req.body.last_name === "" ||
    req.body.email === "" ||
    req.body.password === "" ||
    !validator.validate(req.body.email)
  ) {
    console.error({ error: "Fields cannot be empty" });
    res.status(500).send({error: "Fields cannot be empty"})
  } else {
    db.run(
      "SELECT email FROM users WHERE email = $email;",
      [req.params.email],
     [req.body.email],
      function (err, row) {
        if (err) {
          console.log({ error: "Email already taken" });
        } else {
          if (row === undefined) {
            db.run(
              "INSERT INTO users (name, last_name, created_at, email, password, role) VALUES ($name, $last_name, CURRENT_TIMESTAMP, $email, $password, 3);",
              {
                $name: req.body.name,
                $last_name: req.body.last_name,
                $email: req.body.email,
                $password: md5(req.body.password),
              },
              function (err) {
                if (err) {
                  console.error(err.message);
                  res.sendStatus(500);
                } else {
                  console.log(this.lastID);
                  res.sendStatus(201);
                }
              }
            );
          } else {
            console.error(row);
            res.sendStatus(422);
          }
        }
      }
    );
  }
});
app.post("/login", function (req, res) {
  if (req.body.email === "" || req.body.password === "") {
    console.log(400)
    res.status(400).send({ error: "Credential fields cannot be empty" });
  } else if (!validator.validate(req.body.email)) {
    console.log(err.message);
    console.log({ error: "Wrong email address format" });
  } else {
    db.get(
      "SELECT name, last_name, email, password, role FROM users WHERE email = ?;",
      [req.body.email],
      function (err, row) {
        if (err) {
          console.error(err.message);
          res.sendStatus(500);
        } else {
          if (row === undefined) {
            res.status(400).send({ error: "Wrong credentials" });
          } else {
            if (
              row.email === req.body.email &&
              row.password === md5(req.body.password)
            ) {
              // Sign token and send
              var token = jwt.sign(
                { name: row.name, last_name: row.last_name, role: row.role },
                JWT_SECRET,
                { expiresIn: "1d" }
              );
              res.status(200).send({ jwt: token });
            } else {
              res.status(400).send({ error: "Wrong credentials" });
            }
          }
        }
      }
    );
  }
});
app.post("/verify", function (req, res) {
  if (req.body.jwt === "") {
    res.sendStatus(400);
  } else {
    try {
      jwt.verify(req.body.jwt, JWT_SECRET);
      res.sendStatus(200);
    } catch (error) {
      res.sendStatus(403);
    }
  }
});
app.post("/services", function (req, res) {

  db.run(
    "INSERT INTO services (service_name, service_description, duration, price) VALUES ($service_name, $service_description, $duration, $price);",
    {
      $service_name: req.body.service_name,
      $service_description: req.body.service_description,
      $duration: req.body.duration,
      $price: req.body.price,
    },
    function (err, row) {
      if (err) {
        console.error(err.message);
        res.sendStatus(500);
      } else {
        console.log("Service created");
        res.sendStatus(201);
      }
    }
  );

});

app.post("/citas", function (req, res) {
  db.run(
    "INSERT INTO citas (date_rsvp, hour, comments, user_name, employee_name, serviceType) VALUES ($date_rsvp, $hour, $comments, $user_name, $employee_name, $serviceType);",
    {
      $date_rsvp: req.body.date_rsvp,
      $hour:req.body.hour,
      $comments: req.body.comments,
      $user_name: req.body.user_name,
      $employee_name: req.body.employee_name,
      $serviceType: req.body.serviceType
    },
    function (err, row) {
      if (err) {
        console.error(err.message);
        res.sendStatus(500);
      } else {
        console.log("cita created");
        res.sendStatus(201);
      }
    }
  );

});
app.post("/reportes", function (req, res) {
  db.run(
    "INSERT INTO reportes (employee_name, service_total, gains_employee, gains_salon, gains_admin) VALUES ($employee_name, $service_total, $gains_employee, $gains_salon, $gains_admin);",
    {
      $employee_name: req.body.employee_name,
      $service_total: req.body.service_total,
      $gains_employee: req.body.gains_employee,
      $gains_salon: req.body.gains_salon,
      $gains_admin: req.body.gains_admin
    },
    function (err, row) {
      if (err) {
        console.error(err.message);
        res.sendStatus(500);
      } else {
        console.log("report created");
        res.sendStatus(201);
      }
    }
  );

});

/*Rest Api Delete Methods*/
app.delete("/services/:serviceID", function (req, res) {
  if (!req.headers.authorization) {
    return res.json({ error: "No credentials sent!" });
  } else {
    jwt.verify(
      req.headers.authorization.split(" ")[1],
      JWT_SECRET,
      function (err, decoded) {
        if (err) {
          res.sendStatus(403);
        } else {
          console.log(decoded);
          if (decoded.role == 1) {
            db.run(
              "DELETE FROM services WHERE id = ?",
              req.params.serviceID,
              function (err, row) {
                if (err) {
                  console.error(err.message);
                  res.sendStatus(500);
                } else {
                  if (row === []) {
                    res.sendStatus(404);
                  } else {
                    console.log(row);
                    res.sendStatus(200);
                  }
                }
              }
            );
          }
        }
      }
    );
  }
});

app.delete("/user/:userID", function (req, res) {
  if (!req.headers.authorization) {
    return res.json({ error: "No credentials sent!" });
  } else {
    jwt.verify(
      req.headers.authorization.split(" ")[1],
      JWT_SECRET,
      function (err, decoded) {
        if (err) {
          res.sendStatus(403);
        } else {
          console.log(decoded);
          if (decoded.role == 1) {
            db.run(
              "DELETE FROM users WHERE id = ?",
              req.params.userID,
              function (err, row) {
                if (err) {
                  console.error(err.message);
                  res.sendStatus(500);
                } else {
                  if (row === []) {
                    res.sendStatus(404);
                  } else {
                    console.log(row);
                    res.sendStatus(200);
                  }
                }
              }
            );
          }
        }
      }
    );
  }
});
app.delete("/citas/:citaID", function (req, res) {
  db.run(
    "DELETE FROM citas WHERE id = ?",
    req.params.citaID,
    function (err, row) {
      if (err) {
        console.error(err.message);
        res.sendStatus(500);
      } else {
        if (row === []) {
          res.sendStatus(404);
        } else {
          console.log(row);
          res.sendStatus(200);
        }
      }
    }
  );
});

app.delete("/reportes/:reporteID", function (req, res) {
  if (!req.headers.authorization) {
    return res.json({ error: "No credentials sent!" });
  } else {
    jwt.verify(
      req.headers.authorization.split(" ")[1],
      JWT_SECRET,
      function (err, decoded) {
        if (err) {
          res.sendStatus(403);
        } else {
          console.log(decoded);
          if (decoded.role == 1) {
            db.run(
              "DELETE FROM reportes WHERE id = ?",
              req.params.reporteID,
              function (err, row) {
                if (err) {
                  console.error(err.message);
                  res.sendStatus(500);
                } else {
                  if (row === []) {
                    res.sendStatus(404);
                  } else {
                    console.log(row);
                    res.sendStatus(200);
                  }
                }
              }
            );
          }
        }
      }
    );
  }
});

/*Rest Api Put Methods*/
app.put("/user/role/:userID", function (req, res) {

  db.run(
    "UPDATE users SET role = 2 WHERE id = ?",
    req.params.userID,
    function (err, row) {
      if (err) {
        console.error(err.message);
        res.sendStatus(500);
      } else {
        if (row === []) {
          res.sendStatus(404);
        } else {
          console.log(row);
          res.sendStatus(200);
        }
      }
    }
  );

});


// Server start
console.log("Running on port " + PORT);
app.listen(PORT);

// To test on dev computer the address for the app
// localhost:#### or 127.0.0.1:####
