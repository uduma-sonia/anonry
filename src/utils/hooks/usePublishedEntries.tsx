import { entriesAPI } from "@utils/api";
import { swrKeys } from "@utils/swrKeys";
import useSWR from "swr";

export function usePublishedEntries(props?: any) {
  const { publishedPageNum } = props;

  return useSWR(
    swrKeys.getPublishedEntries({ page: publishedPageNum }),
    async () =>
      entriesAPI.getUserEntries({ page: publishedPageNum, published: true }),
    {
      revalidateOnMount: true,
    }
  );
}
