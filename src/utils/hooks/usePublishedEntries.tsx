import { entriesAPI } from "@utils/api";
import { swrKeys } from "@utils/swrKeys";
import useSWR from "swr";

export function usePublishedEntries(props?: any) {
  return useSWR(
    swrKeys.getPublishedEntries({ page: 1 }),
    async () => entriesAPI.getUserEntries({ page: 1, published: true }),
    {
      revalidateOnMount: true,
    }
  );
}
