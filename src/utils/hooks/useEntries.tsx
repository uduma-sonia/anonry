import { entriesAPI } from "@utils/api";
import { swrKeys } from "@utils/swrKeys";
import useSWR, { SWRConfiguration } from "swr";

interface useUEntriesProps {
  options?: SWRConfiguration;
}
export function useEntries(props?: useUEntriesProps) {
  // @ts-ignore
  const options = props?.options ?? { revalidateOnMount: true };

  return useSWR(swrKeys.getUserEntries, entriesAPI.getUserEntries, {
    ...options,
  });
}
