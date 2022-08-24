var liveServer = require("live-server");

var params = {
  port: 3000,
  host: "192.168.0.17",
  root: `${process.cwd()}/public`,
  open: false,
};
liveServer.start(params);
