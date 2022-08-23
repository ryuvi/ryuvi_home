const projects = require("./src/data/projects");

module.exports = {
  site: {
    title: "Ryuvi Home",
    description: "Micro Static Site Generator in Node.js",
    basePath: process.env.NODE_ENV === "production" ? "/ryuvigen" : "",
    projects,
  },
  build: {
    outputPath: process.env.NODE_ENV === "production" ? "./docs" : "./public",
  },
};
