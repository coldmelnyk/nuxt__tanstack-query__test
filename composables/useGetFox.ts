import { useQuery } from "@tanstack/vue-query";

export function useGetFox() {
  const addNote = useQuery(fetchApi.queryParams);

  return addNote;
}
