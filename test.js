const ModuleClass = require("spawn-event-emitter-issue");

var moduleObject = new ModuleClass();

moduleObject.start();

moduleObject.on("data", data => {
  console.log(data);
});
