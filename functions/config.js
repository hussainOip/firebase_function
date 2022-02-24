/**
 * This module is responsible for maintaining all configurations
 * that are used site wide.
 */
 var config = {}

 // Application Information
 config.app = {}
 config.app.mode = {}
 config.app.errorUrl = '/error';
 config.app.mode.DEVELOPMENT = 'development';
 config.app.mode.PRODUCTION = 'production';
 config.app.mode.current = config.app.mode.DEVELOPMENT;
 
 // HTTP server configuration
//  config.http = {}
//  config.http.port = (config.app.mode.current == config.app.mode.DEVELOPMENT) ? 3000 : 3000;
//  config.http.enableSSL = false;
 
// Db Configuration
config.db = {};
console.log(config);
config.db.url = 'mongodb+srv://produc_test:prodTest@123@cluster0.txdhr.mongodb.net/firebasefunc?retryWrites=true&w=majority'; 