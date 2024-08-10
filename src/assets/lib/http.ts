// import axios from "axios";
// import { storage } from "../helpers/storage.helper";
// import { AuthResponse } from "../models/response/AuthResponse";

// // const server = axios.create({
// //   withCredentials: true,
// //   baseURL: `${process.env.REACT_APP_SERVER_URL}:${process.env.REACT_APP_SERVER_PORT}`,
// //   // baseURL: `${process.env.REACT_APP_SERVER_URL}`,
// // });

// server.interceptors.request.use((config) => {
//   config.headers.Authorization = `Bearer ${storage.get("token")}`;
//   if (process.env.REACT_APP_ENV === "DEVS") {
//     console.log("send", config);
//   }
//   return config;
// });

// server.interceptors.response.use(
//   (config) => {
//     if (process.env.REACT_APP_ENV === "DEVS") {
//       console.log("receive", config);
//     }
//     return config;
//   },
//   async (error) => {
//     const originalRequest = error.config;
//     if (
//       error.response.status === 401 &&
//       error.config &&
//       !error.config._isRetry
//     ) {
//       originalRequest._isRetry = true;
//       try {
//         const response = await server.get<AuthResponse>("/auth/refresh");
//         storage.set("token", response.data.accessToken);
//         return server.request(originalRequest);
//       } catch (e: any) {
//         console.log(e);
//       }
//     }
//     throw error;
//   }
// );

// export default server;
