import { SearchResponseItem } from './search-response-item';

export interface SearchResponse {
  Search: SearchResponseItem[];
  totalResults: string;
  Response: string;
}
