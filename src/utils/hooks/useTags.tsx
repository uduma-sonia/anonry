import { tagsAPI } from "@utils/api";
import { swrKeys } from "@utils/swrKeys";
import useSWR, { SWRConfiguration } from "swr";

interface useUserProps {
  options?: SWRConfiguration;
}
export function useTags(props?: useUserProps) {
  // @ts-ignore
  const options = props?.options ?? { revalidateOnMount: true };

  return useSWR(swrKeys.getTags, tagsAPI.getTags, { ...options });
}
