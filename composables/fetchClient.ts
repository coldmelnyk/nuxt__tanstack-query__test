import type { FetchApi, FoxType } from "~/types";

const fetchClient = async (): Promise<FoxType> => {
  return await fetch("https://randomfox.ca/floof/")
    .then((res) => res.json())
    .catch((error) => alert(error));
};

export const fetchApi: FetchApi = {
  fetchClient,
  queryParams: {
    queryKey: ["fox"],
    queryFn: fetchClient,
  },
};
