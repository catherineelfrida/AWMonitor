const sequelize = require("sequelize");
const db = new sequelize("db_awmonitor", "root", "", {
  dialect: "mysql",
  dialectOptions: {
    socketPath: `/cloudsql/awmonitor-351813:asia-southeast2:awmmysql`,
  },
});

module.exports = db;
