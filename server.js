const { log } = require('console');
const os = require('os');
const path = require('path'); 
const { add,multiply,bolu,subtract} = require('./math');
log(add(99,1),multiply(25,4),bolu(1000,10),subtract(45,15));
// log(os.type());
// log(os.version());
// log(os.homedir());
// log(os.machine());

// log(__dirname);
// log(__filename);

// log(path.basename(__filename));
// log(path.dirname(__filename));
// log(path.extname(__filename));

// log(path.parse(__filename));