import { message as Message } from "ant-design-vue";
import axios from "axios";
import store from "../store";

enum MessageStatus {
  "error",
  "success",
}

Message.config({
  top: `var(--size-88)`,
  maxCount: 1,
});

const instance = axios.create({
  baseURL: import.meta.env.VITE_APP_REQUEST_URL,
});

const handleUse = (msg?: string, status?: MessageStatus) => {
  store.commit("SET_SPINNING");

  if (msg) {
    if (status === MessageStatus.success) {
      Message.success(msg);
    } else {
      Message.error(msg);
    }
  }
};

instance.interceptors.request.use(
  (config) => {
    handleUse();
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (response) => {
    handleUse(response.data.message, MessageStatus.success);
    return response.data.data;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default instance;
