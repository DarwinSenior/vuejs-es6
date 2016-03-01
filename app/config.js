import path from 'path';
import env from '../build/env.json';

export default function() {
    const nodeEnv = process.env.NODE_ENV || 'development';
    return env[nodeEnv];
}
