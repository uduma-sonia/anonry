import { Service, ReqConfig } from "../types";
const prefix = "/entries";

function entriesService({ api }: Service) {
  type CreateEntry = {
    title: string;
    description: string;
    tags?: any;
  };

  const createEntry = async (data: CreateEntry, reqConfig?: ReqConfig) => {
    // const formData = new FormData();
    // Object.keys(data).forEach((key: any) => {
    //   // @ts-ignore
    //   if (Array.isArray(data[key])) {
    //     // @ts-ignore
    //     data[key].forEach((element: any) => {
    //       formData.append(key, element);
    //     });
    //   } else {
    //     // @ts-ignore
    //     formData.append(key, data[key]);
    //   }
    // });

    const result = await api.post(`${prefix}`, data, { ...reqConfig });
    return result;
  };

  return Object.freeze({
    createEntry,
  });
}

export default entriesService;
