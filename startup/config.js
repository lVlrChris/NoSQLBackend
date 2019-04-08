const config = require("config")

// Checks config variables
module.exports = function() {
    //Set optional env variables
    if (process.env.dbUrl) config.dbUrl = process.env.dbUrl;
    if (process.env.neo4jBolt) config.neo4jBolt = process.env.neo4jBolt;
    if (process.env.neo4jUsername) config.neo4jUsername = process.env.neo4jUsername;
    if (process.env.neo4jPassword) config.neo4jPassword = process.env.neo4jPassword;

    if (!config.get("dbUrl")) {
        throw new Error('ERROR: dbUrl is not defined')
    }
    if (!config.get("neo4jBolt")) {
        throw new Error('ERROR: neo4jBolt is not defined')
    }
    if (!config.get("neo4jUsername")) {
        throw new Error('ERROR: neo4jUsername is not defined')
    }
    if (!config.get("neo4jPassword")) {
        throw new Error('ERROR: neo4jPassword is not defined')
    }
}