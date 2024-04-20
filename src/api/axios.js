import axios from "axios";
import { Navigate } from "react-router-dom";

const endSession = () => {
  return <Navigate to="/" replace />;
};

export const BASE_URL = "http://192.168.45.91:8000/api/v1/";

const axiosInstance = axios.create({
  baseURL: BASE_URL,
});
export const ImageUploadingFetch = axios.create({
  baseURL: BASE_URL,
});

axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const token = localStorage.getItem("refreshgemplanet");
    if (error.response && error.response.status === 401 && token) {
      try {
        const { data } = await axios.post(`${BASE_URL}auth/token/refresh/`, {
          refresh: token,
        });
        localStorage.setItem("accessgemplanet", data.access);
        window.location.reload();
        return;
      } catch (error) {
        return Promise.reject(error);
      }
    }
  },
  (error) => {
    if (error.response && error.response.data) {
      return Promise.reject(error.response.data);
    }
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem("accessgemplanet") || '';
    return {
      ...config,
      headers: {
        ...config.headers,
        "Content-Type": "application/json",
        ...(!accessToken ? {} : { Authorization: `Bearer ${accessToken}` }),
      },
    };
  },
  (error) => {
    return Promise.reject(
      (error.response && error.response.data) || "Something went wrong"
    );
  }
);

ImageUploadingFetch.interceptors.response.use(
  (response) => response,
  ({ response }) => {
    if (response?.status === 401) {
      endSession();
    }
    return Promise.reject(
      (response && response.data) || "При запросе произошла ошибка"
    );
  }
);

ImageUploadingFetch.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem("accessgemplanet");
    return {
      ...config,
      headers: {
        ...config.headers,
        "Content-Type": "multipart/form-data",
        ...(!accessToken ? {} : { Authorization: `Bearer ${accessToken}` }),
      },
    };
  },
  (error) =>
    Promise.reject(
      (error.response && error.response.data) || "Something went wrong"
    )
);

export default axiosInstance;
