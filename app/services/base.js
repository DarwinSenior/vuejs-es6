import 'whatwg-fetch';
import restful, { fetchBackend } from 'restful.js';

// TODO move url to config
const api = restful('http://localhost:9090/api', fetchBackend(fetch));
export { api };
