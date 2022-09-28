const net = require("net");
const { IP, PORT } = require("./constants");

// establishes a connection with the game server
const connect = function () {
  console.log("Connecting ...");
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });

  conn.on("connect", () => {
    console.log("Successfully connected to game server");
    conn.write("Name: SAM");
    conn.write("Say: dy/dx");
  });

  conn.on("data", (data) => {
    console.log("Server says: ", data);
  });
  
  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
};

module.exports = { connect };