import type { FoxType } from ".";

export interface FetchApi {
  fetchClient: () => Promise<FoxType>;
  queryParams: {
    queryKey: string[];
    queryFn: () => Promise<FoxType>;
  };
}
