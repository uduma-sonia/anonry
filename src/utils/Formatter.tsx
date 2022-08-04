export const cutTextFormatter = (val: string, num: number) => {
  if (val.length > num) {
    return `${val.substring(0, num)}...`;
  } else {
    return val;
  }
};
