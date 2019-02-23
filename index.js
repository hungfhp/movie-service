const application = require('./dist');
// import config from "./config"
var config = require("./config");

module.exports = application;

if (require.main === module) {
  // Run the application
  const configRest = {
    rest: {
      port: config.port,
      host: config.host,
      openApiSpec: {
        // useful when used with OASGraph to locate your application
        setServersFromRequest: true,
      },
    },
  };
  application.main(configRest).catch(err => {
    console.error('Cannot start the application.', err);
    process.exit(1);
  });
}
