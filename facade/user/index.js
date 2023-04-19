const userDAO = require("./dao/user-dao");

exports.handler = async (event) => {
  console.log("[handler]", JSON.stringify(event));

  const response = {
    statusCode: 500,
    headers: {
      "Access-Control-Allow-Headers": "Content-Type",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "OPTIONS,POST,GET",
    },
    body: "Request failed.",
  };

  if (event.httpMethod == "GET" && event.resource == "/user") {
    await userDAO.init();

    const read = await userDAO.read();
    console.log("[handler.user]", "read", read);

    if (!read) {
      return response;
    }

    response.statusCode = 200;
    response.body = JSON.stringify(read);
  }

  return response;
};
