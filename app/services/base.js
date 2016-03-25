import 'whatwg-fetch';
import config from '../config';
import restful, { fetchBackend } from 'restful.js';

// Import config from env.json
const conf = config();

// Create an API object using restful.js
const api = restful(conf.api, fetchBackend(fetch));
api.identifier('_id');
export { api };
