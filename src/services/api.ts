import axios from "axios";

const api = axios.create({
  baseURL: 'https://api.slingacademy.com/v1/sample-data/',
  timeout: 10000,
});

// Interceptor xử lý lỗi chung
api.interceptors.response.use(
   (response) => response,
  (error) => {
    //  NETWORK ERROR
    if (!error.response) {
      console.log("🌐 Network error: Không kết nối được server");
    }

    // TIMEOUT
    else if (error.code === "ECONNABORTED") {
      console.log("⏳ Timeout: Server phản hồi quá lâu");
    }

    // ❌ HTTP ERROR (401, 404, 500...)
    else {
      console.log("❌ HTTP Error:", error.response.status);
    }

    return Promise.reject(error);
  }
);

export default api;