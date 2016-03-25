import path from 'path';
import env from '../build/env.json';

// Get environment variable
// Defaults to 'development'
const nodeEnv = process.env.NODE_ENV || 'development';
export { nodeEnv };

// Return a configuration object from build/env.json based on the node
// environment variable
export default function() {
    return env[nodeEnv];
}
