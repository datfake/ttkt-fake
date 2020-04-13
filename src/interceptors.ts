// import axios from "axios";
// import store from "./store";
// import router from "./router";

// axios.interceptors.request.use(
//     function(config) {
//       store.dispatch("fetchToken");
//       //const token = store.state.token;
//       if (token) {
//         config.headers.Authorization = `Bearer ${token}`;
//       }
      
//       return config;
//     },
//     function(err) {
//       return Promise.reject(err);
//     }
//   );
  
//   axios.interceptors.response.use(
//     function(response) {
//       return response;
//     },
//     function(error) {
      
//       if (error.response.status === 401) {
//         router.push("./login");
//       }
//       return Promise.reject(error);
//     }
//   );
  