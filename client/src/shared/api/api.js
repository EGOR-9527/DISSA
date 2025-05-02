import { makeAutoObservable } from "mobx";
import axios from "axios";

const API_URL = "http://localhost:7000/api/";

class RestApi {
  error = null;
  user = null;

  constructor() {
    makeAutoObservable(this);
  }

  setError(error) {
    this.error = error;
  }

  clearError() {
    this.setError(null);
  }

  setUser(user) {
    this.user = user;
  }

  async register(data, photos) {
    try {
      const formData = new FormData();

      Object.keys(data).forEach((key) => {
        formData.append(key, data[key]);
      });

      photos.forEach((photo, index) => {
        formData.append(`photo${index}`, photo);
      });

      const response = await axios.post(`${API_URL}reg/`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      const userData = {
        id: response.data.id,
        userId: response.data.userId,
        refreshToken: response.data.refreshToken,
        createdAt: response.data.createdAt,
        updatedAt: response.data.updatedAt,
      };

      this.setUser(userData);
      this.clearError();
    } catch (err) {
      this.handleError(err);
    }
  }

  handleError(error) {
    if (axios.isAxiosError(error)) {
      const errorResponse = error.response?.data;
      const message = errorResponse?.message || "Неизвестная ошибка";
      this.setError({ message });
    } else {
      this.setError({ message: "Неизвестная ошибка" });
    }
  }
}

export const api = new RestApi();
