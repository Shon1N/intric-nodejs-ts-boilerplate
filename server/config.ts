// Importing environment variables module
import envConfig from './env/env.js';

// Defining types for the environment configuration
interface ServerConfig {
  port: string;
}

interface UrlsConfig {
  homeRoot: string;
  hostRoot: string;
}

interface ConnectionStrings {
  dbConnectionString: string ;
  dbUri: string ;
}

// Defining the server configuration
const server: ServerConfig = {
  port: envConfig.portNumber,
};

// Defining URLs configuration
const urls: UrlsConfig = {
  homeRoot: envConfig.homeRoot,
  hostRoot: envConfig.hostRoot,
};

// Defining database connection strings
const connectionStrings: ConnectionStrings = {
  dbConnectionString: envConfig.connectionString, // Fixed typo from `connesctionString`
  dbUri: envConfig.dbUri,
};

interface Config {
    server: ServerConfig;
    connectionStrings: ConnectionStrings;
    urls: UrlsConfig    
  }

// Exporting all configurations as named exports
const config: Config =  {
  server,
  connectionStrings,
  urls,
};

export default config;
