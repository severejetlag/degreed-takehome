import { SearchResponseItem } from './search-response-item';

export interface Config {
  search: SearchResponseItem[];
  totalResults: string;
  response: string;
}
