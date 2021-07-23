import { getToken } from "./token";

export const isUserAuthenticated = () => {
  return getToken() !== null;
};