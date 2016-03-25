import 'whatwg-fetch';
import config from '../config';
import restful, { fetchBackend } from 'restful.js';

// Import config from env.json
const conf = config();

// Create an API object using restful.js
const api = restful(conf.api, fetchBackend(fetch));
api.identifier('_id');
export { api };

// Custom error interceptor to handle error messages received from the server
api.addErrorInterceptor((error, config) => {
  const { message, response } = error;

  return {
    message,
    response
  }
});
