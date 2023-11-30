import { entriesAPI } from "@utils/api";
import React from "react";
import useSWR from "swr";
import { useRouter } from "next/router";

export default function ToolkitView() {
  const router = useRouter();

  const { data: entries, error: entryError } = useSWR(
    router.isReady && "appraisals",
    async () => entriesAPI.getAllPublishedAppraisals(),
    {
      revalidateOnMount: true,
    }
  );

  console.log(entries);

  return (
    <div>
      {/* @ts-ignore */}
      <div>{entries?.message ?? "Fetching"}</div>
    </div>
  );
}
