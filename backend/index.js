const express = require("express");
const fs = require("fs");
const querystring = require("querystring");
const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUI = require("swagger-ui-express");
const bodyParser = require("body-parser");

const app = express();

const port = 3000;

app.use(express.static("public"));

app.use(bodyParser.json());

const swaggerOptions = {
  swaggerDefinition: {
    info: {
      title: `Team Error 404`,
      description: "API provided by Error 404 Team"
    },
    servers: ["https://error-404-api.lejhandgamingyt.repl.co"],
  },
  apis: [__dirname + "/Routes/*.js"],
};
const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use("/docs", swaggerUI.serve, swaggerUI.setup(swaggerDocs));

app.get('/', (req, res) => {
  res.redirect('/docs')
})

const setFolder = (dir) => {
  const routes = fs.readdirSync(dir);
  routes.forEach((route) => {
    if (route.endsWith(".js")) setFile(dir + "/" + route);
    else setFolder(dir + "/" + route);
  });
};
const setFile = (dir) => {
  const file = require(dir);
  app.use(file.end, file.router);
};

const Init = async () => {
  const routes = fs.readdirSync(__dirname + "/Routes");
  routes.forEach((route) => {
    if (route.endsWith(".js")) setFile(__dirname + "/Routes/" + route);
    else setFolder(__dirname + "/Routes/" + route);
  });

  app.use((req, res, next) => {
    if (req.originalUrl.startsWith("/docs/") || req.originalUrl == "/")
      return next();
    return res.status(404).json({
      error: true,
      message: "Invalid endPoint",
    });
  });
  app.listen(port, () => console.log("on port: " + port));
};

Init();