import { SearchResponseItem } from './search-response-item';

export interface SearchResponse {
  search: SearchResponseItem[];
  totalResults: string;
  response: string;
}
