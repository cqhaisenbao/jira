export const cleanObject = (obj: any) => {
  const newObj = {} as any;
  Object.keys(obj).forEach((key) => {
    if (obj[key] !== undefined && obj[key] !== null && obj[key] !== "") {
      newObj[key] = obj[key];
    }
  });
  return newObj;
};
