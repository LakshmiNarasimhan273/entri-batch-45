const os = require("os");

// Software info
console.log("System platform", os.platform());
console.log("OS Type", os.type());
console.log("OS Release Version", os.release());
console.log("OS Current Version", os.version());
console.log("OS Architecture", os.arch());

// Hardware info
// kb -> mb -> gb -> tb
console.log("Total RAM", (os.totalmem() / (1024 ** 3)).toFixed(2));
console.log("Current Free Memory", (os.freemem() / (1024 ** 3)).toFixed(2));
console.log("Display uptime", (os.uptime() / 3600).toFixed(2));
// 60 * 60 = 3600

// Network info
console.log("Network informations", os.networkInterfaces());