import axios from 'axios';
import { config } from '../config';

export function getFeed(query) {
  let { id = '', tags = [] } = query;
  let search = new URLSearchParams({ id, tags });
  return axios.get(`${config.SERVER_ADD}/api/feeds`, { params: search });
}
