import "dotenv/config";
import express from "express";
import bodyParser from "body-parser";
import path from "path";
import models, { sequelize } from "./models";
import { checkDeveloper, treatQuery } from "./middleware";

const app = express();
const port = process.env.PORT || 5000;
const env = process.env.NODE_ENV || "development";

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/app", checkDeveloper, treatQuery, async (req, res) => {
  const { sort_field, sort_direction, page } = req.query;
  const allEntris = await models.getAllTask({
    sort_field,
    sort_direction,
    page
  });
  return res.json(allEntris);
});

app.post("/create", async (req, res) => {
  const { username, email, task, status } = req.body;
  const entry = await models.createOne({ username, email, task, status });
  return res.json(entry);
});

app.post("/edit/:id", async (req, res) => {
  const { id } = req.params;
  const { task, status } = req.body;
  const entry = await models.upDataOne({ id, task, status });
  return res.json(entry);
});

//* Server static assets if in production
if (process.env.NODE_ENV === "production") {
  // *Set static folder
  app.use(express.static("client/build"));

  app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

app.get("*", (req, res) =>
  res.json({
    status: "error",
    message: ""
  })
);

sequelize
  .sync({ force: 0 })
  .then(() => {
    app.listen(port, () => console.log(`Server running on port ${port}`));
  })
  .catch(err => console.log("DB Eror", err));

const createUsersWithMessages = ({ username, email, task }) => {
  models.createOne({ username, email, task });
};
