import { resolve } from "path/posix";
import request from "utils/request";

const userRequestUrl = {
  userLogin: "user/login",
};

export const findUserData = (parameter: object) => {
  return request.post(userRequestUrl.userLogin, parameter).then((response) => {
    return new Promise((resolve) => {
      resolve(response.data);
    });
  });
};
