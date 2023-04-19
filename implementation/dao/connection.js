const { Pool } = require("pg");
const secretManager = require("../tool/secret-manager");

module.exports = {
  pool: undefined,
  ready: false,
  init: async function () {
    if (this.ready) {
      return;
    }

    const password = await secretManager.getSecret("middleware-dev-db");

    this.pool = new Pool({
      host: "<db host>",
      user: "postgresql",
      database: "middleware",
      password: password,
      port: 5432,
    });

    this.ready = true;
  },
};
