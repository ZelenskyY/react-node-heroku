import Sequelize from "sequelize";

const sequelize = new Sequelize(
  process.env.DATABASE,
  process.env.DATABASE_USER,
  process.env.DATABASE_PASSWORD,
  {
    dialect: "postgres"
  }
);

const Task = sequelize.define("task", {
  username: {
    type: Sequelize.STRING
  },
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    unique: true
  },
  email: {
    type: Sequelize.STRING,
    isEmail: true
  },
  task: {
    type: Sequelize.STRING
  },
  status: {
    type: Sequelize.INTEGER
  }
});

Task.createOne = async ({ username, email, task, status }) => {
  try {
    const entry = await Task.create({
      username,
      email,
      task,
      status
    });
    return entry;
  } catch (err) {
    return { status: "error" };
  }
};

Task.getAllTask = async ({ sort_field, sort_direction, page }) => {
  try {
    const entities = await Task.findAll({
      limit: 3,
      offset: page,
      order: [[sort_field, sort_direction]]
    });
    return { task: [...entities] };
  } catch (e) {
    return { status: "error" };
  }
};

Task.upDataOne = async ({ id, task, status }) => {
  let newData = {};
  if (task) newData = { task };
  if (status) newData = { ...newData, status };
  try {
    await Task.update(newData, {
      where: {
        id
      }
    });
    return { status: "ok" };
  } catch (err) {
    return { status: "error" };
  }
};

export { sequelize };
export default Task;
