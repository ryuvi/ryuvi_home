var liveServer = require("live-server");

var params = {
  port: 3000,
  root: `${process.cwd()}/public`,
  open: false,
};
liveServer.start(params);
