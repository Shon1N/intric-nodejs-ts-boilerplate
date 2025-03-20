// Import environment variables directly
const portNumber: string = process.env.PORT??"3000";

// TODO: Confirm the port number of the database
const dbPortNumber: number = 27017;

const dbName: string = 'demo';

//local server api
const homeRoot: string = `http://localhost:${portNumber}`;

//remote server api.
const hostRoot: string = '';

const connectionString: string = `mongodb://localhost:${dbPortNumber}/${dbName}`;

const dbUri: string  = process.env.ATLAS_URI?? "";

const apiSecret: string = 'demo-jwt';

// Define an interface for export configuration
interface EnvConfig {
  portNumber: string;
  dbPortNumber: number;
  dbName: string;
  homeRoot: string;
  hostRoot: string;
  connectionString: string;
  dbUri: string;
  apiSecret: string;
}

// Export the configuration object
const envConfig: EnvConfig = {
  portNumber,
  dbPortNumber,
  dbName,
  homeRoot,
  hostRoot,
  connectionString,
  dbUri,
  apiSecret,
};

export default envConfig;
