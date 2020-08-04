import axios from "axios";
import AsyncStorage from "@react-native-community/async-storage";

const instance = axios.create({
  baseURL: "http://api.systemstech.com.ng/api/user/502629",
});

instance.interceptors.request.use(
  async (config) => {
    const token = await AsyncStorage.getItem("@token");
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    config.headers["Content-Type"] = "application/json";
    config.headers["Accept"] = "application/json";
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default instance;
