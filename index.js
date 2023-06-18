const server = require("./api/server.js");
require("dotenv").config();

const port = process.env.PORT || 9001;

server.listen(port, () => {
  console.log(` Server is runnig like a horse ${port} `);
});
