import axios from "axios";
import Vue from "vue";
import Vuex from "vuex";
import VueAxios from "vue-axios";
import router from './../router'

Vue.use(Vuex);
Vue.use(VueAxios, axios);

export const authStore = {
  namespaced: true,

  state: {
    tenDonVi: String,
    userToken : JSON.parse(localStorage.getItem('user_token') || '{}'),
  },

  getters: {
    getTenDonVi: state => state.tenDonVi,
    getUserToken: state => state.userToken
  },

  mutations: {
    SET_TENDV(state, tenDonVi) {
      state.tenDonVi = tenDonVi;
    }
  },

  actions: {
    logout:({commit}) =>{
      localStorage.removeItem('user_token');
    },

    login: async ({ commit }, { infoLogin }) => {
      await axios
        .post(
          `http://172.16.100.14:8080/api/authenticate`, {
            maDonVi : infoLogin.maDonVi,
            username : infoLogin.username + '_'+infoLogin.maDonVi,
            password : infoLogin.password
          }
        )
        .then((result) => {
          localStorage.setItem('user_token',JSON.stringify(result.data))
        })
        .catch((err) => {
          alert( err);
        });
    },

    getMaDonVi: async({ commit }, { ma }) => {
      await axios
        .get(
          `http://172.16.100.14:8080/api/account/get-info-dmbhxh-by-ma-don-vi`, {
            params: {
              maDonVi: ma
            }
          }
        )
        .then((result) => {
          commit("SET_TENDV", result.data.dmbhxh.tenDonVi);
        })
        .catch((err) => {
          alert("Sai mã cơ quan " + err);
        });
    },
  },
};
