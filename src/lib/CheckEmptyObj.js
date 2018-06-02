export const CheckEmptyObj = (obj) => {
  const objList = Object.keys(obj);

  return objList.length === 0;
}
