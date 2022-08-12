export const formatURLSearchParams = (data: any) => {
  let modifiedData: Record<string, string> = {};

  Object.keys(data).forEach((key: string) => {
    modifiedData[key] = data[key];
  });

  return modifiedData;
};
