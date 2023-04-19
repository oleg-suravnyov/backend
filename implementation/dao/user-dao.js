const { Pool } = require("pg");
const connection = require("./connection");

module.exports = {
  connection: connection,

  init: async function () {
    await this.connection.init();
  },

  read: async function () {
    console.log("[UserDAO.read]");

    let client = undefined;
    try {
      client = await this.connection.pool.connect();

      const query = {
        text:
          'SELECT U."id" AS VALUE, ' +
          'CONCAT(U."firstName", ' +
          "' ', " +
          'U."lastName") AS LABEL, ' +
          'U."email" AS EMAIL ' +
          'FROM PUBLIC."user" AS U ' +
          'WHERE U."accountStatus" = TRUE',
      };

      const result = await client.query(query);
      console.log("[UserDAO.read]", "result", result);

      return result.rows.length ? result.rows : [];
    } catch (e) {
      console.log("[UserDAO.read]", "error", e);
    } finally {
      if (client) {
        await client.release();
      }
    }
    return undefined;
  },
};
