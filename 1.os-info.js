const os = require("node:os");

console.log("Information about OS");
console.log("___________________");
console.log("Name from OS: ", os.platform());
console.log("Version from OS", os.release());
console.log("Architecture: ", os.arch());
console.log("CPUS", os.cpus());
console.log("Free memory", os.freemem());
console.log("Total memory", os.totalmem());
//Total Hours Pc Use
console.log("uptime", os.uptime() / 3600);
