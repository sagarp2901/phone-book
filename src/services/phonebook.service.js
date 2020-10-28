const URL = "https://randomuser.me/api/?results=20";

export const getUsers = () => {
  return fetch(URL);
}