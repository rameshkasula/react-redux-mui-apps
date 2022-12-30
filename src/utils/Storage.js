export const storeInLocal = async (key, data) => {
  await localStorage.setItem(key, JSON.stringify(data));
};

export const getLocalData = async (key) => {
  let results = await JSON.parse(localStorage.getItem(key));
  return results;
};

export const userData = JSON.parse(localStorage.getItem("userData"));
export const token = userData?.token;
