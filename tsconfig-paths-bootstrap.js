// const tsConfig = require("./tsconfig.json");
const tsConfigPaths = require("tsconfig-paths");
 
const baseUrl = "./dist"; // Either absolute or relative path. If relative it's resolved to current working directory.
const cleanup = tsConfigPaths.register({
  baseUrl,
  paths: {
    "@src/*": ["./src/*"]
  }
});
// When path registration is no longer needed
// cleanup();
setTimeout(cleanup, 1000)