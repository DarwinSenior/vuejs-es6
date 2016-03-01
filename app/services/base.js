import 'whatwg-fetch';
import config from '../config';
import restful, { fetchBackend } from 'restful.js';

const conf = config();

const api = restful(conf.api, fetchBackend(fetch));
api.identifier('_id');
export { api };
