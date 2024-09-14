const os = require("os");

//We can use an object to get all the informations about our operating system.
const thisMachineOS = {
    name: os.type(),
    release: os.release(),
    version: os.version(),
    platform: os.platform(),
    totalMemory: os.totalmem(),
    freeMemory: os.freemem(),
  };
  
  console.log(thisMachineOS);
